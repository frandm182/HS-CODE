import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import * as codesActions from '../actions/codesActions';
import Header from './common/Header';
import Code from '../components/code/Code';
import CodeForm from '../components/code/CodeForm';

import Modal from '../components/common/Modal'

class App extends React.Component {
  render() {
    return (
      <div className="container-fluid">
        <Header />
        <Code code={this.props.bd.code}  onChange={code => console.log(code)}/>
          <Modal show={this.props.bd.modal} closeModal={()=> console.log('close')}>
            <CodeForm list={this.props.bd.codes} onClick={(name,id) => console.log(name,id)} closeModal={()=> console.log('close')} />
          </Modal>
      </div>
    );
  }
}
App.propTypes = {
};

const mapStateToProps = (state, ownProps) => {
  console.log(state)

  return {
    bd: state.bd
  };
};

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(codesActions, dispatch)
});

export default connect(mapStateToProps)(App);
