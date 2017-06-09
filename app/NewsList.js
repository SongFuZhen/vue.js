import React from 'react';
import NewsHeader from './NewsHeader.js'
import NewsItem from './NewsItem.js'
export default class NewsList extends React.Component{
    render(){
      var testData = [{
        "by": "bane",
        "descendants": 49,
        "id": 11600125,
        "kids": [1125, 1126, 1127,1128,1129,1120],
        "score": 98,
        "time": new Date(),
        "title": "Yahoo's Marissa kkkk....",
        "type": "story",
        "url": "http://www.latimes.com/business/technology/la-fi-0429-tn-marissa-mayer-severance-20160429-story.html"
      },
      {
        "by": "bane",
        "descendants": 49,
        "id": 11600126,
        "kids": [1125, 1126, 1127,1128,1129,1120],
        "score": 38,
        "time": new Date(),
        "title": "Yahoo's sss kkkk....",
        "type": "story",
        "url": "http://www.latimes.com/business/technology/la-fi-0429-tn-marissa-mayer-severance-20160429-story.html"
      },
      {
        "by": "bane",
        "descendants": 49,
        "id": 11600127,
        "kids": [1125, 1126, 1127,1128,1129,1120],
        "score": 48,
        "time": new Date(),
        "title": "iasusi  kkkk....",
        "type": "story",
        "url": "http://www.latimes.com/business/technology/la-fi-0429-tn-marissa-mayer-severance-20160429-story.html"
      },
      {
        "by": "bane",
        "descendants": 49,
        "id": 11600128,
        "kids": [1125, 1126, 1127,1128,1129,1120],
        "score": 58,
        "time": new Date(),
        "title": "dsfsdfsfsdfdv  ....",
        "type": "story",
        "url": "http://www.latimes.com/business/technology/la-fi-0429-tn-marissa-mayer-severance-20160429-story.html"
      }
    ];

    return (
      <div className="newsList">
        <NewsHeader />
        <div className="newsList-newsItem">
          {
            (testData).map(function(item, index){
              return (
                <NewsItem key={item.id} item={item} rank={index+1} />
              );
            })
          }
        </div>
      </div>
    );
  }
}
