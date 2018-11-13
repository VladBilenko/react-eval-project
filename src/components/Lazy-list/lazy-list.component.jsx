import {Component} from 'react'
import PropTypes from 'prop-types'

class LazyListComponent extends Component {
  static propTypes = {
    data: PropTypes.array.isRequired
  };
  pageSize = 10

  state = {
    items: [],
    index: 0
  }

  componentDidMount () {
    this.updatePageableList()
  }

  get isMoreData () {
    const {data} = this.props
    return data.length > this.state.index + this.pageSize
  }

  updatePageableList = () => {
    const {data} = this.props
    const slicedData = data.slice(this.state.index, this.state.index + this.pageSize)

    this.setState(prevState => ({items: [...prevState.items, ...slicedData]}))
  }

  showNextPage = () => {
    this.setState(prevState => ({index: prevState.index + 10}), () => this.updatePageableList())
  }
}

export default LazyListComponent
