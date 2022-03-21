var I=Object.defineProperty,N=Object.defineProperties;var P=Object.getOwnPropertyDescriptors;var c=Object.getOwnPropertySymbols;var y=Object.prototype.hasOwnProperty,k=Object.prototype.propertyIsEnumerable;var f=(t,o,s)=>o in t?I(t,o,{enumerable:!0,configurable:!0,writable:!0,value:s}):t[o]=s,i=(t,o)=>{for(var s in o||(o={}))y.call(o,s)&&f(t,s,o[s]);if(c)for(var s of c(o))k.call(o,s)&&f(t,s,o[s]);return t},u=(t,o)=>N(t,P(o));var v=(t,o)=>{var s={};for(var r in t)y.call(t,r)&&o.indexOf(r)<0&&(s[r]=t[r]);if(t!=null&&c)for(var r of c(t))o.indexOf(r)<0&&k.call(t,r)&&(s[r]=t[r]);return s};import{c as e,A as H,M as C,$ as g,i as A,a as x,b as $,d as U,e as V,f as F,l as R,g as X,h as W,j as q,k as G,m as K,n as J,o as Q,p as Y,q as Z,r as ee,s as te}from"./vendor.1aca857b.js";const oe=function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))r(n);new MutationObserver(n=>{for(const a of n)if(a.type==="childList")for(const m of a.addedNodes)m.tagName==="LINK"&&m.rel==="modulepreload"&&r(m)}).observe(document,{childList:!0,subtree:!0});function s(n){const a={};return n.integrity&&(a.integrity=n.integrity),n.referrerpolicy&&(a.referrerPolicy=n.referrerpolicy),n.crossorigin==="use-credentials"?a.credentials="include":n.crossorigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function r(n){if(n.ep)return;n.ep=!0;const a=s(n);fetch(n.href,a)}};oe();const re={actions:{argTypesRegex:"^on[A-Z].*"},controls:{matchers:{color:/(background|color)$/i,date:/Date$/}}};var se=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",parameters:re}),ne="/assets/code-brackets.9ef6443e.svg",ae="/assets/colors.ac9401f3.svg",ie="/assets/comments.f15a6837.svg",le="/assets/direction.94a9917f.svg",ce="/assets/flow.275142c6.svg",de="/assets/plugin.57148314.svg",ge="/assets/repo.fb4ece47.svg",pe="/assets/stackalt.2ad81543.svg";const me={},ue="wrapper";function w(s){var r=s,{components:t}=r,o=v(r,["components"]);return e(ue,u(i(i({},me),o),{components:t,mdxType:"MDXLayout"}),e(C,{title:"Example/Introduction",mdxType:"Meta"}),e("style",null,`
  .subheading {
    --mediumdark: '#999999';
    font-weight: 900;
    font-size: 13px;
    color: #999;
    letter-spacing: 6px;
    line-height: 24px;
    text-transform: uppercase;
    margin-bottom: 12px;
    margin-top: 40px;
  }

  .link-list {
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 1fr;
    row-gap: 10px;
  }

  @media (min-width: 620px) {
    .link-list {
      row-gap: 20px;
      column-gap: 20px;
      grid-template-columns: 1fr 1fr;
    }
  }

  @media all and (-ms-high-contrast:none) {
  .link-list {
      display: -ms-grid;
      -ms-grid-columns: 1fr 1fr;
      -ms-grid-rows: 1fr 1fr;
    }
  }

  .link-item {
    display: block;
    padding: 20px 30px 20px 15px;
    border: 1px solid #00000010;
    border-radius: 5px;
    transition: background 150ms ease-out, border 150ms ease-out, transform 150ms ease-out;
    color: #333333;
    display: flex;
    align-items: flex-start;
  }

  .link-item:hover {
    border-color: #1EA7FD50;
    transform: translate3d(0, -3px, 0);
    box-shadow: rgba(0, 0, 0, 0.08) 0 3px 10px 0;
  }

  .link-item:active {
    border-color: #1EA7FD;
    transform: translate3d(0, 0, 0);
  }

  .link-item strong {
    font-weight: 700;
    display: block;
    margin-bottom: 2px;
  }
  
  .link-item img {
    height: 40px;
    width: 40px;
    margin-right: 15px;
    flex: none;
  }

  .link-item span {
    font-size: 14px;
    line-height: 20px;
  }

  .tip {
    display: inline-block;
    border-radius: 1em;
    font-size: 11px;
    line-height: 12px;
    font-weight: 700;
    background: #E7FDD8;
    color: #66BF3C;
    padding: 4px 12px;
    margin-right: 10px;
    vertical-align: top;
  }

  .tip-wrapper {
    font-size: 13px;
    line-height: 20px;
    margin-top: 40px;
    margin-bottom: 40px;
  }

  .tip-wrapper code {
    font-size: 12px;
    display: inline-block;
  }

  
`),e("h1",null,"Welcome to Storybook"),e("p",null,`Storybook helps you build UI components in isolation from your app's business logic, data, and context.
That makes it easy to develop hard-to-reach states. Save these UI states as `,e("strong",{parentName:"p"},"stories")," to revisit during development, testing, or QA."),e("p",null,`Browse example stories now by navigating to them in the sidebar.
View their code in the `,e("inlineCode",{parentName:"p"},"src/stories"),` directory to learn how they work.
We recommend building UIs with a `,e("a",{parentName:"p",href:"https://componentdriven.org"},e("strong",{parentName:"a"},"component-driven"))," process starting with atomic components and ending with pages."),e("div",{className:"subheading"},"Configure"),e("div",{className:"link-list"},e("a",{className:"link-item",href:"https://storybook.js.org/docs/react/addons/addon-types",target:"_blank"},e("img",{src:de,alt:"plugin"}),e("span",null,e("strong",null,"Presets for popular tools"),"Easy setup for TypeScript, SCSS and more.")),e("a",{className:"link-item",href:"https://storybook.js.org/docs/react/configure/webpack",target:"_blank"},e("img",{src:pe,alt:"Build"}),e("span",null,e("strong",null,"Build configuration"),"How to customize webpack and Babel")),e("a",{className:"link-item",href:"https://storybook.js.org/docs/react/configure/styling-and-css",target:"_blank"},e("img",{src:ae,alt:"colors"}),e("span",null,e("strong",null,"Styling"),"How to load and configure CSS libraries")),e("a",{className:"link-item",href:"https://storybook.js.org/docs/react/get-started/setup#configure-storybook-for-your-stack",target:"_blank"},e("img",{src:ce,alt:"flow"}),e("span",null,e("strong",null,"Data"),"Providers and mocking for data libraries"))),e("div",{className:"subheading"},"Learn"),e("div",{className:"link-list"},e("a",{className:"link-item",href:"https://storybook.js.org/docs",target:"_blank"},e("img",{src:ge,alt:"repo"}),e("span",null,e("strong",null,"Storybook documentation"),"Configure, customize, and extend")),e("a",{className:"link-item",href:"https://storybook.js.org/tutorials/",target:"_blank"},e("img",{src:le,alt:"direction"}),e("span",null,e("strong",null,"In-depth guides"),"Best practices from leading teams")),e("a",{className:"link-item",href:"https://github.com/storybookjs/storybook",target:"_blank"},e("img",{src:ne,alt:"code"}),e("span",null,e("strong",null,"GitHub project"),"View the source and add issues")),e("a",{className:"link-item",href:"https://discord.gg/storybook",target:"_blank"},e("img",{src:ie,alt:"comments"}),e("span",null,e("strong",null,"Discord chat"),"Chat with maintainers and the community"))),e("div",{className:"tip-wrapper"},e("span",{className:"tip"},"Tip"),"Edit the Markdown in"," ",e("code",null,"src/stories/Introduction.stories.mdx")))}w.isMDXComponent=!0;const _=()=>{throw new Error("Docs-only story")};_.parameters={docsOnly:!0};const l={title:"Example/Introduction",includeStories:["__page"]},he={};l.parameters=l.parameters||{};l.parameters.docs=u(i({},l.parameters.docs||{}),{page:()=>e(H,{mdxStoryNameToKey:he,mdxComponentAnnotations:l},e(w,null))});var be=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",__page:_,default:l});const d=({primary:t,backgroundColor:o=null,size:s,label:r,onClick:n})=>{const a=t?"storybook-button--primary":"storybook-button--secondary";return g`
    <button
      type="button"
      class=${["storybook-button",`storybook-button--${s||"medium"}`,a].join(" ")}
      style=${A({backgroundColor:o})}
      @click=${n}
    >
      ${r}
    </button>
  `};var fe={parameters:{storySource:{source:`import { Button } from './Button';

// More on default export: https://storybook.js.org/docs/web-components/writing-stories/introduction#default-export
export default {
  title: 'Example/Button',
  // More on argTypes: https://storybook.js.org/docs/web-components/api/argtypes
  argTypes: {
    backgroundColor: { control: 'color' },
    onClick: { action: 'onClick' },
    size: {
      control: { type: 'select' },
      options: ['small', 'medium', 'large'],
    },
  },
};

// More on component templates: https://storybook.js.org/docs/web-components/writing-stories/introduction#using-args
const Template = (args) => Button(args);

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/web-components/writing-stories/args
Primary.args = {
  primary: true,
  label: 'Button',
};

export const Secondary = Template.bind({});
Secondary.args = {
  label: 'Button',
};

export const Large = Template.bind({});
Large.args = {
  size: 'large',
  label: 'Button',
};

export const Small = Template.bind({});
Small.args = {
  size: 'small',
  label: 'Button',
};
`,locationsMap:{primary:{startLoc:{col:17,line:18},endLoc:{col:39,line:18},startBody:{col:17,line:18},endBody:{col:39,line:18}},secondary:{startLoc:{col:17,line:18},endLoc:{col:39,line:18},startBody:{col:17,line:18},endBody:{col:39,line:18}},large:{startLoc:{col:17,line:18},endLoc:{col:39,line:18},startBody:{col:17,line:18},endBody:{col:39,line:18}},small:{startLoc:{col:17,line:18},endLoc:{col:39,line:18},startBody:{col:17,line:18},endBody:{col:39,line:18}}}}},title:"Example/Button",argTypes:{backgroundColor:{control:"color"},onClick:{action:"onClick"},size:{control:{type:"select"},options:["small","medium","large"]}}};const p=t=>d(t),L=p.bind({});L.args={primary:!0,label:"Button"};const S=p.bind({});S.args={label:"Button"};const B=p.bind({});B.args={size:"large",label:"Button"};const j=p.bind({});j.args={size:"small",label:"Button"};const ye=["Primary","Secondary","Large","Small"];var ke=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:fe,Primary:L,Secondary:S,Large:B,Small:j,__namedExportsOrder:ye});const T=({user:t,onLogin:o,onLogout:s,onCreateAccount:r})=>g`
  <header>
    <div class="wrapper">
      <div>
        <svg width="32" height="32" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
          <g fill="none" fillRule="evenodd">
            <path
              d="M10 0h12a10 10 0 0110 10v12a10 10 0 01-10 10H10A10 10 0 010 22V10A10 10 0 0110 0z"
              fill="#FFF"
            />
            <path
              d="M5.3 10.6l10.4 6v11.1l-10.4-6v-11zm11.4-6.2l9.7 5.5-9.7 5.6V4.4z"
              fill="#555AB9"
            />
            <path
              d="M27.2 10.6v11.2l-10.5 6V16.5l10.5-6zM15.7 4.4v11L6 10l9.7-5.5z"
              fill="#91BAF8"
            />
          </g>
        </svg>
        <h1>Acme</h1>
      </div>
      <div>
        ${t?d({size:"small",onClick:s,label:"Log out"}):g`${d({size:"small",onClick:o,label:"Log in"})}
            ${d({primary:!0,size:"small",onClick:r,label:"Sign up"})}`}
      </div>
    </div>
  </header>
`;var ve={parameters:{storySource:{source:`import { Header } from './Header';

export default {
  title: 'Example/Header',
};

const Template = (args) => Header(args);

export const LoggedIn = Template.bind({});
LoggedIn.args = {
  user: {},
};

export const LoggedOut = Template.bind({});
LoggedOut.args = {};
`,locationsMap:{"logged-in":{startLoc:{col:17,line:7},endLoc:{col:39,line:7},startBody:{col:17,line:7},endBody:{col:39,line:7}},"logged-out":{startLoc:{col:17,line:7},endLoc:{col:39,line:7},startBody:{col:17,line:7},endBody:{col:39,line:7}}}}},title:"Example/Header"};const E=t=>T(t),h=E.bind({});h.args={user:{}};const b=E.bind({});b.args={};const xe=["LoggedIn","LoggedOut"];var we=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:ve,LoggedIn:h,LoggedOut:b,__namedExportsOrder:xe});const _e=({user:t,onLogin:o,onLogout:s,onCreateAccount:r})=>g`
  <article>
    ${T({user:t,onLogin:o,onLogout:s,onCreateAccount:r})}

    <section>
      <h2>Pages in Storybook</h2>
      <p>
        We recommend building UIs with a
        <a href="https://componentdriven.org" target="_blank" rel="noopener noreferrer">
          <strong>component-driven</strong> </a
        >process starting with atomic components and ending with pages.
      </p>
      <p>
        Render pages with mock data. This makes it easy to build and review page states without
        needing to navigate to them in your app. Here are some handy patterns for managing page data
        in Storybook:
      </p>
      <ul>
        <li>
          Use a higher-level connected component. Storybook helps you compose such data from the
          "args" of child component stories
        </li>
        <li>
          Assemble data in the page component from your services. You can mock these services out
          using Storybook.
        </li>
      </ul>
      <p>
        Get a guided tutorial on component-driven development at
        <a href="https://storybook.js.org/tutorials/" target="_blank" rel="noopener noreferrer">
          Storybook tutorials
        </a>
        . Read more in the
        <a href="https://storybook.js.org/docs" target="_blank" rel="noopener noreferrer"> docs </a>
        .
      </p>
      <div className="tip-wrapper">
        <span className="tip">Tip</span> Adjust the width of the canvas with the
        <svg width="10" height="10" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
          <g fill="none" fillRule="evenodd">
            <path
              d="M1.5 5.2h4.8c.3 0 .5.2.5.4v5.1c-.1.2-.3.3-.4.3H1.4a.5.5 0 01-.5-.4V5.7c0-.3.2-.5.5-.5zm0-2.1h6.9c.3 0 .5.2.5.4v7a.5.5 0 01-1 0V4H1.5a.5.5 0 010-1zm0-2.1h9c.3 0 .5.2.5.4v9.1a.5.5 0 01-1 0V2H1.5a.5.5 0 010-1zm4.3 5.2H2V10h3.8V6.2z"
              id="a"
              fill="#999"
            />
          </g>
        </svg>
        Viewports addon in the toolbar
      </div>
    </section>
  </article>
`;var Le={parameters:{storySource:{source:`import { Page } from './Page';
import * as HeaderStories from './Header.stories';

export default {
  title: 'Example/Page',
};

const Template = (args) => Page(args);

export const LoggedIn = Template.bind({});
LoggedIn.args = {
  // More on composing args: https://storybook.js.org/docs/web-components/writing-stories/args#args-composition
  ...HeaderStories.LoggedIn.args,
};

export const LoggedOut = Template.bind({});
LoggedOut.args = {
  ...HeaderStories.LoggedOut.args,
};
`,locationsMap:{"logged-in":{startLoc:{col:17,line:8},endLoc:{col:37,line:8},startBody:{col:17,line:8},endBody:{col:37,line:8}},"logged-out":{startLoc:{col:17,line:8},endLoc:{col:37,line:8},startBody:{col:17,line:8},endBody:{col:37,line:8}}}}},title:"Example/Page"};const O=t=>_e(t),z=O.bind({});z.args=i({},h.args);const M=O.bind({});M.args=i({},b.args);const Se=["LoggedIn","LoggedOut"];var Be=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:Le,LoggedIn:z,LoggedOut:M,__namedExportsOrder:Se});function D(t){return{"/Users/iihara/Documents/script/lit/lit-boiler-template/src/stories/Introduction.stories.mdx":be,"/Users/iihara/Documents/script/lit/lit-boiler-template/src/stories/Button.stories.js":ke,"/Users/iihara/Documents/script/lit/lit-boiler-template/src/stories/Header.stories.js":we,"/Users/iihara/Documents/script/lit/lit-boiler-template/src/stories/Page.stories.js":Be}[t]}Object.assign(D,{keys:()=>["/Users/iihara/Documents/script/lit/lit-boiler-template/src/stories/Introduction.stories.mdx","/Users/iihara/Documents/script/lit/lit-boiler-template/src/stories/Button.stories.js","/Users/iihara/Documents/script/lit/lit-boiler-template/src/stories/Header.stories.js","/Users/iihara/Documents/script/lit/lit-boiler-template/src/stories/Page.stories.js"],resolve:t=>({"/Users/iihara/Documents/script/lit/lit-boiler-template/src/stories/Introduction.stories.mdx":"./src/stories/Introduction.stories.mdx","/Users/iihara/Documents/script/lit/lit-boiler-template/src/stories/Button.stories.js":"./src/stories/Button.stories.js","/Users/iihara/Documents/script/lit/lit-boiler-template/src/stories/Header.stories.js":"./src/stories/Header.stories.js","/Users/iihara/Documents/script/lit/lit-boiler-template/src/stories/Page.stories.js":"./src/stories/Page.stories.js"})[t]});function je(t){t(D,{hot:!1},!1)}const Te=[X,W,q,G,K,J,Q,Y,Z,ee,se].filter(Boolean);Te.forEach(t=>{Object.keys(t).forEach(o=>{const s=t[o];switch(o){case"args":case"argTypes":return R.warn("Invalid args/argTypes in config, ignoring.",JSON.stringify(s));case"decorators":return s.forEach(r=>F(r,!1));case"loaders":return s.forEach(r=>V(r,!1));case"parameters":return x(i({},s),!1);case"argTypesEnhancers":return s.forEach(r=>U(r));case"argsEnhancers":return s.forEach(r=>$(r));case"globals":case"globalTypes":{const r={};return r[o]=s,x(r,!1)}case"decorateStory":case"renderToDOM":return null;default:return console.log(o+" was not supported :( !")}})});je(te);
//# sourceMappingURL=iframe.8c0e00d4.js.map
