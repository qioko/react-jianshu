import React, {PureComponent} from 'react';
import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux';

class Write extends PureComponent {
  render(){
    const { loginStatue } = this.props;
    if(loginStatue){
      return (
        <div>写文章</div>
      )
    }else{
      return (
        <Redirect to='/login' />
      )
    }

  }
}

const mapState = (state) => ({
  loginStatue : state.getIn(['login', 'login'])
})

const mapDispatch = (dispatch) => ({

})

export default connect(mapState,mapDispatch)(Write);