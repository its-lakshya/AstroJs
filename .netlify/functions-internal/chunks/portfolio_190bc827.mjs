import { a as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro/server_95c1ef2b.mjs';
import 'clsx';

const html = "";

				const frontmatter = {"title":"OUR PORTFOLIO","content":"At Hooman Digital, we offer a range of services to help you achieve your digital goals. Our services include At Hooman Digital, we offer a range of services to help you achieve your digital goals. Our services include.","button":{"label":"View Projects","link":"/","enable":true},"services":[{"text":"HEALTH CARE","count":"Application","image":"../../assets/portfolio1.png"},{"text":"TRAVAL & TRANSPORT","count":"Application","image":"../../assets/portfolio3.png"},{"text":"MEDIA & COMMUNICATION","count":"Application","image":"../../assets/portfolio2.png"},{"text":"HEALTH CARE","count":"Application","image":"../../assets/portfolio1.png"},{"text":"TRAVAL & TRANSPORT","count":"Application","image":"../../assets/portfolio3.png"},{"text":"MEDIA & COMMUNICATION","count":"Application","image":"../../assets/portfolio2.png"}]};
				const file = "/Users/lakshyakumar/Desktop/Projects/landing-page-astrojs/src/content/home/portfolio.md";
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
