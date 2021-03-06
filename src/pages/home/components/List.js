import React, {PureComponent} from 'react';
import { ListItem, ListInfo, LoadMore } from '../style';
import {connect} from 'react-redux';
import { actionCreators } from '../store';
import { Link } from 'react-router-dom';

class List extends PureComponent {
  render(){
    const {list, getMoreList, page } = this.props;
    return (
      <div>
        {
          list.map((item)=>{
            return (
              <Link key={item.get('id')} to={'/detail/' + item.get('id')}>
                <ListItem>
                  <ListInfo>
                    <img 
                      className='pic'
                      src={item.get('imgUrl')}
                      alt=''
                    />
                    <h3 className='title'>{item.get('title')}</h3>
                    <p className='content'>{item.get('content')}</p>
                  </ListInfo>
                </ListItem>
              </Link>
            )
          })
        }
        <LoadMore
          onClick={() => {getMoreList(page)}}
        >更多文字</LoadMore>
      </div>
      
    )
  }
}

const mapState = (state) => ({
  list:state.getIn(['home', 'articleList']),
  page:state.getIn(['home', 'articlePage'])
})

const mapDispatch = (dispatch) =>({
  getMoreList(page){
    dispatch(actionCreators.getMoreList(page))
  }
})

export default connect(mapState,mapDispatch)(List);