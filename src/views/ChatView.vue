<template>
  <div class="chat-notification">Chat</div>
</template>

<script lang="ts">
import ChatNotification from "@/components/ChatNotification.vue";
import { Options, Vue } from "vue-class-component";

@Options({
  components: {
    ChatNotification,
  },
})
export default class ChatView extends Vue {}
</script>
