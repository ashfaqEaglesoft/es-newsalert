import React, { Component } from 'react'

export default class NewsItem extends Component {
  render() {
    let {title,description}=this.props;
    return (
      <div className='container my-3'>
          <h2>News Alerts Top Headlines</h2>
            <div className="row">
              <div className="col-4">
                <div className="card" style={{width: "18rem"}}>
                <img src="https://images.news18.com/ibnlive/uploads/2021/07/1627377451_nature.jpg" className="card-img-top"/>
                <div className="card-body">
                  <h5 className="card-title">{title}</h5>
                  <p className="card-text">{description}</p>
                  <a href="#" className="btn btn-primary">Go somewhere</a>
                </div>
                </div>
              </div>
              <div className="col-4">
                <div className="card" style={{width: "18rem"}}>
                <img src="https://images.news18.com/ibnlive/uploads/2021/07/1627377451_nature.jpg" className="card-img-top"/>
                <div className="card-body">
                  <h5 className="card-title">{title}</h5>
                  <p className="card-text">{description}</p>
                  <a href="#" className="btn btn-primary">Go somewhere</a>
                </div>
                </div>
              </div>
              <div className="col-4">
                <div className="card" style={{width: "18rem"}}>
                <img src="https://images.news18.com/ibnlive/uploads/2021/07/1627377451_nature.jpg" className="card-img-top"/>
                <div className="card-body">
                  <h5 className="card-title">{title}</h5>
                  <p className="card-text">{description}</p>
                  <a href="#" className="btn btn-primary">Go somewhere</a>
                </div>
                </div>
              </div>
            </div>
      </div>
    )
  }
}
