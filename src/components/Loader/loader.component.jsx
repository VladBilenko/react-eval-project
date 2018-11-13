import React, {Component} from 'react'
import CircularProgress from '@material-ui/core/CircularProgress'
import './loader.css'

class LoaderComponent extends Component {
  render () {
    return (
      <div className='loader__wrapper'>
        <CircularProgress />
        <span className='loader__text'>Loading...</span>
      </div>
    )
  }
}

export default LoaderComponent
