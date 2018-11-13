import {SET_USER} from '../constants/action-types'

export function getUser () {
  return (dispatch) => {
    setTimeout(() => {
      dispatch({
        type: SET_USER,
        payload: require('../mocks/user.json')
      })
    }, 600)
  }
}
