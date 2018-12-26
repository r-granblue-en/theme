// ==UserScript==
// @name        Subreddit Theme Reloader
// @author      FabulousCupcake
// @namespace   http://fabulous.cupcake.jp.net/
// @version     1.0.0
// @description Supplemental tool that livereloads subreddit theme for local development and testing.
// @include     https://*.reddit.com*
// @run-at      document-idle
// @connect     127.0.0.1
// @grant       GM_xmlhttpRequest
// ==/UserScript==

// This has to be 127.0.0.1 and NOT localhost
// https://developer.mozilla.org/en-US/docs/Web/Security/Mixed_content#Warnings_in_Web_Console
const STYLE_URL = "http://127.0.0.1:5000/src/style.css";
const INTERVAL  = 3000;
const DEBUG     = false;

let lastModified = "";

// dlog prints console messages if DEBUG is set to true
function dlog(...args) {
    if (!DEBUG) return;
    console.log(...args);
}

// xhrAsync is a promisified GM_xmlhttpRequest()
function xhrAsync(obj) {
    return new Promise((resolve, reject) => {
        GM_xmlhttpRequest({
            ...obj,
            onload: resolve
        });
    });
}

// parseHeaders takes raw responseHeaders and outputs clean key/value object of the headers
function parseHeaders(s) {
    const headers = s.trim().split("\r\n");
    const list = {};
    headers.forEach(header => {
        header = header.split(":");
        const key = header.shift().trim();
        const value = header.join(":").trim();
        list[key] = value;
    });

    return list;
}

// fetchHeaders sends HEAD request and returns the list of response headers
async function fetchHeaders() {
    const timeParam = Date.now()
    const res = await xhrAsync({
      url: `${STYLE_URL}?t=${timeParam}`,
      method: "HEAD",
    });
    return parseHeaders(res.responseHeaders);
}

// reloadCheck returns true of STYLE_URL changed, and false otherwise
async function reloadCheck() {
    const headers = await fetchHeaders();
    if (lastModified !== headers["last-modified"]) {
        lastModified = headers["last-modified"];
        return true;
    }
    return false;
}

// reloadStylesheet (re)loads STYLE_URL into the page
async function reloadStylesheet() {
    dlog("loading stylesheet!");
    const el = document.querySelector("#test-style");
    if (el) el.remove();
    document.head.insertAdjacentHTML("beforeend", `<link id="test-style" rel="stylesheet" href="${STYLE_URL}"/>`);

}

// initiateLoop starts setTimeout loop that periodically checks if STYLE_URL is updated
async function initiateLoop() {
    dlog("loop!");
    if (await reloadCheck()) reloadStylesheet();

    window.setTimeout(() => {
        initiateLoop();
    }, INTERVAL);
}

initiateLoop();
