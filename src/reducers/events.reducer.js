import {SET_EVENTS} from '../constants/action-types'
import {Event} from '../models'

const initialState = null

export default function events (state = initialState, action) {
  switch (action.type) {
    case SET_EVENTS:
      return action.payload ? action.payload.map(item => (new Event(item))) : null
    default:
      return state
  }
}
