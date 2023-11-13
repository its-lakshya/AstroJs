import { c as createAstro, a as createComponent, r as renderTemplate, m as maybeRenderHead } from '../astro/server_95c1ef2b.mjs';
import 'clsx';
/* empty css                           */
const $$Astro = createAstro();
const $$404 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$404;
  return renderTemplate`<!-- <Layout title="Error"> -->${maybeRenderHead()}<div class="w-full h-screen flex items-center justfiy-center "><div class="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6"><div class="flex flex-col items-center justify-center max-w-screen-sm text-center"><h1 class="mb-4 text-7xl tracking-tight font-extrabold lg:text-9xl text-blue-600">404</h1><p class="mb-4 text-3xl tracking-tight font-bold text-gray-900 md:text-4xl ">Something's missing.</p><p class="mb-4 text-lg font-light text-gray-500 dark:text-gray-400">Sorry, we can't find that page. You'll find lots to explore on the home page. </p><a href="/" class="inline-flex text-white bg-blue-600 hover:bg-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center  my-4">Back to Homepage</a></div></div></div><!-- </Layout> -->`;
}, "/Users/lakshyakumar/Desktop/Projects/landing-page-astrojs/src/pages/404.astro", void 0);

const $$file = "/Users/lakshyakumar/Desktop/Projects/landing-page-astrojs/src/pages/404.astro";
const $$url = "/404";

export { $$404 as default, $$file as file, $$url as url };
