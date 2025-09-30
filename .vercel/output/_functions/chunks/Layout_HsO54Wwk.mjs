import { e as createComponent, m as maybeRenderHead, r as renderTemplate, h as addAttribute, k as renderComponent, o as createTransitionScope, p as renderScript, f as createAstro, q as renderHead, v as renderSlot, l as renderTransition, n as fade } from './astro/server_dK5Ngjk4.mjs';
import 'kleur/colors';
import 'clsx';
/* empty css                        */
/* empty css                         */
/* empty css                         */

const $$Attribution = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div class="attribution text-neutral-dark dark:text-neutral-white py-8" data-astro-cid-qqz6ac7a>
Challenge by <a class="text-neutral-dark-grayish font-bold dark:text-neutral-grayish" href="https://www.frontendmentor.io?ref=challenge" target="_blank" data-astro-cid-qqz6ac7a>Frontend Mentor</a>.
	Coded by <a class="text-neutral-dark-grayish font-bold dark:text-neutral-grayish" href="https://github.com/Herald-Flores" aria-label="Herald Flores Github profile" data-astro-cid-qqz6ac7a>Herald Flores</a>.
</div> `;
}, "/Users/herald/Development/projects/news-homepage/src/components/Footer/Attribution.astro", void 0);

const $$DarkIcon = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<svg id="theme-toggle-dark-icon" class="hidden w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"></path></svg>`;
}, "/Users/herald/Development/projects/news-homepage/src/components/Footer/Components/DarkIcon.astro", void 0);

const $$LightIcon = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<svg id="theme-toggle-light-icon" class="hidden w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" fill-rule="evenodd" clip-rule="evenodd"></path></svg>`;
}, "/Users/herald/Development/projects/news-homepage/src/components/Footer/Components/LightIcon.astro", void 0);

const $$Footer = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<footer class="relative"> <button id="theme-toggle" data-theme-toggle aria-label="Toggle Theme" class="text-neutral-white transition-all duration-500 hover:text-neutral-dark bg-neutral-dark hover:bg-neutral-grayish focus:outline-none text-sm p-2 flex justify-center items-center rounded-full fixed bottom-4 right-2 z-50"${addAttribute(createTransitionScope($$result, "ranm6a6w"), "data-astro-transition-persist")}> ${renderComponent($$result, "DarkIcon", $$DarkIcon, { "aria-hidden": "true", "alt": "Dark Theme Icon" })} ${renderComponent($$result, "LightIcon", $$LightIcon, { "aria-hidden": "true", "alt": "Light Theme Icon" })} </button> ${renderComponent($$result, "Attribution", $$Attribution, {})} </footer>`;
}, "/Users/herald/Development/projects/news-homepage/src/components/Footer/Footer.astro", "self");

const $$CloseIcon = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<svg id="closeIcon" class="hidden transition-all duration-500 fill-current" width="32" height="31" xmlns="http://www.w3.org/2000/svg"><g fill-rule="evenodd"><path d="m2.919.297 28.284 28.284-2.122 2.122L.797 2.419z"></path><path d="M.797 28.581 29.081.297l2.122 2.122L2.919 30.703z"></path></g></svg>`;
}, "/Users/herald/Development/projects/news-homepage/src/components/Header/Componets/CloseIcon.astro", void 0);

const $$HamburgerIcon = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<svg id="menuIcon" class="transition-all duration-500 fill-current" width="40" height="17" xmlns="http://www.w3.org/2000/svg"><g fill-rule="evenodd"><path d="M0 0h40v3H0zM0 7h40v3H0zM0 14h40v3H0z"></path><path d="M0 0h40v3H0z"></path></g></svg>`;
}, "/Users/herald/Development/projects/news-homepage/src/components/Header/Componets/HamburgerIcon.astro", void 0);

const $$Logo = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<svg class="fill-current" width="65" height="40" xmlns="http://www.w3.org/2000/svg"><path d="M23.016 39.2c.317 0 .574-.093.77-.28.196-.187.294-.457.294-.812v-1.82c0-.448.033-.84.098-1.176.065-.336.145-.663.238-.98l5.09-18.122 4.822 18.57c.112.384.193.682.243.895l.023.099c.047.215.07.453.07.714v1.82c0 .355.098.625.294.812.196.187.453.28.77.28h10.696c.299 0 .55-.093.756-.28.205-.187.308-.457.308-.812v-1.82c0-.373.023-.705.07-.994.047-.29.135-.677.266-1.162L54.04 7.224c.299-1.25.765-2.254 1.4-3.01.635-.756 1.363-1.311 2.184-1.666l.672-.308c.336-.168.574-.331.714-.49.14-.159.21-.369.21-.63 0-.336-.117-.607-.35-.812C58.637.103 58.287 0 57.82 0h-8.904c-.467 0-.817.103-1.05.308-.233.205-.35.476-.35.812 0 .261.06.471.182.63.121.159.313.303.574.434l.616.224c1.12.41 1.871.999 2.254 1.764s.453 1.661.21 2.688l-5.535 23.486-6.477-25.81c-.133-.58-.17-1.018-.11-1.31l.026-.104c.093-.29.317-.49.672-.602l1.232-.336c.299-.112.518-.257.658-.434a.986.986 0 0 0 .21-.63c0-.355-.112-.63-.336-.826C41.468.098 41.122 0 40.656 0H24.78c-.448 0-.789.098-1.022.294-.233.196-.35.471-.35.826 0 .224.06.415.182.574.121.159.322.294.602.406l1.176.42c.261.093.462.243.602.448.14.205.294.607.462 1.204l1.751 6.742-5.553 19.475L16.128 4.48c-.147-.49-.194-.898-.14-1.223l.028-.135c.093-.345.327-.574.7-.686l1.456-.336c.504-.168.756-.504.756-1.008 0-.336-.112-.602-.336-.798C18.368.098 18.022 0 17.556 0H1.344C.896 0 .56.098.336.294.112.49 0 .756 0 1.092c0 .224.056.434.168.63.112.196.29.35.532.462l1.232.392c.355.13.625.308.812.532.187.224.345.579.476 1.064l7.84 30.408c.112.43.191.751.238.966.047.215.07.462.07.742v1.82c0 .355.103.625.308.812.205.187.467.28.784.28h10.556Zm34.804.7c1.195 0 2.263-.29 3.206-.868a6.338 6.338 0 0 0 2.24-2.338c.55-.98.826-2.04.826-3.178 0-1.157-.275-2.212-.826-3.164a6.325 6.325 0 0 0-2.24-2.282c-.943-.57-2.011-.854-3.206-.854-1.157 0-2.207.285-3.15.854a6.325 6.325 0 0 0-2.24 2.282c-.55.952-.826 2.007-.826 3.164 0 1.139.275 2.198.826 3.178.55.98 1.297 1.76 2.24 2.338.943.579 1.993.868 3.15.868Z"></path></svg>`;
}, "/Users/herald/Development/projects/news-homepage/src/components/Header/Componets/Logo.astro", void 0);

const $$Header = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<header class="box-border py-2 lg:py-3 relative mb-2"> <nav class="box-border max-w-screen-xl mx-auto px-3 lg:px-1"> <div class="flex flex-wrap items-center justify-between mx-auto py-4"> <a href="/" aria-label="Go Home News" class="flex items-center text-[#00001A] dark:text-neutral-grayish pl-1"> <span class="sr-only">Go to Home</span> ${renderComponent($$result, "Logo", $$Logo, {})} </a> <button id="menuButton" aria-label="Toggle Mobile Menu" class="bg-transparent z-50 border-0 cursor-pointer transition ease-in-out delay-150 duration-300 lg:hidden relative block right-0 w-10 text-black dark:text-neutral-white"> ${renderComponent($$result, "HamburgerIcon", $$HamburgerIcon, { "aria-hidden": "true", "alt": "Hamburger Icon" })} ${renderComponent($$result, "CloseIcon", $$CloseIcon, { "aria-hidden": "true", "alt": "Close Icon" })} </button> <div class="primary-navigation transition-opacity duration-1000 bg-black bg-opacity-60 h-screen hidden absolute lg:relative w-full lg:w-max top-0 left-auto right-0 lg:bg-transparent lg:flex items-center justify-end lg:h-fit lg:order-2 z-20"> <div class="menu w-2/3 lg:w-max h-full z-20"> <ul id="primaryMenu" class="flex flex-col lg:flex-row justify-center box-border h-2/3 px-10 lg:px-0 gap-5 lg:gap-8"> <li class=""> <a class="text-neutral-dark text-xl lg:text-lg lg:text-neutral-dark-grayish dark:text-neutral-grayish dark:hover:text-secondary hover:text-secondary font-sans font-normal" href="/">
Home
</a> </li> <li class=""> <a class="text-neutral-dark text-xl lg:text-lg lg:text-neutral-dark-grayish dark:text-neutral-grayish dark:hover:text-secondary hover:text-secondary font-sans font-normal" href="#">
New
</a> </li> <li class=""> <a class="text-neutral-dark text-xl lg:text-lg lg:text-neutral-dark-grayish dark:text-neutral-grayish dark:hover:text-secondary hover:text-secondary font-sans font-normal" href="#">
Popular
</a> </li> <li class=""> <a class="text-neutral-dark text-xl lg:text-lg lg:text-neutral-dark-grayish dark:text-neutral-grayish dark:hover:text-secondary hover:text-secondary font-sans font-normal" href="#">
Trending
</a> </li> <li class=""> <a class="text-neutral-dark text-xl lg:text-lg lg:text-neutral-dark-grayish dark:text-neutral-grayish dark:hover:text-secondary hover:text-secondary font-sans font-normal" href="/blog/category">
Categories
</a> </li> </ul> </div> </div> </div> </nav> </header> ${renderScript($$result, "/Users/herald/Development/projects/news-homepage/src/components/Header/Header.astro?astro&type=script&index=0&lang.ts")}`;
}, "/Users/herald/Development/projects/news-homepage/src/components/Header/Header.astro", void 0);

const $$Astro$1 = createAstro();
const $$ClientRouter = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$ClientRouter;
  const { fallback = "animate" } = Astro2.props;
  return renderTemplate`<meta name="astro-view-transitions-enabled" content="true"><meta name="astro-view-transitions-fallback"${addAttribute(fallback, "content")}>${renderScript($$result, "/Users/herald/Development/projects/news-homepage/node_modules/astro/components/ClientRouter.astro?astro&type=script&index=0&lang.ts")}`;
}, "/Users/herald/Development/projects/news-homepage/node_modules/astro/components/ClientRouter.astro", void 0);

const $$Astro = createAstro();
const $$Layout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Layout;
  const { title, description } = Astro2.props;
  return renderTemplate`<html lang="en"${addAttribute(renderTransition($$result, "smooz4hq", "none", ""), "data-astro-transition-scope")}> <head><meta charset="UTF-8"><meta name="description" content="Astro description"><meta name="viewport" content="width=device-width"><link rel="icon" type="image/svg+xml" href="/img/favicon-32x32.png"><meta name="generator"${addAttribute(Astro2.generator, "content")}><meta name="view-transition" content="same-origin"><title>${title}</title><meta name="description"${addAttribute(description, "content")}>${renderComponent($$result, "ViewTransitions", $$ClientRouter, {})}${renderHead()}</head> <body class="dark:bg-neutral-dark transition-all duration-500"> ${renderComponent($$result, "Header", $$Header, { "data-astro-transition-persist": createTransitionScope($$result, "ekcrbxgw") })} <main class="box-border max-w-screen-xl mx-auto mt-2"${addAttribute(renderTransition($$result, "rmiboplj", fade({ duration: "0.5s" }), ""), "data-astro-transition-scope")}> ${renderSlot($$result, $$slots["default"])} </main> ${renderComponent($$result, "Footer", $$Footer, { "data-astro-transition-persist": createTransitionScope($$result, "mrg5k34m") })} ${renderScript($$result, "/Users/herald/Development/projects/news-homepage/src/layouts/Layout.astro?astro&type=script&index=0&lang.ts")} </body> </html>`;
}, "/Users/herald/Development/projects/news-homepage/src/layouts/Layout.astro", "self");

export { $$Layout as $ };
