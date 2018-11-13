import React from 'react'
import LazyListComponent from '../Lazy-list'
import Button from '@material-ui/core/Button'
import RepoItemComponent from '../Repo-item'

class ReposListComponent extends LazyListComponent {
  render () {
    const {items} = this.state

    return (
      <React.Fragment>
        {items.map(item => (<RepoItemComponent key={item.id} {...item} />))}
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

export default ReposListComponent
