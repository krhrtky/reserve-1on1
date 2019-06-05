<template>
  <v-card>
    <v-toolbar color="primary">
      <v-toolbar-title>Description</v-toolbar-title>
      <v-spacer />
      <v-badge color="red">
        <template v-slot:badge>
          <span>{{ subjects.length }}</span>
        </template>
        <v-menu
          bottom
          offset-y
          :close-on-content-click="false"
          :disabled="!subjects.length"
        >
          <template v-slot:activator="{ on }">
            <v-icon v-on="on">
              mail
            </v-icon>
          </template>
          <v-list>
            <v-list-tile v-for="(subject, i) in subjects" :key="i" inactive>
              <v-list-tile-title>
                {{ i + 1 }}. {{ subject.menteeName }}
                <v-icon small class="close-icon" @click="remove(subject)">
                  close
                </v-icon>
              </v-list-tile-title>
            </v-list-tile>
          </v-list>
        </v-menu>
      </v-badge>
    </v-toolbar>
    <v-card-text>
      <v-form ref="form">
        <v-text-field
          v-model="subject.menteeName"
          label="Mentee's name"
          :rules="nameRules"
          required
        />

        <v-text-field
          v-model="subject.date"
          label="Date"
          type="date"
          :rules="dateRules"
          required
        />

        <v-text-field
          v-model="subject.startTime"
          label="start"
          type="time"
          :rules="startTimeRules"
          required
        />

        <v-text-field
          v-model="subject.endTime"
          label="end"
          :rules="endTimeRules"
          type="time"
          required
        />
        <v-checkbox
          v-model="subject.useMeetingRoom"
          :label="`会議室予約: ${subject.useMeetingRoom ? '要' : '不要'}`"
        />
        <v-card-actions>
          <v-spacer />
          <v-btn color="warning" @click="clear">
            Clear
          </v-btn>
          <v-btn color="primary" @click="add">
            Add
          </v-btn>
        </v-card-actions>
      </v-form>
    </v-card-text>
  </v-card>
</template>

<script lang="ts">
  import { Component, Vue } from 'vue-property-decorator'
  import dayjs from 'dayjs'
  import Preview from '@/components/Preview.vue'
  import { Subject } from '@/model/types'

  const defaultSubject: Subject = {
  menteeName: '',
  date: dayjs().format('YYYY-MM-DD'),
  startTime: '18:00',
  endTime: '18:30',
  useMeetingRoom: true
}

@Component({
  components: {
    Preview
  }
})
export default class Register extends Vue {
  subject: Subject = Object.assign({}, defaultSubject)

  nameRules: Array<(v: string) => boolean | string> = [
    v => !!v || 'Name is required.'
  ]

  dateRules: Array<(v: string) => boolean | string> = [
    v => !!v || 'Date is required.',
    v => dayjs(v).isValid() || 'Date\'s format is invalid'
  ]

  startTimeRules: Array<(v: string) => boolean | string> = [
    v => !!v || 'StartTime is required.',
    v =>
      dayjs(`${this.subject.date} ${v}`).isValid() ||
      'Date\'s format is invalid.',
    _ => this.timeValidate() || 'StartTime must be before EndTime.'
  ]

  private endTimeRules: Array<(v: string) => boolean | string> = [
    v => !!v || 'EndTime is required',
    v =>
      dayjs(`${this.subject.date} ${v}`).isValid() ||
      'Date\'s format is invalid',
    _ => this.timeValidate() || 'EndTime must be after StartTime.'
  ]

  clear(): void {
    this.subject = Object.assign({}, defaultSubject)
  }

  add(): void {
    const form: any = this.$refs.form as any
    if (form.validate()) {
      this.$store.commit('addSubject', this.subject)
      this.clear()
      form.resetValidation()
    }
  }

  remove(subject: Subject): void {
    this.$store.commit('removeSubject', subject)
  }

  timeValidate(): boolean {
    return dayjs(`${this.subject.date} ${this.subject.startTime}`).isBefore(
      dayjs(`${this.subject.date} ${this.subject.endTime}`)
    )
  }

  get subjects(): Array<Subject> {
    return this.$store.getters.subjects
  }
}
</script>

<style scoped>
.close-icon {
  cursor: pointer;
}
</style>
