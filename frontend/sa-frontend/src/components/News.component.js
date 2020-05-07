import React,{Component} from 'react';
import './news.css';
import Cards from './Cards';
export default class News extends Component{

  constructor(props){
      super(props);
  }
  render(){
      return(
          <div>
            <h1 className="heading"> Top News</h1>
            { 
              this.props.news.map((item,i) => {
              return <Cards data={item} />
              }) 
            }
            
              
          </div>
      )

  }
}



