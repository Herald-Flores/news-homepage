/* empty css                                   */
import { e as createComponent, f as createAstro, m as maybeRenderHead, h as addAttribute, l as renderTransition, n as fade, r as renderTemplate, k as renderComponent } from '../../chunks/astro/server_dK5Ngjk4.mjs';
import 'kleur/colors';
import 'clsx';
import { $ as $$Layout } from '../../chunks/Layout_HsO54Wwk.mjs';
/* empty css                                    */
import { c as categories } from '../../chunks/categories_lhyT-gJ8.mjs';
export { renderers } from '../../renderers.mjs';

const $$Astro$1 = createAstro();
const $$Card = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Card;
  const { title, image, body, slug } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<article${addAttribute(renderTransition($$result, "wgqkyn5d", fade({ duration: "0.6s" }), `hero-${slug}`), "data-astro-transition-scope")}> <a${addAttribute(`/blog/category/${slug}`, "href")} class="flex items-center flex-row max-w-xl dark:border-gray-700"> <img${addAttribute(image, "src")}${addAttribute(title, "alt")} class="object-cover w-28 h-36 lg:h-[154px] lg:w-28"> <div class="flex flex-col justify-between pl-3 md:pl-5 py-0 leading-normal"> <h4 class="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white hover:text-secondary dark:hover:text-secondary transition-all duration-500"> ${title} </h4> <p class="mb-0 text-base font-normal text-neutral-dark-grayish dark:text-neutral-grayish"> ${body} </p> </div> </a> </article>`;
}, "/Users/herald/Development/projects/news-homepage/src/components/Category/components/Card.astro", "self");

const $$Astro = createAstro();
const $$CategoryList = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$CategoryList;
  const { categories } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="col-span-1 order-3 px-4 lg:px-3 mx-auto lg:col-span-10 lg:row-span-2 lg:row-start-6 grid grid-cols-1 gap-6 lg:gap-10"> ${categories.slice(1).map((card) => renderTemplate`${renderComponent($$result, "Card", $$Card, { "title": card.title, "body": card.body, "image": card.image, "slug": card.slug })}`)} </div>`;
}, "/Users/herald/Development/projects/news-homepage/src/components/Category/CategoryList.astro", void 0);

const $$Index = createComponent(($$result, $$props, $$slots) => {
  const fistCategory = categories[0];
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Frontend Mentor | News homepage", "description": "News homepage for Frontend Mentor challenge" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="grid grid-cols-1 lg:grid-cols-12 gap-4"> <article class="card font-sans px-4 lg:px-3 order-1 col-span-1 lg:col-span-8 mb-4"${addAttribute(renderTransition($$result2, "nue5f4xd", fade({ duration: "0.7s" }), `hero-${fistCategory.slug}`), "data-astro-transition-scope")}> <picture class="card__picture w-full overflow-hidden"> <img class="block min-w-full h-48 lg:h-[350px] object-cover"${addAttribute(`${fistCategory.image}`, "src")}${addAttribute(`Image feature ${fistCategory.title}`, "alt")}> </picture> <div class="card__body flex flex-col lg:grid lg:grid-cols-11 lg:justify-between gap-4 pt-3"> <div class="col-span-5 lg:pr-24"> <h1 class="font-bold text-neutral-dark dark:text-neutral-white text-5xl lg:text-6xl leading-1 tracking-tight"> ${fistCategory.title} </h1> </div> <div class="col-span-6 flex flex-col gap-5"> <p class="text-base text-neutral-dark-grayish dark:text-neutral-grayish leading-7"> ${fistCategory.body} </p> <a${addAttribute(`/blog/category/${fistCategory.slug}`, "href")}${addAttribute(`Read more about ${fistCategory.title}`, "aria-label")} class="text-base uppercase max-w-max px-6 py-2.5 bg-secondary hover:bg-neutral-dark active:bg-neutral-dark focus:bg-neutral-dark focus:outline-none font-sans font-normal text-white transition-all duration-700">
View More
</a> </div> </div> </article> <div class="box-border col-span-1 order-2 mt-5 lg:mt-0 lg:pt-0 px-4 lg:px-0 lg:col-span-4 lg:row-span-5"> ${renderComponent($$result2, "CategoryList", $$CategoryList, { "categories": categories })} </div> </div> ` })}`;
}, "/Users/herald/Development/projects/news-homepage/src/pages/blog/category/index.astro", "self");

const $$file = "/Users/herald/Development/projects/news-homepage/src/pages/blog/category/index.astro";
const $$url = "/blog/category";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Index,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
