import{j as e,c as a}from"./index-ea1ef42e.js";import{t as n,c as r}from"./text-72ddef29.js";import{c as s}from"./index-f96983da.js";const i=s(["flex"],{variants:{direction:{row:["flex-row","gap-x-0.5"],column:["flex-col","gap-y-0.5"]},justify:{start:["justify-start"],end:["justify-end"],between:["justify-between"]}},compoundVariants:[{direction:"row",justify:"between",class:"gap-x-0"},{direction:"column",justify:"between",class:"gap-y-0"}],defaultVariants:{direction:"column"}}),c=o=>e("div",{className:i(o),children:Array.from(Array(3).keys()).map(t=>e("div",{className:a(r(),n({intent:"label"})),children:`Item ${t}`},t))});c.argTypes={direction:{options:["row","column"],control:{type:"radio"},defaultValue:"row"},justify:{options:["start","end","between"],control:{type:"select"},defaultValue:"start"}};typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{c as Component};
