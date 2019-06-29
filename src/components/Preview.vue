<template>
  <v-dialog v-model="open" width="600px">
    <template v-slot:activator="{ on }">
      <v-btn color="primary" dark :disabled="!subjects.length" v-on="on">
        Mail preview
      </v-btn>
    </template>
    <v-card>
      <v-card-title>
        <v-text-field
                v-model="subjectName"
                label="Subject"
                :rules="subjectNameRules"
                required
        />
      </v-card-title>
      <v-card-text id="main">
        {{ contents.to }} <br >
        <br >
        お疲れ様です。 {{ contents.yourName }}です。 <br >
        <br >
        <div v-for="(msg, i) of contents.prefix.split('\n')" :key="i">{{ msg }}</div>
        <div v-for="(subject, i) in subjects" :key="i">
          ------------------------------------------------<br >
          日時&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;: {{ formatDate(subject.date) }} {{ subject.startTime }} ~
          {{ subject.endTime }} <br >
          メンター: {{ contents.yourName }}<br >
          メンティ: {{ subject.menteeName }} <br >
          会議室&nbsp;&nbsp;&nbsp;&nbsp;: {{ subject.useMeetingRoom ? '要' : '不要' }}<br >
          ------------------------------------------------<br >
        </div>
        {{ contents.postfix }} <br >
      </v-card-text>
      <v-card-actions>
        <v-spacer />
        <v-btn color="green darken-1" flat="flat" @click="open = false">
          Close
        </v-btn>
        <v-btn color="green darken-1" flat="flat" :disabled="!subjectName" @click="sendMail">
          Send
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script lang="ts">
  import { Component, Prop, Vue } from 'vue-property-decorator'
  import dayjs from 'dayjs'
  import { MailContent, Subject } from '@/model/types'

  @Component
export default class Preview extends Vue {
  @Prop()
  subjects!: Array<Subject>
  @Prop()
  contents!: MailContent

  private open: boolean = false
  private subjectName: string = `【共有&依頼】1on1面談_${dayjs().format(
    'M月'
  )}(${this.contents.yourName})`

  subjectNameRules: Array<(v: string) => boolean | string> = [
    v => !!v || 'subjectName is required.'
  ]

  private formatDate(dateStr: string): string {
    return dayjs(dateStr).format('M/DD(dd)')
  }

  private copy(): void {
    navigator.clipboard.writeText(
      (this.$root.$el.querySelectorAll('#main')[0] as HTMLDivElement).innerText
    )
  }

  private sendMail(): void {

    const content = {
      subject: this.subjectName,
      mailBody: (this.$root.$el.querySelectorAll('#main')[0] as HTMLDivElement)
        .innerText
    }

    const result = fetch(process.env.VUE_APP_SEND_MAIL_END_POINT, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json; charset=utf-8'
      },
      body: JSON.stringify(content)
    })
      .then(res => res.json())
      .then(json => json)
      .catch(res => console.log(res))

    console.log(result)
  }
}
</script>

<style scoped></style>
