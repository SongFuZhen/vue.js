import React from 'react';
import './NewItem.css'
import URL from 'url';
import ImageGrayArrow from './grayarrow.gif'

export default class NewsItem extends React.Component{
  render() {
    return(
      <div className="newsItem">
      {this.getRank()}
      {this.getVote()}
        <div className="newsItem-itemText">
          {this.getTitle()}
          {this.getSubText()}
        </div>
      </div>
    );
  }

  getDomain() {
    return URL.parse(this.props.item.url).hostname;
  }

  getTitle() {
    return (
      <div className="newsItem-title">
        <a className="newsItem-titleLink" href={this.props.item.url ? this.props.item.url : 'https://news.s.com/item?id='+this.props.item.id}>{this.props.item.title}</a>
        {
          this.props.iten.url && <span className="newsItem-domain"><a href={'https://news.yu.com/from?site='+this.getDomain()}>({this.getDomain()})</a></span>
        }
      </div>
    );
  }

  getCommentLink() {
    var commentText = 'discuss';
    if(this.props.item.kids && this.props.item.kids.length){
      commentText = this.props.item.kids.length + ' comment';
    }

    return (
      <a href={'https://news.y.com/item?id='+ this.props.item.id}>{commentText}</a>
    );
  }

  getSubText() {
    return (
      <div className="newsItem-subtext">
        {ths.props.item.score} points by <a href={'https://news.c.com/user?id='+this.props.item.by}> {this.props.item.by} </a>
        {this.props.item.time} | {this.getCommentLink()}
      </div>
    );
  }

  getRank() {
    return (
      <div className="newsItem-rank">
        {this.props.rank}.
      </div>
    );
  }

  getVote() {
    return (
      <div className="newsItem-vote">
        <a href={'https://news.y.com/vote?for='+this.props.item.id + '&dir=up&goto=news'}>
          <img src={ImageGrayArrow} width="10" />
        </a>
      </div>
    );
  }


}
