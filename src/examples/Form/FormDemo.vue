<template>
  <h1>Form 示例</h1>
  <Demo :component="FormDemo1" />
</template>

<script lang="ts">
import FormDemo1 from  "./FormDemo1.vue"
console.log(FormDemo1)
import Demo from "../Demo/Demo.vue"
export default {
  components: {
    Demo,
  },
  setup() {
    return {
      FormDemo1
    };
  },
};
</script>