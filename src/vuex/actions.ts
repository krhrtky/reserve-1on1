import { ActionTree } from "vuex";
import { MailContent, State } from "@/model/types";
import InitialContent from "@/model/InitialContent";

const actions: ActionTree<State, State> = {
  /**
   * メールテンプレートを登録する.
   * @param commit
   * @param newContent メールテンプレート.
   */
  registerContent({ commit }, newContent: MailContent) {
    localStorage.setItem("rks-1on1", JSON.stringify(newContent));
    commit("updateContent", newContent);
  },
  /**
   * メールテンプレートを初期化.
   * @param commit -
   */
  clearContent({ commit }) {
    localStorage.removeItem("rks-1on1");
    commit("updateContent", InitialContent);
  }
};

export default actions;
