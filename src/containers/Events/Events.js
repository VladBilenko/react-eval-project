import React, {Component} from 'react';
import {bindActionCreators} from "redux";
import {withRouter} from "react-router-dom";
import {connect} from "react-redux";
import PropTypes from 'prop-types';
import {getEvents} from "../../actions/eventsActions";
import PageWrapper from "../../components/Page-wrapper";

const mapStateToProps = state => ({state: state});
const mapDispatchToProps = dispatch => (bindActionCreators({
  getEvents
}, dispatch));

@withRouter
@connect(mapStateToProps, mapDispatchToProps)
class Events extends Component {
  static propTypes = {
    getEvents: PropTypes.func.isRequired
  };

  componentDidMount() {
    const {getEvents} = this.props;

    getEvents();
  }

  render() {
    return (
      <PageWrapper>
        1
      </PageWrapper>
    );
  }
}

export default Events;
