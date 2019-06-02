import { State } from '@/model/types'
import InitialContent from '@/model/InitialContent'

const savedContent = localStorage.getItem('rks-1on1')

const state: State = {
  subjects: [],
  content: !savedContent ? InitialContent : JSON.parse(savedContent),
  strict: process.env.NODE_ENV !== 'production'
}

export default state
