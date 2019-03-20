import axios from 'axios';
import * as constants from './constants'
//import {fromJS} from 'immutable';

const showDetail = (title, content) =>({
  type:constants.SHOW_INIT_DETAIL,
  title,
  content
})

export const getDetail = (id) =>{
  return (dispatch) =>{
    axios.get('/api/detailList.json?id=' + id).then((res) => {
      const detail=res.data.data;
      dispatch(showDetail(detail.title, detail.content));
    })
  }
}