import React, {Component} from 'react'
import {bindActionCreators} from 'redux'
import {withRouter} from 'react-router-dom'
import {connect} from 'react-redux'
import PropTypes from 'prop-types'
import {getEvents} from '../../actions'
import {PageWrapperComponent, ChartComponent, EventsListComponent, LoaderComponent} from '../../components'

const mapStateToProps = state => ({events: state.events})
const mapDispatchToProps = dispatch => (bindActionCreators({
  getEvents
}, dispatch))

@withRouter
@connect(mapStateToProps, mapDispatchToProps)
class EventsContainer extends Component {
  static propTypes = {
    getEvents: PropTypes.func.isRequired,
    events: PropTypes.array
  }

  componentDidMount () {
    const {getEvents, events} = this.props

    // I suppose that we don`t need to update date, if not - just remove *if statement
    if (!events) {
      getEvents()
    }
  }

  render () {
    const {events} = this.props

    return (
      <PageWrapperComponent>
        {
          events
            ? <React.Fragment>
              <ChartComponent width={560} height={250} data={events} title='Events statistic' />
              <EventsListComponent data={events} />
            </React.Fragment> : <LoaderComponent />
        }
      </PageWrapperComponent>
    )
  }
}

export default EventsContainer
