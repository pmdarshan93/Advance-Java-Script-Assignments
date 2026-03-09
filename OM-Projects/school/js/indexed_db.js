const DB_NAME = 'image-cache-db'; //NO I18N
const STORE_NAME = 'images'; //NO I18N
const DB_VERSION = 1;
function openDB() {
return new Promise((resolve, reject) => {
const request = indexedDB.open(DB_NAME, DB_VERSION);
request.onupgradeneeded = (event) => {
const db = event.target.result;
if (!db.objectStoreNames.contains(STORE_NAME)) {
db.createObjectStore(STORE_NAME);
}
};
request.onsuccess = () => resolve(request.result);
request.onerror = () => reject('Failed to open DB'); //NO I18N
});
}
async function getImageBlob(url) {
const db = await openDB();
const tx = db.transaction(STORE_NAME, 'readonly'); //NO I18N
const store = tx.objectStore(STORE_NAME);
const blob = await new Promise((resolve) => {
const req = store.get(url);
req.onsuccess = () => resolve(req.result);
req.onerror = () => resolve(null);
});
db.close();
return blob;
}
async function storeImage(url, blob) {
const db = await openDB();
const tx = db.transaction(STORE_NAME, 'readwrite'); //NO I18N
const store = tx.objectStore(STORE_NAME);
store.put(blob, url);
await tx.complete;
db.close();
}
async function getImageSrcFromURL(el, url) {
if (!(el instanceof HTMLImageElement)) throw new Error('Element must be an <img>.');
if (el.src === url) return;
// Remove loaded class for fade-in again
el.classList.remove('loaded');
let blob = await getImageBlob(url);
if (!blob) {
try {
const response = await fetch(url);
if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`);
blob = await response.blob();
await storeImage(url, blob); // save to IndexedDB
} catch (error) {
console.error(`Failed to fetch image from ${url}:`, error);
if (el.src !== 'fallback.svg') el.src = 'fallback.svg';
el.classList.add('loaded'); // fallback loaded
return null;
}
}
const objectURL = URL.createObjectURL(blob);
// Assign src and mark as loaded when the element renders
const showLoaded = () => {
el.classList.add('loaded');
el.onload = null;   // remove handlers
el.onerror = null;
};
el.onload = showLoaded;
el.onerror = () => {
if (el.src !== 'fallback.svg') el.src = 'fallback.svg'; // only fallback once
showLoaded();
};
el.src = objectURL;
// If already cached in memory
if (el.complete && el.naturalWidth !== 0) {
el.classList.add('loaded');
}}
const FONT_DB = "font-cache-db";
const FONT_STORE = "fonts";
const FONT_VERSION = 1;
function openFontDB() {
    return new Promise((resolve, reject) => {
        const req = indexedDB.open(FONT_DB, FONT_VERSION);
        req.onupgradeneeded = (e) => {
            const db = e.target.result;
            if (!db.objectStoreNames.contains(FONT_STORE)) {
                db.createObjectStore(FONT_STORE);
            }
        };
        req.onsuccess = () => resolve(req.result);
        req.onerror = () => reject("Failed to open font DB");
    });
}
async function getFontBlob(key) {
    const db = await openFontDB();
    const tx = db.transaction(FONT_STORE, "readonly");
    const store = tx.objectStore(FONT_STORE);

    const result = await new Promise(res => {
        const req = store.get(key);
        req.onsuccess = () => res(req.result);
        req.onerror = () => res(null);
    });
    db.close();
    return result;
}
async function storeFont(key, arrayBuffer) {
    const db = await openFontDB();
    const tx = db.transaction(FONT_STORE, "readwrite");
    tx.objectStore(FONT_STORE).put(arrayBuffer, key);
    await tx.complete;
    db.close();
}
async function loadFont(fontName, url) {
    let buffer = await getFontBlob(fontName);
    if (!buffer) {
        const res = await fetch(url);
        if (!res.ok) {
            console.error(`Failed to fetch font: ${url}`);
            return;
        }
        buffer = await res.arrayBuffer();
        await storeFont(fontName, buffer);
    }
    const blob = new Blob([buffer], { type: "font/ttf" });
    const blobURL = URL.createObjectURL(blob);
    const face = new FontFace(fontName, `url(${blobURL})`);
    await face.load();
    document.fonts.add(face);
}