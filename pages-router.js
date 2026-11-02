/** Routing for this isolated GitHub Pages static export. */
export const basePath="/eva-dvorakova-web/";
export function routeURL(href=location.href){
 const u=new URL(href,location.href);
 if(u.origin!==location.origin)return u;
 if(u.hash.startsWith('#/'))return new URL(u.hash.slice(1),u.origin);
 if(u.pathname.startsWith(basePath))return new URL('/'+u.pathname.slice(basePath.length)+u.search,u.origin);
 return u;
}
export const routeParams=()=>routeURL().searchParams;
export function pageHref(href){
 if(href.startsWith('#'))return href;
 const u=routeURL(href);
 if(u.origin!==location.origin)return href;
 return u.pathname==='/'&&!u.search?basePath:basePath+'#'+u.pathname+u.search;
}
export function preparePageLinks(container){
 for(const link of container.querySelectorAll('a[data-link]'))link.setAttribute('href',pageHref(link.getAttribute('href')));
}
