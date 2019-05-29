<template>
  <v-dialog v-model="open" width="600px">
    <template v-slot:activator="{ on }">
      <v-btn color="primary" dark v-on="on">Mail preview</v-btn>
    </template>
    <v-card>
      <v-card-title>
        <span class="headline">Transmission content check</span>
      </v-card-title>
      <v-card-text>
        {{ contents.to }} <br />

        お疲れ様です。 {{ contents.yourName }}です。 <br />

        {{ contents.prefix }} <br />
        <div v-for="(subject, i) in subjects" :key="i">
          ------------------------------------------------<br />
          日時 : {{ formatDate(subject.date) }} {{ subject.startTime }} ~
          {{ subject.endTime }} <br />
          メンティ: {{ subject.menteeName }} <br />
          会議室: {{ subject.useMeetingRoom ? '要' : '不要' }}<br />
          ------------------------------------------------<br />
        </div>
        {{ contents.postfix }} <br />
      </v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn color="green darken-1" flat="flat" @click="open = false">
          Disagree
        </v-btn>
        <v-btn color="green darken-1" flat="flat" @click="open = false">
          Agree
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";
import dayjs from "dayjs";
import { MailContent, Subject } from "@/model/types";

@Component
export default class Preview extends Vue {
  open: boolean = false;
  @Prop()
  subjects!: Array<Subject>;
  @Prop()
  contents!: MailContent;
  static formatDate(dateStr: string) {
    return dayjs(dateStr).format("M/DD(dd)")
  }
}
</script>

<style scoped></style>
