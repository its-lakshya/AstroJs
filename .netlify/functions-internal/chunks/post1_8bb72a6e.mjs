import { a as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro/server_95c1ef2b.mjs';
import 'clsx';

const html = "<p>Keepit simple: Simplicity is key in UI design. Strive for clean and uncluttered interfaces that are easy to understand and navigate. Avoid overwhelming users with too many options or information. Consistency is key: Consistent design elements and patterns across the interface enhance user familiarity and make it easier for users to learn and navigate the system. Maintain consistent use of colors, typography, icons, and layout throughout the interface.</p>\n<p>Provide feedback and affordance: Users should receive clear feedback when they interact with UI elements. Visual cues, such as hover effects or button states, can help users understand the system’s response to their actions. Additionally, elements should have clear affordance, meaning they should visually communicate their functionality. Prioritize readability: Ensure that text is legible and easy to read. Choose appropriate font sizes, contrast, and spacing to enhance readability. Consider different device sizes and viewing conditions to accommodate various user needs.</p>";

				const frontmatter = {"title":"8 Rules of Thumb in UI Desing","tag":"DEVELOPMENT","bannerImage":"../../assets/post1.png","date":"23 September 2023","button":{"label":"Read more","link":"/","enable":true}};
				const file = "/Users/lakshyakumar/Desktop/Projects/landing-page-astrojs/src/content/blogs/post1.md";
				const url = undefined;
				function rawContent() {
					return "\nKeepit simple: Simplicity is key in UI design. Strive for clean and uncluttered interfaces that are easy to understand and navigate. Avoid overwhelming users with too many options or information. Consistency is key: Consistent design elements and patterns across the interface enhance user familiarity and make it easier for users to learn and navigate the system. Maintain consistent use of colors, typography, icons, and layout throughout the interface.\n\nProvide feedback and affordance: Users should receive clear feedback when they interact with UI elements. Visual cues, such as hover effects or button states, can help users understand the system's response to their actions. Additionally, elements should have clear affordance, meaning they should visually communicate their functionality. Prioritize readability: Ensure that text is legible and easy to read. Choose appropriate font sizes, contrast, and spacing to enhance readability. Consider different device sizes and viewing conditions to accommodate various user needs.";
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
