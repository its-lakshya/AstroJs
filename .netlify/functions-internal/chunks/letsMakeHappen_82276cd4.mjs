import { a as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro/server_95c1ef2b.mjs';
import 'clsx';

const html = "";

				const frontmatter = {"title":"LET’S MAKE THINGS HAPPEN","content":"No matter what your digital needs are, we have the expertise and experience to help you succeed. Explore our services and portfolio to see how we can help you elevate your digital presence. And when you're ready, contact us to schedule a consultation with our team.","button":{"label":"Let's talk to us","link":"/","enable":true},"bannerImage":"../../assets/letsMakeHappen.png"};
				const file = "/Users/lakshyakumar/Desktop/Projects/landing-page-astrojs/src/content/home/letsMakeHappen.md";
				const url = undefined;
				function rawContent() {
					return "";
				}
				function compiledContent() {
					return html;
				}
				function getHeadings() {
					return [];
				}

				const Content = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter;
					content.file = file;
					content.url = url;

					return renderTemplate`${maybeRenderHead()}${unescapeHTML(html)}`;
				});

export { Content, compiledContent, Content as default, file, frontmatter, getHeadings, rawContent, url };
