import React, {Component} from 'react'
import PropTypes from 'prop-types'
import Card from '@material-ui/core/Card/Card'
import CardContent from '@material-ui/core/CardContent'
import Typography from '@material-ui/core/Typography'
import './events-item.css'

class EventsItemComponent extends Component {
  static propTypes = {
    createdAt: PropTypes.string.isRequired,
    repoName: PropTypes.string.isRequired,
    payload: PropTypes.string.isRequired
  };

  render () {
    const {createdAt, repoName, payload} = this.props

    return (
      <Card className='events__item'>
        <CardContent>
          <Typography color='textSecondary' gutterBottom>
            {repoName}
          </Typography>
          <Typography component='p'>
            {payload}
          </Typography>
          <Typography color='textSecondary'>
            {createdAt}
          </Typography>
        </CardContent>
      </Card>
    )
  }
}

export default EventsItemComponent
