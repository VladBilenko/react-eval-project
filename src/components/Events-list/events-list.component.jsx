import React from 'react'
import LazyListComponent from '../Lazy-list'
import EventsItemComponent from '../Events-item'
import Button from '@material-ui/core/Button/Button'

class EventsListComponent extends LazyListComponent {
  render () {
    const {items} = this.state

    return (
      <React.Fragment>
        {items.map(item => (<EventsItemComponent key={item.id} {...item} />))}
        {
          this.isMoreData
            ? <Button variant='contained' size='large' color='primary' className='more-btn' onClick={this.showNextPage}>
              Get more
            </Button> : ''
        }

      </React.Fragment>
    )
  }
}

export default EventsListComponent
