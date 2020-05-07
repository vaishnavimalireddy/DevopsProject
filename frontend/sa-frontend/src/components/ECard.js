import React, {Component} from 'react';
import './ecard.css';

class ECard extends Component {
  constructor(props){
    super(props);
    this.state ={
      cart:[]
    }
  }

  render(){
    console.log(this.props.data.name);
    console.log(this.props.data.images[0].url);
    console.log(this.props.data.url);
    return(
    
      <div class="card1">
        <img id="eventsimage"class="card-img-top" src={this.props.data.images[0].url} alt="Card image"/>
        <div class="card-body">
            <h5 class="card-title">{this.props.data.name}</h5>
            <h5> {this.props.data.dates.start.localDate}</h5>
            <a href={this.props.data.url} target="_blank" class="bt"> Read More</a>
        </div>
      </div>


    );
  }
}

export default ECard;
