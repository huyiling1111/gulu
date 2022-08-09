import { createWebHashHistory, createRouter } from "vue-router";
import Home from "./views/Home.vue";
import Doc from "./views/Doc.vue";
import SwitchDemo from "./examples/Switch/SwitchDemo.vue";
import ButtonDemo from "./examples/Button/ButtonDemo.vue";
import DialogDemo from "./examples/Dialog/DialogDemo.vue";
import TabsDemo from "./examples/Tabs/TabsDemo.vue";
import FormDemo from "./examples/Form/FormDemo.vue";

import { h } from 'vue';
import Markdown from './examples/Mark/Markdown.vue';
import intro from './markdown/intro.md'
import getStarted from './markdown/get-started.md'
import install from './markdown/install.md'
const history = createWebHashHistory();
const md = string => h(Markdown, { content: string, key: string })
export const router = createRouter({
  history: history,
  routes: [
    { path: "/", component: Home },
    {
      path: "/doc",
      component: Doc,
      children: [
        { path: "", redirect: '/doc/intro' },
        { path: "intro", component: md(intro) },
        { path: "get-started", component: md(getStarted) },
        { path: "install", component: md(install) },
        { path: "switch", component: SwitchDemo },
        { path: "button", component: ButtonDemo },
        { path: "dialog", component: DialogDemo },
        { path: "tabs", component: TabsDemo },
        { path: "form", component: FormDemo },
      ],
    },
  ],
});
router.afterEach(() => {
  console.log("路由切换了");
});
let a={value:1, next:{value:7 }}