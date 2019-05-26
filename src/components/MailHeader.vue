<template>
  <v-card>
    <v-toolbar color="primary" @click="onClick">
      <v-toolbar-title>Mail Header</v-toolbar-title>
    </v-toolbar>
    <v-expansion-panel>
      <v-expansion-panel-content v-model="panel">
        <v-card-text>
          <v-form>
            <v-text-field
              v-model="content.to"
              label="To (Please enter in comma separated space)"
              required
            ></v-text-field>
            <v-text-field
              v-model="content.yourName"
              label="Your Name"
              required
            ></v-text-field>
            <v-textarea
              v-model="content.prefix"
              label="Prefix"
              required
              type="textarea"
            ></v-textarea>
            <v-textarea
              v-model="content.postfix"
              label="Postfix"
              required
              type="textarea"
            ></v-textarea>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="warning" @click="clear">
                Clear
              </v-btn>
              <v-btn color="primary">
                Save
              </v-btn>
            </v-card-actions>
          </v-form>
        </v-card-text>
      </v-expansion-panel-content>
    </v-expansion-panel>
  </v-card>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";

type MailContent = {
  to: string;
  yourName: string;
  prefix: string;
  postfix: string;
};

const defaultContent: MailContent = {
  to: "",
  yourName: "",
  prefix: `以下の日程で1on1を実施します。
お手数ですが会議室の確保をお願いします。`,
  postfix: "以上、よろしくお願いします。"
};

@Component
export default class MailHeader extends Vue {
  panel: boolean = false;
  content: MailContent = Object.assign({}, defaultContent);

  onClick() {
    this.panel = !this.panel;
  }

  clear() {
    this.content = Object.assign({}, defaultContent);
  }

  save() {}
}
</script>

<style scoped></style>
