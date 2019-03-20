import React, { PureComponent } from 'react';
import Topic from './components/Topic';
import List from './components/List';
import Writer from './components/Writer';
import Recommend from './components/Recommend';
import { HomeWrapper, HomeLeft , HomeRight } from './style';
import {connect} from 'react-redux';
import { actionCreators } from './store';
import { BackTop } from './style';

class Home extends PureComponent {

  handleScrollTop(){
    window.scrollTo(0,0);
  }

  render(){
    return (
      <HomeWrapper>
        <HomeLeft>
          <img 
            className='banner-img' 
            src="//upload.jianshu.io/admin_banners/web_images/4592/2cbadf9347d69cfc140daf64de887fda0e361bcc.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540" 
            alt=''
          />
          <Topic/>
          <List />
        </HomeLeft>
        <HomeRight>
          <Recommend />
          <Writer />
        </HomeRight>
        {this.props.showScroll ? <BackTop onClick={this.handleScrollTop}>回到顶部</BackTop> : null}
      </HomeWrapper>
    )
  }

  componentWillUnmount(){
    window.removeEventListener('scroll',this.props.changeScrollTopShow)
  }

  componentDidMount(){
    this.props.changeHomeData();
    this.bindEvents();
  }

  bindEvents() {
    window.addEventListener('scroll',this.props.changeScrollTopShow)
  }
}

const mapState = (state) => ({
  showScroll:state.getIn(['home','showScroll'])
})

const mapDispatch = (dispatch) => ({
  changeHomeData(){
    dispatch(actionCreators.getHomeInfo());
  },
  changeScrollTopShow(){
    if(document.documentElement.scrollTop > 200){
      dispatch(actionCreators.toggleTopShow(true))
    }else{
      dispatch(actionCreators.toggleTopShow(false))
    }
  }
})

export default connect(mapState,mapDispatch)(Home);