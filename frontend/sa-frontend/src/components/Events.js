import React,{Component} from 'react';
import './news.css';
import Event from './Event';
export default class Events extends Component{
//console.log(typeof(props.weather))

constructor(props){
    super(props);
}

render(){
    return(
      <div>
      <br>
      </br>
      
     { console.log(this.props.events)}
      {
        this.props.events ?
        this.props.events.map((item) => {
          return <Event data={item} />
        }) : null
      }
      
        
    </div>
    )

   //}
    


}
}


