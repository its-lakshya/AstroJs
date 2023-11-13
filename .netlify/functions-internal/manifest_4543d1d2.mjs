import '@astrojs/internal-helpers/path';
import 'cookie';
import 'kleur/colors';
import 'string-width';
import 'mime';
import './chunks/astro/server_95c1ef2b.mjs';
import 'clsx';
import { compile } from 'path-to-regexp';

if (typeof process !== "undefined") {
  let proc = process;
  if ("argv" in proc && Array.isArray(proc.argv)) {
    if (proc.argv.includes("--verbose")) ; else if (proc.argv.includes("--silent")) ; else ;
  }
}

new TextEncoder();

function getRouteGenerator(segments, addTrailingSlash) {
  const template = segments.map((segment) => {
    return "/" + segment.map((part) => {
      if (part.spread) {
        return `:${part.content.slice(3)}(.*)?`;
      } else if (part.dynamic) {
        return `:${part.content}`;
      } else {
        return part.content.normalize().replace(/\?/g, "%3F").replace(/#/g, "%23").replace(/%5B/g, "[").replace(/%5D/g, "]").replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
      }
    }).join("");
  }).join("");
  let trailing = "";
  if (addTrailingSlash === "always" && segments.length) {
    trailing = "/";
  }
  const toPath = compile(template + trailing);
  return toPath;
}

function deserializeRouteData(rawRouteData) {
  return {
    route: rawRouteData.route,
    type: rawRouteData.type,
    pattern: new RegExp(rawRouteData.pattern),
    params: rawRouteData.params,
    component: rawRouteData.component,
    generate: getRouteGenerator(rawRouteData.segments, rawRouteData._meta.trailingSlash),
    pathname: rawRouteData.pathname || void 0,
    segments: rawRouteData.segments,
    prerender: rawRouteData.prerender,
    redirect: rawRouteData.redirect,
    redirectRoute: rawRouteData.redirectRoute ? deserializeRouteData(rawRouteData.redirectRoute) : void 0
  };
}

function deserializeManifest(serializedManifest) {
  const routes = [];
  for (const serializedRoute of serializedManifest.routes) {
    routes.push({
      ...serializedRoute,
      routeData: deserializeRouteData(serializedRoute.routeData)
    });
    const route = serializedRoute;
    route.routeData = deserializeRouteData(serializedRoute.routeData);
  }
  const assets = new Set(serializedManifest.assets);
  const componentMetadata = new Map(serializedManifest.componentMetadata);
  const clientDirectives = new Map(serializedManifest.clientDirectives);
  return {
    ...serializedManifest,
    assets,
    componentMetadata,
    clientDirectives,
    routes
  };
}

const manifest = deserializeManifest({"adapterName":"@astrojs/netlify/functions","routes":[{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"endpoint","route":"/_image","pattern":"^\\/_image$","segments":[[{"content":"_image","dynamic":false,"spread":false}]],"params":[],"component":"node_modules/astro/dist/assets/endpoint/generic.js","pathname":"/_image","prerender":false,"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/index.82994e48.css"}],"routeData":{"route":"/","type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":false,"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/index.82994e48.css"}],"routeData":{"route":"/home","type":"page","pattern":"^\\/Home\\/?$","segments":[[{"content":"Home","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/Home/index.astro","pathname":"/Home","prerender":false,"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/index.82994e48.css"}],"routeData":{"route":"/blog","type":"page","pattern":"^\\/blog\\/?$","segments":[[{"content":"blog","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/blog/index.astro","pathname":"/blog","prerender":false,"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/index.82994e48.css"}],"routeData":{"route":"/404","type":"page","pattern":"^\\/404\\/?$","segments":[[{"content":"404","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/404.astro","pathname":"/404","prerender":false,"_meta":{"trailingSlash":"ignore"}}}],"base":"/","compressHTML":true,"componentMetadata":[["\u0000astro:content",{"propagation":"in-tree","containsHead":false}],["/Users/lakshyakumar/Desktop/Projects/landing-page-astrojs/src/components/Footer.astro",{"propagation":"in-tree","containsHead":false}],["/Users/lakshyakumar/Desktop/Projects/landing-page-astrojs/src/layouts/Layout.astro",{"propagation":"in-tree","containsHead":false}],["/Users/lakshyakumar/Desktop/Projects/landing-page-astrojs/src/pages/blog/index.astro",{"propagation":"in-tree","containsHead":true}],["\u0000@astro-page:src/pages/blog/index@_@astro",{"propagation":"in-tree","containsHead":false}],["\u0000@astrojs-ssr-virtual-entry",{"propagation":"in-tree","containsHead":false}],["/Users/lakshyakumar/Desktop/Projects/landing-page-astrojs/src/pages/index.astro",{"propagation":"in-tree","containsHead":true}],["\u0000@astro-page:src/pages/index@_@astro",{"propagation":"in-tree","containsHead":false}],["/Users/lakshyakumar/Desktop/Projects/landing-page-astrojs/src/components/blogComponent/BlogContent.astro",{"propagation":"in-tree","containsHead":false}],["/Users/lakshyakumar/Desktop/Projects/landing-page-astrojs/src/components/homeComponent/About.astro",{"propagation":"in-tree","containsHead":false}],["/Users/lakshyakumar/Desktop/Projects/landing-page-astrojs/src/pages/Home/index.astro",{"propagation":"in-tree","containsHead":false}],["\u0000@astro-page:src/pages/Home/index@_@astro",{"propagation":"in-tree","containsHead":false}],["/Users/lakshyakumar/Desktop/Projects/landing-page-astrojs/src/components/homeComponent/Landing.astro",{"propagation":"in-tree","containsHead":false}],["/Users/lakshyakumar/Desktop/Projects/landing-page-astrojs/src/components/homeComponent/LetsMakeHappen.astro",{"propagation":"in-tree","containsHead":false}],["/Users/lakshyakumar/Desktop/Projects/landing-page-astrojs/src/components/homeComponent/Portfolio.astro",{"propagation":"in-tree","containsHead":false}],["/Users/lakshyakumar/Desktop/Projects/landing-page-astrojs/src/components/homeComponent/RecentBlogs.astro",{"propagation":"in-tree","containsHead":false}],["/Users/lakshyakumar/Desktop/Projects/landing-page-astrojs/src/components/homeComponent/Service.astro",{"propagation":"in-tree","containsHead":false}]],"renderers":[],"clientDirectives":[["idle","(()=>{var i=t=>{let e=async()=>{await(await t())()};\"requestIdleCallback\"in window?window.requestIdleCallback(e):setTimeout(e,200)};(self.Astro||(self.Astro={})).idle=i;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var s=(i,t)=>{let a=async()=>{await(await i())()};if(t.value){let e=matchMedia(t.value);e.matches?a():e.addEventListener(\"change\",a,{once:!0})}};(self.Astro||(self.Astro={})).media=s;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var r=(i,c,s)=>{let n=async()=>{await(await i())()},t=new IntersectionObserver(e=>{for(let o of e)if(o.isIntersecting){t.disconnect(),n();break}});for(let e of s.children)t.observe(e)};(self.Astro||(self.Astro={})).visible=r;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000@astrojs-ssr-virtual-entry":"entry.mjs","\u0000@astro-renderers":"renderers.mjs","\u0000empty-middleware":"_empty-middleware.mjs","/src/pages/404.astro":"chunks/pages/404_bc9d4b53.mjs","\u0000@astrojs-manifest":"manifest_4543d1d2.mjs","\u0000@astro-page:node_modules/astro/dist/assets/endpoint/generic@_@js":"chunks/generic_91265ac8.mjs","\u0000@astro-page:src/pages/index@_@astro":"chunks/index_62a51e15.mjs","\u0000@astro-page:src/pages/Home/index@_@astro":"chunks/index_29bf23bb.mjs","\u0000@astro-page:src/pages/blog/index@_@astro":"chunks/index_919727a6.mjs","\u0000@astro-page:src/pages/404@_@astro":"chunks/404_da6a19f0.mjs","/Users/lakshyakumar/Desktop/Projects/landing-page-astrojs/src/content/blogs/post1.md?astroContentCollectionEntry=true":"chunks/post1_363f6de1.mjs","/Users/lakshyakumar/Desktop/Projects/landing-page-astrojs/src/content/blogs/post2.md?astroContentCollectionEntry=true":"chunks/post2_7ee36a9f.mjs","/Users/lakshyakumar/Desktop/Projects/landing-page-astrojs/src/content/home/about.md?astroContentCollectionEntry=true":"chunks/about_7c920261.mjs","/Users/lakshyakumar/Desktop/Projects/landing-page-astrojs/src/content/home/footer.md?astroContentCollectionEntry=true":"chunks/footer_2220e6dc.mjs","/Users/lakshyakumar/Desktop/Projects/landing-page-astrojs/src/content/home/index.md?astroContentCollectionEntry=true":"chunks/index_92112edd.mjs","/Users/lakshyakumar/Desktop/Projects/landing-page-astrojs/src/content/home/letsMakeHappen.md?astroContentCollectionEntry=true":"chunks/letsMakeHappen_8e092837.mjs","/Users/lakshyakumar/Desktop/Projects/landing-page-astrojs/src/content/home/portfolio.md?astroContentCollectionEntry=true":"chunks/portfolio_2a1e5eb6.mjs","/Users/lakshyakumar/Desktop/Projects/landing-page-astrojs/src/content/home/services.md?astroContentCollectionEntry=true":"chunks/services_af94929a.mjs","/Users/lakshyakumar/Desktop/Projects/landing-page-astrojs/src/content/blogs/post1.md?astroPropagatedAssets":"chunks/post1_773660d4.mjs","/Users/lakshyakumar/Desktop/Projects/landing-page-astrojs/src/content/blogs/post2.md?astroPropagatedAssets":"chunks/post2_eb9b3ecb.mjs","/Users/lakshyakumar/Desktop/Projects/landing-page-astrojs/src/content/home/about.md?astroPropagatedAssets":"chunks/about_6c143e0e.mjs","/Users/lakshyakumar/Desktop/Projects/landing-page-astrojs/src/content/home/footer.md?astroPropagatedAssets":"chunks/footer_a438886c.mjs","/Users/lakshyakumar/Desktop/Projects/landing-page-astrojs/src/content/home/index.md?astroPropagatedAssets":"chunks/index_40efd930.mjs","/Users/lakshyakumar/Desktop/Projects/landing-page-astrojs/src/content/home/letsMakeHappen.md?astroPropagatedAssets":"chunks/letsMakeHappen_4943317f.mjs","/Users/lakshyakumar/Desktop/Projects/landing-page-astrojs/src/content/home/portfolio.md?astroPropagatedAssets":"chunks/portfolio_c6ea2ec8.mjs","/Users/lakshyakumar/Desktop/Projects/landing-page-astrojs/src/content/home/services.md?astroPropagatedAssets":"chunks/services_5279f57d.mjs","/Users/lakshyakumar/Desktop/Projects/landing-page-astrojs/src/content/blogs/post1.md":"chunks/post1_8bb72a6e.mjs","/Users/lakshyakumar/Desktop/Projects/landing-page-astrojs/src/content/blogs/post2.md":"chunks/post2_003ad7c0.mjs","/Users/lakshyakumar/Desktop/Projects/landing-page-astrojs/src/content/home/about.md":"chunks/about_56a3ec9b.mjs","/Users/lakshyakumar/Desktop/Projects/landing-page-astrojs/src/content/home/footer.md":"chunks/footer_98c20ffe.mjs","/Users/lakshyakumar/Desktop/Projects/landing-page-astrojs/src/content/home/index.md":"chunks/index_9f156130.mjs","/Users/lakshyakumar/Desktop/Projects/landing-page-astrojs/src/content/home/letsMakeHappen.md":"chunks/letsMakeHappen_82276cd4.mjs","/Users/lakshyakumar/Desktop/Projects/landing-page-astrojs/src/content/home/portfolio.md":"chunks/portfolio_190bc827.mjs","/Users/lakshyakumar/Desktop/Projects/landing-page-astrojs/src/content/home/services.md":"chunks/services_4570160c.mjs","astro:scripts/before-hydration.js":""},"assets":["/_astro/landingGroup.f2f92f0c.png","/_astro/logo.6260510f.png","/_astro/twitterIcon.d6520865.png","/_astro/facebookIcon.d18b180c.png","/_astro/instagramIcon.33fbff95.png","/_astro/youtubeIcon.c2802149.png","/_astro/portfolio3.9a40b5a5.png","/_astro/portfolio1.37a9cd9c.png","/_astro/portfolio2.7179de71.png","/_astro/letsMakeHappen.a87c2768.png","/_astro/skypeIcon.112a9f3b.png","/_astro/mailIcon.64ef5977.png","/_astro/post2.8d6fd01e.png","/_astro/callIcon.a998068a.png","/_astro/servicesImage.0ad33bca.png","/_astro/landingImage.4014327e.png","/_astro/post1.79cdb1ee.png","/_astro/whatsappIcon.e0cbf256.png","/_astro/aboutImage.c952f8d9.png","/_astro/index.82994e48.css","/favicon.svg"]});

export { manifest };
