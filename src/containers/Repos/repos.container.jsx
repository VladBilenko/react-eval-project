import React, {Component} from 'react'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import PropTypes from 'prop-types'
import {getRepos} from '../../actions'
import {PageWrapperComponent, ChartComponent, LoaderComponent, ReposListComponent} from '../../components'

const mapStateToProps = state => ({repos: state.repos})
const mapDispatchToProps = dispatch => (bindActionCreators({
  getRepos
}, dispatch))

@connect(mapStateToProps, mapDispatchToProps)
class ReposContainer extends Component {
  static propTypes = {
    getRepos: PropTypes.func.isRequired,
    repos: PropTypes.array
  }

  componentDidMount () {
    const {getRepos, repos} = this.props

    // I suppose that we don`t need to update date, if not - just remove *if statement
    if (!repos) {
      getRepos()
    }
  }

  render () {
    const {repos} = this.props
    return (
      <PageWrapperComponent>
        {
          repos
            ? <React.Fragment>
              <ChartComponent width={560} height={250} data={repos} title='Repos statistic' />
              <ReposListComponent data={repos} />
            </React.Fragment> : <LoaderComponent />
        }
      </PageWrapperComponent>
    )
  }
}

export default ReposContainer
