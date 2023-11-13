import { a as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro/server_95c1ef2b.mjs';
import 'clsx';

const html = "";

				const frontmatter = {"title":"FOOTER","content":"At Hooman Digital, we're more than just a team of digital experts. We're a group of individuals.","bannerImage":"../../assets/logo.png","description":"Copyright © 2023. All Rights Reserved.","services":[{"text":"Hire Team","subText":"UI/UX design"},{"text":"Jobs","subText":"Web Development"},{"text":"Brochers","subText":"Content writing"},{"text":"FAQs","subText":"Partnerships"},{"text":"Blog","subText":"Community management"},{"text":"Contact Us"}],"additional":[{"text":"Hooman Digital","image":"../../assets/skypeIcon.png"},{"text":"hello@hoomandigital.com","image":"../../assets/mailIcon.png"},{"text":"+91 123-456-0123","image":"../../assets/callIcon.png"},{"text":"+91 123-456-0124","image":"../../assets/whatsappIcon.png"}]};
				const file = "/Users/lakshyakumar/Desktop/Projects/landing-page-astrojs/src/content/home/footer.md";
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
