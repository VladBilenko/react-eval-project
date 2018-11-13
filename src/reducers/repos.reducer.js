import {SET_REPOS} from '../constants/action-types'
import {Repo} from '../models'

const initialState = null

export default function repos (state = initialState, action) {
  switch (action.type) {
    case SET_REPOS:
      return action.payload ? action.payload.map(item => (new Repo(item))) : null
    default:
      return state
  }
}
