<template>
<router-view />
</template>

<script lang="ts">
import {
    provide,
    ref
} from "vue";
import {
    router
} from "./router";
export default {
    name: "App",
    setup() {
        const width = document.documentElement.clientWidth;
        const menuVisible = ref(true);
        provide("menuVisible", menuVisible);
        router.afterEach(() => {
            if (width <= 500) {
                menuVisible.value = false;
            }
            console.log("路由切换了");
        });
    },
};
</script>
