import{r as n,a as i,j as t}from"./index-ea1ef42e.js";import{b as s}from"./button-6cd7a14f.js";import{c as r}from"./index-f96983da.js";const d=r(["relative"]),c=r(["absolute","mt-0.5","overflow-hidden","rounded","w-32","focus:outline-none"],{variants:{side:{left:["left-0"],right:["right-0"]}},defaultVariants:{side:"left"}}),l=r(["cursor-pointer","flex-row","flex","font-mono","font-normal","gap-x-0.5","items-center","leading-8","px-2","relative","select-none","text-xs","uppercase","text-black","bg-primary-200/80","active:bg-secondary-500","active:text-black","dark:active:bg-secondary-500","dark:active:fill-black","dark:active:text-black","dark:bg-primary-800/80","dark:fill-white","dark:hover:bg-primary-800","dark:text-white","hover:bg-primary-300"]),u=()=>{const[a,o]=n.useState(!1);return i("div",{className:d(),children:[t("button",{className:s({intent:"primary"}),onClick:()=>o(e=>!e),children:"Dropdown"}),a&&t("ul",{className:c(),children:Array.from(Array(3).keys()).map(e=>t("li",{className:l(),children:`Item ${e}`},e))})]})};typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{u as Component};
