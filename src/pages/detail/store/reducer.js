import { fromJS } from 'immutable';
import * as constants from './constants';

const  defaultState = fromJS({
  title:'',
  content:''
});

const showInitDetail = (state,action) => {
  return (
    state.merge({
      'title':fromJS(action.title),
      'content':fromJS(action.content)
    })
  )
};

export default (state=defaultState, action) => {
  switch (action.type){
    case constants.SHOW_INIT_DETAIL:
     return showInitDetail(state, action)
    default:
    return state;
  }
};