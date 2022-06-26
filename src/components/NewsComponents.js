import React, { Component } from 'react'
import NewsItem from './NewsItem'
export default class NewsComponents extends Component {
  render() {
    return (
      <div>
      <NewsItem title="this is title" description="this is mydes" />
      </div>
    )
  }
}
