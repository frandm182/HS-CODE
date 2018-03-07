import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as codesActions from '../actions/codesActions';
import Header from './common/Header';
import Code from '../components/code/Code';


class App extends React.Component {
  render() {
    return (
      <div className="container-fluid">
        <Header />
        <Code {...this.props}  onChange={code => console.log(code)}/>
      </div>
    );
  }
}
App.propTypes = {
};

const mapStateToProps = (state, ownProps) => {
  console.log(state)

  return {
    state: state.bd
  };
};

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(codesActions, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
