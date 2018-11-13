import {SET_EVENTS} from '../constants/action-types'

export function getEvents () {
  return (dispatch) => {
    setTimeout(() => {
      dispatch({
        type: SET_EVENTS,
        payload: require('../mocks/events.json')
      })
    }, 1500)
  }
}
