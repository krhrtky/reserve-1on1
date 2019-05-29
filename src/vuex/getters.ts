import { GetterTree } from "vuex";
import { MailContent, State, Subject } from "@/model/types";

const getters: GetterTree<State, State> = {
  subjects: ({ subjects }: State): Array<Subject> => subjects,
  mailContent: ({ content }: State): MailContent => {
    const storageContent = localStorage.getItem("rks-1on1");
    if (!storageContent) {
      return !content
        ? content
        : {
            to: "",
            yourName: "",
            prefix: `以下の日程で1on1を実施します。\n
お手数ですが会議室の確保をお願いします。`,
            postfix: "以上、よろしくお願いします。"
          };
    }
    return JSON.parse(storageContent) as MailContent;
  }
};

export default getters;
