<template>
  <component :is="this.$route.meta.layout.component"> <slot /> </component>
</template>

<script lang="ts">
import lifecycleLoggerMixin from "../mixins/lifecycleLoggerMixin";

export default {
  name: "AppLayout",
  mixins: [lifecycleLoggerMixin],
};
</script>
