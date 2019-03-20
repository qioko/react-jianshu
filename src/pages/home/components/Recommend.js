import React, {PureComponent} from 'react';
import {RecommendList, RecommendItem} from '../style';
import { connect } from 'react-redux';

class Recommend extends PureComponent {
  render(){
    const {list} = this.props;
    return (
      <RecommendList>
        {
          list.map((item) => {
            return <RecommendItem key={item.get('id')} imgUrl={item.get('imgUrl')} />
          })
        }
      </RecommendList>
    )
  }
}

const mapState = (state) => ({
  list:state.getIn(['home', 'recommendList'])
})
 
export default connect(mapState,null)(Recommend);