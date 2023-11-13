/* empty css                           */import { c as createAstro, a as createComponent, r as renderTemplate, m as maybeRenderHead, d as renderComponent, b as addAttribute, e as renderUniqueStylesheet, f as renderScriptElement, g as createHeadAndContent, u as unescapeHTML, h as renderHead, i as renderSlot } from '../astro/server_95c1ef2b.mjs';
import 'clsx';
import { $ as $$Image } from './generic_8fdc1813.mjs';
import { A as AstroError, U as UnknownContentCollectionError } from '../astro/assets-service_d565d330.mjs';
import { prependForwardSlash } from '@astrojs/internal-helpers/path';

const Logo = new Proxy({"src":"/_astro/logo.6260510f.png","width":157,"height":40,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							
							return target[name];
						}
					});

const $$Astro$d = createAstro();
const $$Header = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$d, $$props, $$slots);
  Astro2.self = $$Header;
  return renderTemplate`${maybeRenderHead()}<div class="flex items-center justify-between w-full h-24 bg-white">${renderComponent($$result, "Image", $$Image, { "src": Logo, "alt": "logo", "class": "w-36 h-10" })}<ul class="flex items-center justify-between w-1/5">${[{ text: "home", href: "/" }, { text: "Blog", href: "/blog" }, { text: "Docs", href: "/" }, { text: "Contact", href: "/" }].map((element) => {
    return renderTemplate`<li class="leading-none text-dark"><a${addAttribute(element.href, "href")}>${element.text}</a></li>`;
  })}</ul></div>`;
}, "/Users/lakshyakumar/Desktop/Projects/landing-page-astrojs/src/components/Header.astro", void 0);

function createCollectionToGlobResultMap({
  globResult,
  contentDir
}) {
  const collectionToGlobResultMap = {};
  for (const key in globResult) {
    const keyRelativeToContentDir = key.replace(new RegExp(`^${contentDir}`), "");
    const segments = keyRelativeToContentDir.split("/");
    if (segments.length <= 1)
      continue;
    const collection = segments[0];
    collectionToGlobResultMap[collection] ??= {};
    collectionToGlobResultMap[collection][key] = globResult[key];
  }
  return collectionToGlobResultMap;
}
const cacheEntriesByCollection = /* @__PURE__ */ new Map();
function createGetCollection({
  contentCollectionToEntryMap,
  dataCollectionToEntryMap,
  getRenderEntryImport
}) {
  return async function getCollection(collection, filter) {
    let type;
    if (collection in contentCollectionToEntryMap) {
      type = "content";
    } else if (collection in dataCollectionToEntryMap) {
      type = "data";
    } else {
      console.warn(
        `The collection **${collection}** does not exist or is empty. Ensure a collection directory with this name exists.`
      );
      return;
    }
    const lazyImports = Object.values(
      type === "content" ? contentCollectionToEntryMap[collection] : dataCollectionToEntryMap[collection]
    );
    let entries = [];
    if (!(Object.assign({"BASE_URL":"/","MODE":"production","DEV":false,"PROD":true,"SSR":true,"SITE":undefined,"ASSETS_PREFIX":undefined},{_:process.env._,}))?.DEV && cacheEntriesByCollection.has(collection)) {
      entries = [...cacheEntriesByCollection.get(collection)];
    } else {
      entries = await Promise.all(
        lazyImports.map(async (lazyImport) => {
          const entry = await lazyImport();
          return type === "content" ? {
            id: entry.id,
            slug: entry.slug,
            body: entry.body,
            collection: entry.collection,
            data: entry.data,
            async render() {
              return render({
                collection: entry.collection,
                id: entry.id,
                renderEntryImport: await getRenderEntryImport(collection, entry.slug)
              });
            }
          } : {
            id: entry.id,
            collection: entry.collection,
            data: entry.data
          };
        })
      );
      cacheEntriesByCollection.set(collection, entries);
    }
    if (typeof filter === "function") {
      return entries.filter(filter);
    } else {
      return entries;
    }
  };
}
function createGetEntryBySlug({
  getEntryImport,
  getRenderEntryImport
}) {
  return async function getEntryBySlug(collection, slug) {
    const entryImport = await getEntryImport(collection, slug);
    if (typeof entryImport !== "function")
      return void 0;
    const entry = await entryImport();
    return {
      id: entry.id,
      slug: entry.slug,
      body: entry.body,
      collection: entry.collection,
      data: entry.data,
      async render() {
        return render({
          collection: entry.collection,
          id: entry.id,
          renderEntryImport: await getRenderEntryImport(collection, slug)
        });
      }
    };
  };
}
async function render({
  collection,
  id,
  renderEntryImport
}) {
  const UnexpectedRenderError = new AstroError({
    ...UnknownContentCollectionError,
    message: `Unexpected error while rendering ${String(collection)} \u2192 ${String(id)}.`
  });
  if (typeof renderEntryImport !== "function")
    throw UnexpectedRenderError;
  const baseMod = await renderEntryImport();
  if (baseMod == null || typeof baseMod !== "object")
    throw UnexpectedRenderError;
  const { default: defaultMod } = baseMod;
  if (isPropagatedAssetsModule(defaultMod)) {
    const { collectedStyles, collectedLinks, collectedScripts, getMod } = defaultMod;
    if (typeof getMod !== "function")
      throw UnexpectedRenderError;
    const propagationMod = await getMod();
    if (propagationMod == null || typeof propagationMod !== "object")
      throw UnexpectedRenderError;
    const Content = createComponent({
      factory(result, baseProps, slots) {
        let styles = "", links = "", scripts = "";
        if (Array.isArray(collectedStyles)) {
          styles = collectedStyles.map((style) => {
            return renderUniqueStylesheet(result, {
              type: "inline",
              content: style
            });
          }).join("");
        }
        if (Array.isArray(collectedLinks)) {
          links = collectedLinks.map((link) => {
            return renderUniqueStylesheet(result, {
              type: "external",
              src: prependForwardSlash(link)
            });
          }).join("");
        }
        if (Array.isArray(collectedScripts)) {
          scripts = collectedScripts.map((script) => renderScriptElement(script)).join("");
        }
        let props = baseProps;
        if (id.endsWith("mdx")) {
          props = {
            components: propagationMod.components ?? {},
            ...baseProps
          };
        }
        return createHeadAndContent(
          unescapeHTML(styles + links + scripts),
          renderTemplate`${renderComponent(
            result,
            "Content",
            propagationMod.Content,
            props,
            slots
          )}`
        );
      },
      propagation: "self"
    });
    return {
      Content,
      headings: propagationMod.getHeadings?.() ?? [],
      remarkPluginFrontmatter: propagationMod.frontmatter ?? {}
    };
  } else if (baseMod.Content && typeof baseMod.Content === "function") {
    return {
      Content: baseMod.Content,
      headings: baseMod.getHeadings?.() ?? [],
      remarkPluginFrontmatter: baseMod.frontmatter ?? {}
    };
  } else {
    throw UnexpectedRenderError;
  }
}
function isPropagatedAssetsModule(module) {
  return typeof module === "object" && module != null && "__astroPropagation" in module;
}

// astro-head-inject

const contentDir = '/src/content/';

const contentEntryGlob = /* #__PURE__ */ Object.assign({"/src/content/blogs/post1.md": () => import('../post1_363f6de1.mjs'),"/src/content/blogs/post2.md": () => import('../post2_7ee36a9f.mjs'),"/src/content/home/about.md": () => import('../about_7c920261.mjs'),"/src/content/home/footer.md": () => import('../footer_2220e6dc.mjs'),"/src/content/home/index.md": () => import('../index_92112edd.mjs'),"/src/content/home/letsMakeHappen.md": () => import('../letsMakeHappen_8e092837.mjs'),"/src/content/home/portfolio.md": () => import('../portfolio_2a1e5eb6.mjs'),"/src/content/home/services.md": () => import('../services_af94929a.mjs')});
const contentCollectionToEntryMap = createCollectionToGlobResultMap({
	globResult: contentEntryGlob,
	contentDir,
});

const dataEntryGlob = /* #__PURE__ */ Object.assign({});
const dataCollectionToEntryMap = createCollectionToGlobResultMap({
	globResult: dataEntryGlob,
	contentDir,
});
createCollectionToGlobResultMap({
	globResult: { ...contentEntryGlob, ...dataEntryGlob },
	contentDir,
});

let lookupMap = {};
lookupMap = {"home":{"type":"content","entries":{"footer":"/src/content/home/footer.md","letsmakehappen":"/src/content/home/letsMakeHappen.md","index":"/src/content/home/index.md","services":"/src/content/home/services.md","portfolio":"/src/content/home/portfolio.md","about":"/src/content/home/about.md"}},"blogs":{"type":"content","entries":{"post2":"/src/content/blogs/post2.md","post1":"/src/content/blogs/post1.md"}}};

function createGlobLookup(glob) {
	return async (collection, lookupId) => {
		const filePath = lookupMap[collection]?.entries[lookupId];

		if (!filePath) return undefined;
		return glob[collection][filePath];
	};
}

const renderEntryGlob = /* #__PURE__ */ Object.assign({"/src/content/blogs/post1.md": () => import('../post1_773660d4.mjs'),"/src/content/blogs/post2.md": () => import('../post2_eb9b3ecb.mjs'),"/src/content/home/about.md": () => import('../about_6c143e0e.mjs'),"/src/content/home/footer.md": () => import('../footer_a438886c.mjs'),"/src/content/home/index.md": () => import('../index_40efd930.mjs'),"/src/content/home/letsMakeHappen.md": () => import('../letsMakeHappen_4943317f.mjs'),"/src/content/home/portfolio.md": () => import('../portfolio_c6ea2ec8.mjs'),"/src/content/home/services.md": () => import('../services_5279f57d.mjs')});
const collectionToRenderEntryMap = createCollectionToGlobResultMap({
	globResult: renderEntryGlob,
	contentDir,
});

const getCollection = createGetCollection({
	contentCollectionToEntryMap,
	dataCollectionToEntryMap,
	getRenderEntryImport: createGlobLookup(collectionToRenderEntryMap),
});

const getEntryBySlug = createGetEntryBySlug({
	getEntryImport: createGlobLookup(contentCollectionToEntryMap),
	getRenderEntryImport: createGlobLookup(collectionToRenderEntryMap),
});

const twitterIcon = new Proxy({"src":"/_astro/twitterIcon.d6520865.png","width":29,"height":30,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							
							return target[name];
						}
					});

const facebookIcon = new Proxy({"src":"/_astro/facebookIcon.d18b180c.png","width":29,"height":29,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							
							return target[name];
						}
					});

const instagramIcon = new Proxy({"src":"/_astro/instagramIcon.33fbff95.png","width":29,"height":30,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							
							return target[name];
						}
					});

const youtubeIcon = new Proxy({"src":"/_astro/youtubeIcon.c2802149.png","width":29,"height":29,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							
							return target[name];
						}
					});

const $$Astro$c = createAstro();
const $$Footer = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$c, $$props, $$slots);
  Astro2.self = $$Footer;
  const footerContent = await getEntryBySlug("home", "footer");
  return renderTemplate`${maybeRenderHead()}<div class="w-full h-full flex flex-col pt-20"><div class="flex px-40 w-full items-start justify-between"><div class="w-80 flex flex-col gap-y-8">${footerContent.data.bannerImage ? renderTemplate`${renderComponent($$result, "Image", $$Image, { "src": footerContent.data.bannerImage, "alt": "logo" })}` : null}<div class="text-lg tracking-wide text-justify">${footerContent.data.content}</div></div><div class="flex flex-col gap-y-4"><div class="font-semibold">Company</div><div class="flex flex-col gap-y-2 text-sm">${footerContent.data.services?.map((entry) => {
    return renderTemplate`<div>${entry.text}</div>`;
  })}</div></div><div class="flex flex-col gap-y-4"><div class="font-semibold">Services</div><div class="flex flex-col gap-y-2 text-sm">${footerContent.data.services?.map((entry) => {
    return renderTemplate`<div>${entry.subText}</div>`;
  })}</div></div><div class="flex flex-col gap-y-4"><div class="font-semibold">Start a Conversation</div><div class="flex flex-col gap-y-2 text-sm [&>*]:flex [&>*]:gap-x-4">${footerContent.data.additional?.map((entry) => {
    return renderTemplate`<div class="flex items-center justiy-center"><div class="w-8 h-8 rounded-full bg-[#FAE86E] flex items-center justify-center">${renderComponent($$result, "Image", $$Image, { "src": entry.image, "alt": "skype icon" })}</div>${entry.text}</div>`;
  })}</div></div></div><div class="bg-[#FFF8F2] w-full h-20 px-40 flex  items-center justify-between mt-20"><div>${footerContent.data.description}</div><div class="flex gap-x-4">${[twitterIcon, facebookIcon, instagramIcon, youtubeIcon].map((entry) => {
    return renderTemplate`${renderComponent($$result, "Image", $$Image, { "src": entry, "alt": "logo" })}`;
  })}</div></div></div>`;
}, "/Users/lakshyakumar/Desktop/Projects/landing-page-astrojs/src/components/Footer.astro", void 0);

const $$Astro$b = createAstro();
const $$Layout = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$b, $$props, $$slots);
  Astro2.self = $$Layout;
  const { title } = Astro2.props;
  return renderTemplate`<html lang="en"><head><meta charset="UTF-8"><meta name="description" content="Astro description"><meta name="viewport" content="width=device-width"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><meta name="generator"${addAttribute(Astro2.generator, "content")}><title>${title}</title>${renderHead()}</head><body class=""><div class="sticky top-0 z-10 bg-white px-40">${renderComponent($$result, "Header", $$Header, {})}</div>${renderSlot($$result, $$slots["default"])}<div class="w-full h-auto">${renderComponent($$result, "Footer", $$Footer, {})}</div></body></html><!-- <style is:global>
	:root {
		--accent: 136, 58, 234;
		--accent-light: 224, 204, 250;
		--accent-dark: 49, 10, 101;
		--accent-gradient: linear-gradient(
			45deg,
			rgb(var(--accent)),
			rgb(var(--accent-light)) 30%,
			white 60%
		);
	}
	html {
		font-family: system-ui, sans-serif;
		background: #13151a;
		background-size: 224px;
	}
	code {
		font-family:
			Menlo,
			Monaco,
			Lucida Console,
			Liberation Mono,
			DejaVu Sans Mono,
			Bitstream Vera Sans Mono,
			Courier New,
			monospace;
	}
</style> -->`;
}, "/Users/lakshyakumar/Desktop/Projects/landing-page-astrojs/src/layouts/Layout.astro", void 0);

const groupedImage = new Proxy({"src":"/_astro/landingGroup.f2f92f0c.png","width":135,"height":55,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							
							return target[name];
						}
					});

const $$Astro$a = createAstro();
const $$Landing = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$a, $$props, $$slots);
  Astro2.self = $$Landing;
  const landingContent = await getEntryBySlug("home", "index");
  return renderTemplate`${maybeRenderHead()}<div class="h-screen py-24 w-full flex items-center justify-between gap-x-20"><div class=" w-2/3 h-full flex flex-col gap-y-8 justify-center"><div class="text-7xl tracking-wide leading-[1.25]">${landingContent.data.title}</div><div class="text-xl text-justify">${landingContent.data.content}</div><a${addAttribute(landingContent.data.button?.link, "href")} class="w-44 h-12 bg-[#FAE86E] flex justify-center items-center rounded-full">${landingContent.data.button?.label} &nbsp; &#x2197;</a><div class="flex flex-col gap-y-2 mt-12 w-1/2">${renderComponent($$result, "Image", $$Image, { "src": groupedImage, "alt": "group image" })}<span>${landingContent.data.description}</span></div></div><div class="flex flex-col items-center justify-center gap-y-4 w-1/3">${landingContent.data.bannerImage ? renderTemplate`${renderComponent($$result, "Image", $$Image, { "src": landingContent.data.bannerImage, "alt": "landing banner image", "class": "w-full " })}` : null}<div class="flex flex-wrap gap-4">${landingContent.data.services?.map((entry) => {
    return renderTemplate`<div class="w-auto px-4 rounded-full h-10 border border-black flex items-center justify-center">${entry.text}</div>`;
  })}</div></div></div>`;
}, "/Users/lakshyakumar/Desktop/Projects/landing-page-astrojs/src/components/homeComponent/Landing.astro", void 0);

const $$Astro$9 = createAstro();
const $$About = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$9, $$props, $$slots);
  Astro2.self = $$About;
  const aboutContent = await getEntryBySlug("home", "about");
  return renderTemplate`${maybeRenderHead()}<div class="h-screen w-full flex items-center justify-between gap-x-20 "><div class="flex flex-col items-center justify-center gap-y-4 w-1/2 h-96">${aboutContent.data.bannerImage ? renderTemplate`${renderComponent($$result, "Image", $$Image, { "src": aboutContent.data.bannerImage, "alt": "about banner image", "class": "w-full " })}` : null}</div><div class=" w-1/2 h-auto  flex flex-col gap-y-8 justify-center"><div class="text-3xl font-semibold tracking-wide leading-[1.25]">${aboutContent.data.title}</div><div class="text-lg tracking-wide text-justify">${aboutContent.data.content}</div><a${addAttribute(aboutContent.data.button?.link, "href")} class="w-44 h-12 bg-[#FAE86E] flex justify-center items-center rounded-full">${aboutContent.data.button?.label} &nbsp; &#x2197;</a></div></div>`;
}, "/Users/lakshyakumar/Desktop/Projects/landing-page-astrojs/src/components/homeComponent/About.astro", void 0);

const $$Astro$8 = createAstro();
const $$Service = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$8, $$props, $$slots);
  Astro2.self = $$Service;
  const servicesContent = await getEntryBySlug("home", "services");
  return renderTemplate`${maybeRenderHead()}<div class="bg-black w-full h-screen flex items-center justify-between px-40 text-white gap-x-24"><div class="w-1/3 h-2/3 flex flex-col gap-y-8 justify-between items-center "><div class="text-5xl">${servicesContent.data.title}</div>${servicesContent.data.bannerImage ? renderTemplate`${renderComponent($$result, "Image", $$Image, { "src": servicesContent.data.bannerImage, "alt": "services Image" })}` : null}</div><div class="w-2/3 h-2/3 flex flex-col items-center justify-between gap-y-12"><div class="text-lg tracking-wide text-justify">${servicesContent.data.content}</div><div class="w-full border-t-2">${servicesContent.data.services?.map((entry) => {
    return renderTemplate`<div class="flex items-center justify-between w-full border-b-2 h-20 text-3xl"><div class="flex items-center gap-x-4"><span class="text-[#FAE86E]">${entry.count}</span><span class="">${entry.text}</span></div><span class="text-[#FAE86E]"> &nbsp; &#x2197; </span></div>`;
  })}</div></div></div>`;
}, "/Users/lakshyakumar/Desktop/Projects/landing-page-astrojs/src/components/homeComponent/Service.astro", void 0);

const $$Astro$7 = createAstro();
const $$Portfolio = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$7, $$props, $$slots);
  Astro2.self = $$Portfolio;
  const portfolioContent = await getEntryBySlug("home", "portfolio");
  return renderTemplate`${maybeRenderHead()}<div class="h-full w-full flex flex-col gap-y-12 items-center"><div class="flex items-center justify-between "><div class="w-1/4 text-5xl">${portfolioContent.data.title}</div><div class="w-3/5 text-lg tracking-wide text-justify">${portfolioContent.data.content}</div></div><div class="flex flex-wrap w-full justify-between gap-y-12">${portfolioContent.data.services?.map((entry) => {
    return renderTemplate`<div class=" w-[22.5rem] h-[29rem] flex flex-col items-start justify-between">${entry.image ? renderTemplate`${renderComponent($$result, "Image", $$Image, { "src": entry.image, "alt": "portfolio image" })}` : null}<div class="flex flex-col gap-y-1"><span class="text-xl">${entry.text}</span><span class="">${entry.count}</span></div></div>`;
  })}</div><a${addAttribute(portfolioContent.data.button?.link, "href")} class="w-44 h-12 bg-[#FAE86E] flex justify-center items-center rounded-full ">${portfolioContent.data.button?.label} &nbsp; &#x2197;</a></div>`;
}, "/Users/lakshyakumar/Desktop/Projects/landing-page-astrojs/src/components/homeComponent/Portfolio.astro", void 0);

const $$Astro$6 = createAstro();
const $$LetsMakeHappen = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$6, $$props, $$slots);
  Astro2.self = $$LetsMakeHappen;
  const letsMakeHappenContent = await getEntryBySlug("home", "letsmakehappen");
  return renderTemplate`${maybeRenderHead()}<div class="w-full bg-[#FAE86E] h-[22rem] flex items-center justify-evenly"><div class="flex flex-col items-start justify-between h-[16rem] w-[60%]"><div class="text-5xl tracking-wide">${letsMakeHappenContent.data.title}</div><div class="tracking-wide text-lg text-justify">${letsMakeHappenContent.data.content}</div><a${addAttribute(letsMakeHappenContent.data.button?.link, "href")} class="w-44 h-12 border border-black flex justify-center items-center rounded-full">${letsMakeHappenContent.data.button?.label} &nbsp; &#x2197;</a></div>${letsMakeHappenContent.data.bannerImage ? renderTemplate`${renderComponent($$result, "Image", $$Image, { "src": letsMakeHappenContent.data.bannerImage, "alt": "bacground svg" })}` : null}</div>`;
}, "/Users/lakshyakumar/Desktop/Projects/landing-page-astrojs/src/components/homeComponent/LetsMakeHappen.astro", void 0);

const $$Astro$5 = createAstro();
const $$RecentBlogs = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$5, $$props, $$slots);
  Astro2.self = $$RecentBlogs;
  const recentBolgsContent = await getCollection("blogs");
  return renderTemplate`${maybeRenderHead()}<div><div class="w-full flex flex-col gap-y-10 h-full py-20 justify-center "><div class="text-5xl font-medium ">RECENT BLOGS</div><div class="flex items-center justify-center gap-x-8 overflow-x-scroll">${recentBolgsContent.map((entry) => {
    return renderTemplate`<div class="flex flex-col gap-y-6 w-1/2 ">${entry.data.bannerImage ? renderTemplate`${renderComponent($$result, "Image", $$Image, { "src": entry.data.bannerImage, "alt": "recent blog image", "class": "rounded-md w-[50rem]" })}` : null}<div class="flex flex-col gap-y-5 w-full"><div class="flex text-sm gap-x-3 "><div class="font-bold">${entry.data.tag}</div><div>${entry.data.date}</div></div><div class="text-2xl font-medium">${entry.data.title}</div><div class="text-justify h-12 overflow-hidden">${entry.body}</div><a${addAttribute(entry.data.button?.link, "href")} class="w-36 h-9 border border-black flex justify-center items-center rounded-full">${entry.data.button?.label} &nbsp; &#x2197;</a></div></div>`;
  })}</div></div></div>`;
}, "/Users/lakshyakumar/Desktop/Projects/landing-page-astrojs/src/components/homeComponent/RecentBlogs.astro", void 0);

const $$Astro$4 = createAstro();
const $$Index$2 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$Index$2;
  return renderTemplate`${maybeRenderHead()}<div class="flex flex-col items-center w-full relative z-0"><div class="mx-40">${renderComponent($$result, "Landing", $$Landing, {})}</div><div class="mx-40">${renderComponent($$result, "About", $$About, {})}</div><div class="w-full h-screen">${renderComponent($$result, "Service", $$Service, {})}</div><div class="w-full h-auto py-40 px-40">${renderComponent($$result, "Portfolio", $$Portfolio, {})}</div><div class="w-full h-auto px-40 pb-40">${renderComponent($$result, "LetsMakeHappen", $$LetsMakeHappen, {})}</div><div class="w-full h-screen px-40 bg-[#FFF8F2]">${renderComponent($$result, "RecentBlogs", $$RecentBlogs, {})}</div></div>`;
}, "/Users/lakshyakumar/Desktop/Projects/landing-page-astrojs/src/pages/Home/index.astro", void 0);

const $$file$2 = "/Users/lakshyakumar/Desktop/Projects/landing-page-astrojs/src/pages/Home/index.astro";
const $$url$2 = "/Home";

const index$2 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Index$2,
	file: $$file$2,
	url: $$url$2
}, Symbol.toStringTag, { value: 'Module' }));

const $$Astro$3 = createAstro();
const $$Index$1 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$Index$1;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Home" }, { "default": ($$result2) => renderTemplate`${renderComponent($$result2, "Home", $$Index$2, {})}` })}<!-- <style>
	main {
		margin: auto;
		padding: 1rem;
		width: 800px;
		max-width: calc(100% - 2rem);
		color: white;
		font-size: 20px;
		line-height: 1.6;
	}
	.astro-a {
		position: absolute;
		top: -32px;
		left: 50%;
		transform: translatex(-50%);
		width: 220px;
		height: auto;
		z-index: -1;
	}
	h1 {
		font-size: 4rem;
		font-weight: 700;
		line-height: 1;
		text-align: center;
		margin-bottom: 1em;
	}
	.text-gradient {
		background-image: var(--accent-gradient);
		-webkit-background-clip: text;
		-webkit-text-fill-color: transparent;
		background-size: 400%;
		background-position: 0%;
	}
	.instructions {
		margin-bottom: 2rem;
		border: 1px solid rgba(var(--accent-light), 25%);
		background: linear-gradient(rgba(var(--accent-dark), 66%), rgba(var(--accent-dark), 33%));
		padding: 1.5rem;
		border-radius: 8px;
	}
	.instructions code {
		font-size: 0.8em;
		font-weight: bold;
		background: rgba(var(--accent-light), 12%);
		color: rgb(var(--accent-light));
		border-radius: 4px;
		padding: 0.3em 0.4em;
	}
	.instructions strong {
		color: rgb(var(--accent-light));
	}
	.link-card-grid {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(24ch, 1fr));
		gap: 2rem;
		padding: 0;
	}
</style> -->`;
}, "/Users/lakshyakumar/Desktop/Projects/landing-page-astrojs/src/pages/index.astro", void 0);

const $$file$1 = "/Users/lakshyakumar/Desktop/Projects/landing-page-astrojs/src/pages/index.astro";
const $$url$1 = "";

const index$1 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Index$1,
	file: $$file$1,
	url: $$url$1
}, Symbol.toStringTag, { value: 'Module' }));

const $$Astro$2 = createAstro();
const $$BlogHeader = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$BlogHeader;
  return renderTemplate`${maybeRenderHead()}<div class="flex text-lg tracking-wide"><div>Hooman Digital &nbsp</div><li>Blog</li></div>`;
}, "/Users/lakshyakumar/Desktop/Projects/landing-page-astrojs/src/components/blogComponent/BlogHeader.astro", void 0);

const $$Astro$1 = createAstro();
const $$BlogContent = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$BlogContent;
  const blogContent = await getEntryBySlug("blogs", "post1");
  return renderTemplate`${maybeRenderHead()}<div class="w-full flex flex-col gap-y-10">${renderComponent($$result, "Image", $$Image, { "src": blogContent.data.bannerImage, "alt": "banner Image", "class": "w-full h-[24rem] rounded-2xl" })}<div class="flex justify-between items-center"><div class="text-xl font-medium">${blogContent.data.tag}</div><div class="text-lg font-light">${blogContent.data.date}</div></div><div class="text-5xl font-medium">${blogContent.data.title}</div><div class="tracking-wide leading-[1.7rem] text-justify">${blogContent.body}</div></div>`;
}, "/Users/lakshyakumar/Desktop/Projects/landing-page-astrojs/src/components/blogComponent/BlogContent.astro", void 0);

const $$Astro = createAstro();
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Blog" }, { "default": ($$result2) => renderTemplate`${maybeRenderHead()}<div class="w-full my-20"><div class="mx-40 my-20">${renderComponent($$result2, "BlogHeader", $$BlogHeader, {})}</div><div class="mx-40 my-20">${renderComponent($$result2, "BlogContent", $$BlogContent, {})}</div><div class="w-full h-screen px-40 bg-[#FFF8F2]">${renderComponent($$result2, "RecentBlogs", $$RecentBlogs, {})}</div><div class="w-full h-auto px-40 my-40 ">${renderComponent($$result2, "LetsMakeHappen", $$LetsMakeHappen, {})}</div></div>` })}`;
}, "/Users/lakshyakumar/Desktop/Projects/landing-page-astrojs/src/pages/blog/index.astro", void 0);

const $$file = "/Users/lakshyakumar/Desktop/Projects/landing-page-astrojs/src/pages/blog/index.astro";
const $$url = "/blog";

const index = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Index,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { index$1 as a, index as b, index$2 as i };
