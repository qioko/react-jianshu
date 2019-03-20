import styled from  'styled-components';

export const HomeWrapper = styled.div`
  overflow:hidden;
  width:960px;
  margin:0 auto;
`;

export const HomeLeft = styled.div`
  float:left;
  margin-left: 15px;
  padding-top: 30px;
  width:625px;
  .banner-img{
    width:625px;
    height:270px;
  }
`;

export const HomeRight = styled.div`
  width:280px;
  float:right;
`;

export const TopicWrapper = styled.div`
  overflow:hidden;
  padding: 20px 0 10px 0;
  margin-left: -18px;
  border-bottom: 1px solid #dcdcdc;
`;

export const TopicItem = styled.div`
  float: left;
  background: #f7f7f7;
  height: 32px;
  line-height:32px;
  margin-left:18px;
  margi-bottom: 18px;
  padding-right:10px;
  font-size: 14px;
  color: #000;
  border: 1px solid #dcdcdc
  border-radius: 4px；
  .topic-pic{
    display:block;
    float:left;
    width:32px;
    height:32px;
    margin-right: 10px;
  }
`;

export const ListItem = styled.div`
  overflow: hidden;
  padding: 20px 0;
  border-bottom:1px solid #dcdcdc;
  .pic{
    diaplay:block;
    float: right;
    width:125px;
    height:100px;
    float:right;
    border-radius:10px;
    margin: 30px 10px;
  }

`;

export const ListInfo = styled.div`
  width: 623px;
  float:left;
  .title{
    font-size:18px;
    line-height:27px;
    font-weight:bold;
    color:#333;
  }
  .content{
    color:#999;
    line-height: 24px;
    font-size:13px;
  }
`;

export const RecommendList = styled.div`
  width:280px;
  height:340px;
  margin:30px 0;
`;

export const RecommendItem = styled.div`
  width:280px;
  height:50px;
  margin-bottom: 6px;
  border-radius: 4px;
  background:url(${(props)=>props.imgUrl});
  background-size:contain;
`;

export const LoadMore = styled.div `
  width: 100%;
  height:40px;
  margin:30px 0;
  line-height:40px;
  background:#a5a5a5;
  text-align:center;
  border-radius:20px;
  color:#fff;
  cursor:pointer;
`;

export const BackTop = styled.div `
  position:fixed;
  right:100px;
  bottom:100px;
  width:60px;
  height: 60px;
  line-height:60px;
  text-align:center;
  font-size:14px;
`;