import React, {Component} from 'react';
import {withRouter} from "react-router-dom";
import {connect} from "react-redux";
import {bindActionCreators} from 'redux';
import PropTypes from 'prop-types';
import {getUser} from "../../actions/userActions";
import PageWrapper from "../../components/Page-wrapper";

const mapStateToProps = state => ({state: state});
const mapDispatchToProps = dispatch => (bindActionCreators({
  getUser
}, dispatch));

@withRouter
@connect(mapStateToProps, mapDispatchToProps)
export default class User extends Component {
  static propTypes = {
      getUser: PropTypes.func.isRequired
    };

  componentDidMount() {
    const {getUser} = this.props;

    getUser();
  }

  render() {

    return (
      <PageWrapper>
        3
      </PageWrapper>
    );
  }
}
