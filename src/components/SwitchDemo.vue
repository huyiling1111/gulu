<template>
<div>
    <Switch :value="checked" @update:value="checked = $event" />
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
        let checked = ref(false);
        return {
            checked,
        };
    },
};
</script>
