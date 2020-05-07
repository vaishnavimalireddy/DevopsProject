import React,{Component} from 'react';
import './news.css';
import ECard from './ECard';
export default class Event extends Component{
//console.log(typeof(props.weather))

constructor(props){
    super(props);
}

render(){

   if(this.props.data._embedded === undefined)
   {
    return(
    <h1 className="heading">Sorry! There are no events near the given area</h1>
    )
   }
   else
   {
    return(
        <div>
        <h1 className="heading"> Nearby Events</h1>
        {console.log(this.props.data._embedded)}
          { 
            this.props.data._embedded.events.map((item,i) => { 
             return <ECard data={item} />
            }) 
          }
          
            
        </div>
    )
        }


}

    
}



