import * as adapter from '@astrojs/netlify/netlify-functions.js';
import { renderers } from './renderers.mjs';
import { manifest } from './manifest_8f87ffc6.mjs';

const _page0  = () => import('./chunks/generic_e499b9cd.mjs');
const _page1  = () => import('./chunks/index_5b06e8b2.mjs');
const _page2  = () => import('./chunks/index_14c2dcae.mjs');
const _page3  = () => import('./chunks/index_26b184b4.mjs');
const _page4  = () => import('./chunks/404_4730677e.mjs');const pageMap = new Map([["node_modules/astro/dist/assets/endpoint/generic.js", _page0],["src/pages/index.astro", _page1],["src/pages/Home/index.astro", _page2],["src/pages/blog/index.astro", _page3],["src/pages/404.astro", _page4]]);
const _manifest = Object.assign(manifest, {
	pageMap,
	renderers,
});
const _args = {};

const _exports = adapter.createExports(_manifest, _args);
const handler = _exports['handler'];

const _start = 'start';
if(_start in adapter) {
	adapter[_start](_manifest, _args);
}

export { handler, pageMap };
