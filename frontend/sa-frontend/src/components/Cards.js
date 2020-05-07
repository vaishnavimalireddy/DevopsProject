import React,{Component} from 'react';
import './news.css';
import Card from './Card';
export default class Cards extends Component{
//console.log(typeof(props.weather))

constructor(props){
    super(props);
}

render(){
    return(
        <div>
        
          { 
            this.props.data.articles.map((item,i) => { 
             return <Card data={item} />
            }) 
          }
          
            
        </div>
    )


}

    
}



