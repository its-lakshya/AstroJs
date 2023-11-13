import { a as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro/server_95c1ef2b.mjs';
import 'clsx';

const html = "";

				const frontmatter = {"title":"WE PROVIDE SERVICES","content":"At Hooman Digital, we offer a range of services to help you achieve your digital goals. Our services include At Hooman Digital, we offer a range of services to help you achieve your digital goals. Our services include.","bannerImage":"../../assets/servicesImage.png","services":[{"count":"01","text":"UI/UX DESIGN"},{"count":"02","text":"WEBSITE DEVELOPMENT"},{"count":"03","text":"CONTENT WRITING"},{"count":"04","text":"BRANDIN"},{"count":"05","text":"PARTNERSHIPS"},{"count":"06","text":"COMMUNITY MANNAGE"}]};
				const file = "/Users/lakshyakumar/Desktop/Projects/landing-page-astrojs/src/content/home/services.md";
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
