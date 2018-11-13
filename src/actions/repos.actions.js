import {SET_REPOS} from '../constants/action-types'

export function getRepos () {
  return (dispatch) => {
    setTimeout(() => {
      dispatch({
        type: SET_REPOS,
        payload: require('../mocks/repos.json')
      })
    }, 1000)
  }
}
