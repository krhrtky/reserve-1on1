<template>
  <v-app>
    <v-toolbar app>
      <v-toolbar-title class="headline text-uppercase">
        <span>1 on 1</span>
      </v-toolbar-title>
      <v-spacer />
      <Preview :subjects="subjects" :contents="content" />
    </v-toolbar>

    <v-content>
      <v-container>
        <v-layout align-center justify-center>
          <v-flex xs12 md4>
            <MailTemplate />
            <Register />
          </v-flex>
        </v-layout>
      </v-container>
    </v-content>
  </v-app>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import Register from "@/components/Register.vue";
import MailTemplate from "@/components/MailTemplate.vue";
import Preview from "@/components/Preview.vue";

@Component({
  components: {
    Register,
    MailTemplate,
    Preview
  }
})
export default class App extends Vue {
  get subjects() {
    return this.$store.getters.subjects;
  }
  get content() {
    return this.$store.getters.mailContent;
  }
}
</script>

<style>
html {
  overflow-y: overlay;
}
</style>
