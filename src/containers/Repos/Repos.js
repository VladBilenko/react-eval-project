import React, {Component} from 'react';
import {bindActionCreators} from "redux";
import {connect} from "react-redux";
import PropTypes from 'prop-types';
import {getRepos} from "../../actions/reposActions";
import PageWrapper from "../../components/Page-wrapper";

const mapStateToProps = state => ({state: state});
const mapDispatchToProps = dispatch => (bindActionCreators({
  getRepos
}, dispatch));


@connect(mapStateToProps, mapDispatchToProps)
class Repos extends Component {
  static propTypes = {
    getRepos: PropTypes.func.isRequired
  };

  componentDidMount() {
    const {getRepos} = this.props;

    getRepos();
  }

  render() {
    const {getRepos} = this.props;
    console.log(getRepos);
    return (
      <PageWrapper>
        2
      </PageWrapper>
    );
  }
}

export default Repos;
