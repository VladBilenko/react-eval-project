import {combineReducers} from 'redux'
import repos from './repos.reducer'
import user from './user.reducer'
import events from './events.reducer'

export default combineReducers({
  repos,
  user,
  events
})
