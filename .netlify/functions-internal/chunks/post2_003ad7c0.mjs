import { a as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro/server_95c1ef2b.mjs';
import 'clsx';

const html = "<p>Unicorns are majestic creatures that have captured the imaginations of people for centuries. In this comprehensive guide, we will explore the mystical world of unicorn farming and learn everything you need to know to start your very own unicorn farm.</p>\n<p>Unicorn farming is a time-honored tradition that dates back to ancient times. These mythical beings are known for their stunning beauty, magical abilities, and, of course, their legendary horns. But before you embark on your unicorn farming journey, it’s essential to understand the basics.</p>";

				const frontmatter = {"title":"Navigating the Digital Age: Cybersecurity Essentials","tag":"MARKETING","bannerImage":"../../assets/post2.png","date":"26 September 2023","button":{"label":"Read more","link":"/","enable":true}};
				const file = "/Users/lakshyakumar/Desktop/Projects/landing-page-astrojs/src/content/blogs/post2.md";
				const url = undefined;
				function rawContent() {
					return "\nUnicorns are majestic creatures that have captured the imaginations of people for centuries. In this comprehensive guide, we will explore the mystical world of unicorn farming and learn everything you need to know to start your very own unicorn farm.\n\n\nUnicorn farming is a time-honored tradition that dates back to ancient times. These mythical beings are known for their stunning beauty, magical abilities, and, of course, their legendary horns. But before you embark on your unicorn farming journey, it’s essential to understand the basics.";
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
