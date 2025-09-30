/* empty css                                */
import { e as createComponent, f as createAstro, m as maybeRenderHead, h as addAttribute, r as renderTemplate, k as renderComponent, l as renderTransition } from '../chunks/astro/server_dK5Ngjk4.mjs';
import 'kleur/colors';
import 'clsx';
import { $ as $$PostList } from '../chunks/PostList_Daw6NCpI.mjs';
import { $ as $$Layout } from '../chunks/Layout_HsO54Wwk.mjs';
import { p as posts } from '../chunks/posts_PNhgKCYD.mjs';
/* empty css                                 */
export { renderers } from '../renderers.mjs';

const $$Astro$2 = createAstro();
const $$PictureCard = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$PictureCard;
  const { title, imageXL, imageXS } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<picture class="card__picture w-full max-h-96 overflow-hidden object-cover"> <source media="(min-width: 768px)"${addAttribute(`${imageXL}`, "srcset")}> <source media="(max-width: 767px)"${addAttribute(`${imageXS}`, "srcset")}> <img${addAttribute(`${imageXL}`, "src")}${addAttribute(`Image feature ${title}`, "alt")}> </picture>`;
}, "/Users/herald/Development/projects/news-homepage/src/components/CardFeature/Components/PictureCard.astro", void 0);

const $$Astro$1 = createAstro();
const $$CardFeature = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$CardFeature;
  const { href, textButton, title, body, imageXL, imageXS } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<article class="card font-sans px-4 lg:px-3 order-1"> ${renderComponent($$result, "PictureCard", $$PictureCard, { "title": "The Bright Future of Web 3.0?", "imageXL": imageXL, "imageXS": imageXS })} <div class="card__body flex flex-col lg:grid lg:grid-cols-9 lg:justify-between gap-4 pt-5 lg:pt-6"> <div class="col-span-5 lg:pr-24"> <h1 class="font-bold text-neutral-dark dark:text-neutral-white text-5xl lg:text-6xl leading-1 tracking-tight"> ${title} </h1> </div> <div class="col-span-4 flex flex-col gap-5"> <p class="text-base text-neutral-dark-grayish dark:text-neutral-grayish leading-7 mb-1"> ${body} </p> <a${addAttribute(href, "href")}${addAttribute(`Read more abot ${title}`, "aria-label")} class="text-base uppercase max-w-max px-6 py-2.5 bg-secondary hover:bg-neutral-dark active:bg-neutral-dark focus:bg-neutral-dark focus:outline-none font-sans font-normal text-white transition-all duration-700"> ${textButton} </a> </div> </div> </article>`;
}, "/Users/herald/Development/projects/news-homepage/src/components/CardFeature/CardFeature.astro", void 0);

const $$Astro = createAstro();
const $$Card = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Card;
  const { id, title, body } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<li> <a${addAttribute(`/blog/${id}`, "href")} class="block max-w-sm px-0 pb-4 pt-6"> <h3 class="mb-2 text-xl font-bold tracking-tight text-neutral-white dark:text-neutral-dark hover:text-primary dark:hover:text-primary"> ${title} </h3> <p class="font-normal text-neutral-grayish dark:text-neutral-600"> ${body} </p> </a> </li>`;
}, "/Users/herald/Development/projects/news-homepage/src/components/SideBar/Components/Card.astro", void 0);

const $$SideBar = createComponent(($$result, $$props, $$slots) => {
  const data = [
    {
      id: 1,
      title: "Hydrogen VS Electric cars",
      body: "Will hydrogem-fueled cars ever catch up to EVs?"
    },
    {
      id: 2,
      title: "The Downsides of AI Artistry",
      body: "What are the possible adverse effects of on-demand AI image generation?"
    },
    {
      id: 3,
      title: "Is VC Funding Drying Up?",
      body: "Private funding by VC firms is dowwn 50% YOY. We take a look at what that means."
    }
  ];
  return renderTemplate`${maybeRenderHead()}<aside class="box-border col-span-1 order-2 mt-5 lg:mt-0 px-4 lg:px-0 lg:col-span-3 lg:row-span-5 lg:col-start-8"> <div class="bg-neutral-dark dark:bg-neutral-white px-5 lg:px-5 py-4 lg:py-7"> <h2 class="text-primary font-bold text-4xl mb-3 lg:mb-5">New</h2> <ul class="m-0 p-0 flex flex-col gap-6 divide-y"> ${data.map((card) => renderTemplate`${renderComponent($$result, "Card", $$Card, { "id": card.id, "title": card.title, "body": card.body })}`)} </ul> </div> </aside>`;
}, "/Users/herald/Development/projects/news-homepage/src/components/SideBar/SideBar.astro", void 0);

const $$Index = createComponent(($$result, $$props, $$slots) => {
  const homePosts = posts.slice(0, 3);
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Frontend Mentor | News homepage", "description": "News homepage for Frontend Mentor challenge" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="grid grid-cols-1 lg:grid-cols-10 gap-4 lg:gap-4"> <div class="col-span-1 lg:col-span-7 lg:row-span-5 mb-4 lg:mb-0"> ${renderComponent($$result2, "CardFeature", $$CardFeature, { "href": "#", "textButton": "Read More", "title": "The Bright Future of Web 3.0?", "body": "We dive into the next evolution of the web that claims to put the power of tthe platforms back into the hands of the people. But is it really fulfiling its promise?", "imageXL": "/img/image-web-3-desktop.jpg", "imageXS": "/img/image-web-3-mobile.jpg", "data-astro-transition-scope": renderTransition($$result2, "bwabbhoa", "", "hero") })} </div> ${renderComponent($$result2, "Sidebar", $$SideBar, {})} ${renderComponent($$result2, "PostList", $$PostList, { "posts": homePosts })} </div> ` })}`;
}, "/Users/herald/Development/projects/news-homepage/src/pages/index.astro", "self");

const $$file = "/Users/herald/Development/projects/news-homepage/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Index,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
