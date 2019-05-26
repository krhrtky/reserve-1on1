<template>
  <v-dialog v-model="open" width="600px">
    <template v-slot:activator="{ on }">
      <v-btn color="primary" dark v-on="on">Open Dialog</v-btn>
    </template>
    <v-card>
      <v-card-title>
        <span class="headline">Use Google's location service?</span>
      </v-card-title>
      <v-card-text>
        habitasse turpis.
      </v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn color="green darken-1" flat="flat" @click="open = false"
          >Disagree</v-btn
        >
        <v-btn color="green darken-1" flat="flat" @click="open = false"
          >Agree</v-btn
        >
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";
import { Subject } from "@/model/Subject";

@Component
export default class Preview extends Vue {
  @Prop()
  open!: boolean;
  @Prop()
  subjects!: Array<Subject>;
}
</script>

<style scoped></style>
