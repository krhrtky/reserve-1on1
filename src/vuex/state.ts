import { MailContent, State } from "@/model/types";

const state: State = {
  subjects: [],
  content: {
    to: "",
    yourName: "",
    prefix: `以下の日程で1on1を実施します。\n
お手数ですが会議室の確保をお願いします。`,
    postfix: "以上、よろしくお願いします。"
  }
};

export default state;
