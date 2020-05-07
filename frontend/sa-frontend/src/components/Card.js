import React, {Component} from 'react';
import './news.css';

class Card extends Component {
  constructor(props){
    super(props);
    this.state = { 
      pic:false,
     
  }
  }
  render(){
    //console.log(this.props.data);
    if(this.props.data.urlToImage!=null){
    return(

        <div class="card">
        <img id="newsimage" class="card-img-top" src={this.props.data.urlToImage} alt="Card image cap"/>
        <div class="card-body">
            <h5 class="card-title">{this.props.data.title}</h5>
            <p class="card-text">{this.props.data.description}</p>
            <a href={this.props.data.url} target="_blank" class="bt"> Read More</a>
        </div>
      </div>

      
    );
    }
    else{
      return(

        <div class="card">
        <img id="newsimage"class="card-img-top" src="https://m.files.bbci.co.uk/modules/bbc-morph-news-waf-page-meta/4.1.2/bbc_news_logo.png" alt="Card image cap"/>
        <div class="card-body">
            <h5 class="card-title">{this.props.data.title}</h5>
            <p class="card-text">{this.props.data.description}</p>
            <a href={this.props.data.url} class="bt"> Read More</a>
        </div>
      </div>

      //https://m.files.bbci.co.uk/modules/bbc-morph-news-waf-page-meta/4.1.2/bbc_news_logo.png
    );
    }
  }
}

export default Card;
