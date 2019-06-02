import { MutationTree } from 'vuex'
import { MailContent, State, Subject } from '@/model/types'

const mutations: MutationTree<State> = {
  /**
   * 送信内容の追加.
   * @param state state
   * @param subject 追加内容
   */
  addSubject(state: State, subject: Subject) {
    state.subjects = state.subjects.concat([subject])
  },
  /**
   * 選択した送信内容の削除.
   * @param state state
   * @param subject 削除対象
   */
  removeSubject(state: State, subject: Subject) {
    state.subjects = state.subjects.filter(target => target !== subject)
  },
  /**
   * subjectsを空にする.
   * @param state state
   */
  clearSubjects(state: State) {
    state.subjects = []
  },
  /**
   * メールテンプレートの更新.
   * @param state state
   * @param newContent 更新対象
   */
  updateContent(state: State, newContent: MailContent) {
    state.content = newContent
  }
}

export default mutations
