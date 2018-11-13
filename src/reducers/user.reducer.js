import {SET_USER} from '../constants/action-types'
import {User} from '../models'

const initialState = null

export default function users (state = initialState, action) {
  switch (action.type) {
    case SET_USER:
      return action.payload ? new User(action.payload) : null
    default:
      return state
  }
}
