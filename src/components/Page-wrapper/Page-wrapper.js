import React, {Component} from 'react';
import Header from "../Header/Header";


export default class PageWrapper extends Component {
  render() {
    const {children} = this.props;
    return (
      <div>
        <Header />
        {children}
      </div>
    );
  }
}
