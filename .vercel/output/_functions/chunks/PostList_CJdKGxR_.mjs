import { e as createComponent, f as createAstro, m as maybeRenderHead, h as addAttribute, l as renderTransition, n as fade, r as renderTemplate, k as renderComponent } from './astro/server_dK5Ngjk4.mjs';
import 'kleur/colors';
import 'clsx';
import './Layout_DE3SIRxb.mjs';
/* empty css                         */

const $$Astro$1 = createAstro();
const $$PostCard = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$PostCard;
  const { title, number, image, body, id } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<article class="card"${addAttribute(renderTransition($$result, "2l7yhgz3", fade({ duration: "0.6s" }), `hero-post-${id}`), "data-astro-transition-scope")}> <a${addAttribute(`/blog/${id}`, "href")} class="flex items-center flex-row max-w-xl dark:border-gray-700"> <img${addAttribute(image, "src")}${addAttribute(title, "alt")} class="object-cover w-28 h-36 lg:h-[154px] lg:w-28"> <div class="flex flex-col justify-between pl-3 md:pl-5 py-0 leading-normal"> <span class="text-4xl font-sans font-bold text-secondary mb-4">${number}</span> <h4 class="mb-2 text-lg font-bold tracking-tight text-gray-900 dark:text-white hover:text-secondary transition-all duration-500"> ${title} </h4> <p class="mb-0 text-base font-normal text-neutral-dark-grayish dark:text-neutral-grayish"> ${body} </p> </div> </a> </article>`;
}, "/Users/herald/Development/projects/news-homepage/src/components/PostList/Components/PostCard.astro", "self");

const $$Astro = createAstro();
const $$PostList = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$PostList;
  const { posts } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="col-span-1 order-3 px-4 lg:px-3 mx-auto lg:col-span-10 lg:row-span-2 lg:row-start-6 grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-20 my-8 pt-4"> ${(posts ?? []).map((card) => renderTemplate`${renderComponent($$result, "PostCard", $$PostCard, { "id": card.id, "number": card.number, "title": card.title, "body": card.excerpt, "image": card.image })}`)} </div>`;
}, "/Users/herald/Development/projects/news-homepage/src/components/PostList/PostList.astro", void 0);

export { $$PostList as $ };
