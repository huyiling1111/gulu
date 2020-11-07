<template>
<div>
    <Switch v-model:value="bool" />
</div>
</template>

<script lang="ts">
import {
    ref
} from "vue";
import Switch from "../lib/Switch.vue";
export default {
    components: {
        Switch,
    },

    setup() {
        let bool = ref(false);
        return {
            bool,
        };
    },
};
</script>
