import React, {Component} from 'react'
import PropTypes from 'prop-types'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import Typography from '@material-ui/core/Typography'
import './events-item.css'

class RepoItemComponent extends Component {
  static propTypes = {
    createdAt: PropTypes.string.isRequired,
    forks: PropTypes.number.isRequired,
    url: PropTypes.string.isRequired,
    openIssues: PropTypes.number.isRequired,
    watchers: PropTypes.number.isRequired
  }

  render () {
    const {createdAt, forks, url, openIssues, watchers} = this.props

    return (
      <Card className='events__item'>
        <CardContent>
          <Typography color='textSecondary' gutterBottom>
            Repository: <a className='main-link' href={url}>{url}</a>
          </Typography>
          <Typography component='p'>
            Forks: {forks}, Open issues: {openIssues}, Watchers: {watchers}
          </Typography>
          <Typography color='textSecondary'>
            {createdAt}
          </Typography>
        </CardContent>
      </Card>
    )
  }
}

export default RepoItemComponent
