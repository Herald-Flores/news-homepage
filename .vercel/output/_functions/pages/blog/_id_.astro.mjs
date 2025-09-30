/* empty css                                   */
import { e as createComponent, f as createAstro, k as renderComponent, r as renderTemplate, m as maybeRenderHead, h as addAttribute, l as renderTransition, n as fade } from '../../chunks/astro/server_dK5Ngjk4.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../../chunks/Layout_HsO54Wwk.mjs';
import { p as posts } from '../../chunks/posts_PNhgKCYD.mjs';
/* empty css                                    */
export { renderers } from '../../renderers.mjs';

const $$Astro = createAstro();
const $$id = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$id;
  const { id } = Astro2.params;
  const info = posts.find((b) => b.id === id);
  if (!info) {
    return Astro2.redirect("/404");
  }
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": `Frontend Mentor | ${info.title}` }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main id="main" class="relative z-10 flex flex-1 flex-col dark:text-neutral-white"> <div class="mx-auto w-full max-w-screen-sm overflow-hidden md:-mb-10 lg:-mb-12 xl:-mb-16"${addAttribute(renderTransition($$result2, "iq2us7qi", fade({ duration: "0.4s" }), `hero-post-${id}`), "data-astro-transition-scope")}> <img${addAttribute(info.image, "src")} class="w-full max-h-[300px] object-cover" loading="lazy" decoding="async"${addAttribute(info.title, "alt")} class="w-full"> </div> <div class="grid-container relative mx-auto max-w-screen-lg md:z-10"> <div class="mx-auto w-fit max-w-fullpy-5 sm:py-8 md:px-10 md:py-12 lg:p-12 lg:py-16 xl:p-16 xl:py-20"> <header class="mx-auto w-full text-center"> <time class="code" datetime="2023-10-12T00:00:00.000Z"> ${new Date(info.date).toLocaleDateString(
    "en-us",
    {
      year: "numeric",
      month: "long",
      day: "numeric"
    }
  )} </time> <h1 class="heading-3 mb-4 mt-2 md:heading-2 sm:mb-5 sm:mt-3">${info.title}</h1> </header> <hr class="-mx-16 my-16 border-astro-gray-500"> <article class="prose"> <p class="text-base "> ${info.content} </p> </article> </div> </div></main> ` })}`;
}, "/Users/herald/Development/projects/news-homepage/src/pages/blog/[id].astro", "self");

const $$file = "/Users/herald/Development/projects/news-homepage/src/pages/blog/[id].astro";
const $$url = "/blog/[id]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$id,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
