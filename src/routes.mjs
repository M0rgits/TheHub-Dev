import { readFileSync } from 'fs';
import path from 'path';
import { readFile } from 'fs/promises';


const insert = JSON.parse(await readFile(new URL('./data.json',
    import.meta.url)));

const __dirname = path.resolve();

const pages = {
    'index': 'index.html',
    /* Main */
    's': 'html/games/frame.html',
    'z': 'html/proxies/ppage.html',
    /* Games */
    'g': 'html/games/gpage.html',
    'h': 'html/games/html5.html',
    'el': 'html/games/emulators.html',
    'f': 'html/games/flash.html',
    'm': 'html/games/emulib.html',
    /* Proxies */
    'q': 'pages/proxnav/ultraviolet.html',
    'rh': 'pages/proxnav/rammerhead.html',
    'w': 'pages/proxnav/womginx.html',
    /* Proxy Presets */
    'sx': 'pages/proxnav/preset/spotify.html',
    'y': 'pages/proxnav/preset/youtube.html',
    'd': 'pages/proxnav/preset/discord.html',
    'r': 'pages/proxnav/preset/reddit.html',
    /* Misc */
    'fg': 'assets/g/archive/gfiles/flash/index.html',
    'eg': 'assets/g/archive/gfiles/rarch/index.html',
    'vos': 'archive/vibeOS/index.html'
};

const cookingInserts = insert.content;
const vegetables = insert.keywords;
const charRandom = insert.chars;
const splashRandom = insert.splash;
const cacheBustList = {
    "styles.css": "styles-1644738239.css",
    "h5-nav.js": "h5-nav-1644738239.js",
    "desc.js": "desc-1644738239.js",
    "header.js": "header-1644738239.js",
    "footer.js": "footer-1644738239.js",
    "common.js": "common-16451543478.js",
    "links.js": "links-1644738239.js"
};

export default { pages, cookingInserts, vegetables, charRandom, splashRandom, cacheBustList };