<template>
  <v-app>
    <v-toolbar app>
      <v-toolbar-title class="headline text-uppercase">
        <span>1 on 1</span>
      </v-toolbar-title>
    </v-toolbar>

    <v-content>
      <v-container>
        <v-layout align-center justify-center>
          <v-flex xs12 md4>
            <MailHeader/>
            <Register/>
          </v-flex>
        </v-layout>
      </v-container>
    </v-content>
  </v-app>
</template>

<script lang="ts">
import Register from "@/components/Register.vue";
import MailHeader from "@/components/MailHeader.vue";
import { Vue, Component } from "vue-property-decorator";

@Component({
  components: {
    Register,
    MailHeader
  }
})
export default class App extends Vue {}
</script>
