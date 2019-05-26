<template>
  <v-card>
    <v-toolbar color="primary">
      <v-toolbar-title>Description</v-toolbar-title>
      <v-spacer />
      <v-btn @click="open">
        Preview
      </v-btn>
      <v-badge color="red">
        <template v-slot:badge>
          <span>{{ subjects.length }}</span>
        </template>
        <v-icon>
          mail
        </v-icon>
      </v-badge>
    </v-toolbar>
    <v-card-text>
      <v-form>
        <v-text-field
          v-model="subject.menteename"
          label="mentee's name"
          required
        ></v-text-field>

        <v-text-field
          v-model="subject.date"
          label="Date"
          required
          type="date"
        ></v-text-field>

        <v-text-field
          v-model="subject.startTime"
          label="start"
          required
          type="time"
        ></v-text-field>

        <v-text-field
          v-model="subject.endTime"
          label="Date"
          required
          type="time"
        ></v-text-field>
        <v-checkbox
          v-model="subject.useMeetingRoom"
          :label="`会議室予約: ${subject.useMeetingRoom ? '要' : '不要'}`"
        ></v-checkbox>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="warning" @click="clear">
            Clear
          </v-btn>
          <v-btn color="primary" @click="add">
            Add
          </v-btn>
        </v-card-actions>
      </v-form>
    </v-card-text>
    <preview :open="previewIsOpen" :subjects="this.subjects"></preview>
  </v-card>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import Preview from "./Preview.vue";
import { Subject } from "@/model/Subject";

const defaultSubject: Subject = {
  menteeName: "",
  date: "",
  startTime: "",
  endTime: "",
  useMeetingRoom: true
};

@Component({
  components: {
    Preview
  }
})
export default class Register extends Vue {
  subject: Subject = Object.assign({}, defaultSubject);

  subjects: Array<Subject> = [];

  previewIsOpen: boolean = false;

  clear() {
    this.subject = Object.assign({}, defaultSubject);
  }

  add(subject: Subject) {
    this.subjects.push(subject);
    this.clear();
  }

  open() {
    this.previewIsOpen = true;
  }
}
</script>

<style scoped></style>
