<template>
  <div>
    <ArticlesPage />
  </div>
</template>

<script lang="ts">
import ArticlesPage from "@/components/ArticlesPage.vue";
import { Options, Vue } from "vue-class-component";

@Options({
  components: {
    ArticlesPage,
  },
})
export default class ArticlesView extends Vue {}
</script>
