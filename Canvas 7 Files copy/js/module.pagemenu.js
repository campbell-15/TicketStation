export default function(e){const t=SEMICOLON.Core;if((e=t.getSelector(e,!1)).length<1)return!0;let s=t.getVars.elPageMenu,a=s.querySelector("#page-menu-wrap"),n=s.querySelector(".page-menu-wrap-clone");document.head||document.getElementsByTagName("head")[0],document.createElement("style");if(n||(n=document.createElement("div"),n.classList="page-menu-wrap-clone",a.parentNode.insertBefore(n,a.nextSibling),n=s.querySelector(".page-menu-wrap-clone")),n.style.height=s.querySelector("#page-menu-wrap").offsetHeight+"px",s.querySelector("#page-menu-trigger").onclick=e=>{t.getVars.elBody.classList.remove("top-search-open"),s.classList.toggle("page-menu-open"),e.preventDefault()},s.querySelector("nav").onclick=e=>{t.getVars.elBody.classList.remove("top-search-open"),document.getElementById("top-cart").classList.remove("top-cart-open")},document.addEventListener("click",e=>{e.target.closest("#page-menu")||s.classList.remove("page-menu-open")},!1),s.classList.contains("no-sticky")||s.classList.contains("dots-menu"))return!0;let r;r=(t.getVars.elHeader.classList.contains("no-sticky")?getComputedStyle(t.getVars.elHeader).getPropertyValue("--cnvs-header-height"):getComputedStyle(t.getVars.elHeader).getPropertyValue("--cnvs-header-height-shrink")).split("px")[0],setTimeout(()=>{t.getVars.pageMenuOffset=t.offset(s).top-r,CanvasStickyPageMenu(t.getVars.pageMenuOffset)},500),window.addEventListener("scroll",function(){CanvasStickyPageMenu(t.getVars.pageMenuOffset)},{passive:!0}),t.getVars.resizers.pagemenu=()=>{setTimeout(()=>{t.getVars.pageMenuOffset=t.offset(s).top-r,CanvasStickyPageMenu(t.getVars.pageMenuOffset)},250)}}const CanvasStickyPageMenu=e=>{const t=SEMICOLON.Core,s=t.getVars.elPageMenu;window.pageYOffset>e?!t.getVars.elBody.classList.contains("device-up-lg")&&"true"!=s.getAttribute("data-mobile-sticky")||s.classList.add("sticky-page-menu"):s.classList.remove("sticky-page-menu")};