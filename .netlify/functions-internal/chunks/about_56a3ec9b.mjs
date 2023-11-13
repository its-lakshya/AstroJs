import { a as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro/server_95c1ef2b.mjs';
import 'clsx';

const html = "";

				const frontmatter = {"title":"ABOUT US","content":"At Hooman Digital, we're more than just a team of digital experts. We're a group of individuals who are passionate about using our skills and expertise to help others succeed. Our team is made up of designers, developers, writers, marketers, and community builders, each with a unique perspective and set of skills. We're committed to creating digital solutions that are authentic, innovative, immersive, and intuitive. Whether we're designing a new website, developing a brand identity. View More","button":{"label":"View more","link":"/","enable":true},"bannerImage":"../../assets/aboutImage.png"};
				const file = "/Users/lakshyakumar/Desktop/Projects/landing-page-astrojs/src/content/home/about.md";
				const url = undefined;
				function rawContent() {
					return "\n";
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
