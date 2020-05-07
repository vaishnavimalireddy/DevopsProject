import React, {Component} from 'react'; 
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'; 
import Weather from "./Weather"; 
import Events from "./Events";
import Header from './header.component';
import News from './News.component';
import Footer from './footer.component';
import './home.css';


export default class Home extends Component { 
    constructor(props) { 
        super(props); 
        this.onChangeZipCode = this.onChangeZipCode.bind(this);
    
        this.onSubmit = this.onSubmit.bind(this);
        this.state = { 
            zipcode: '',
            weather: [],
            events: [],
            news:[],
            data:[],
            weatherb:false,
            eventb:false,
            buttonp:false
           
        }
    }; 

    componentDidMount(){
        fetch('/news', { 
            method: 'POST', 
            headers: {
                "Access-Control-Allow-Origin": "*",
                "Content-Type": "application/json" 
            },
        }) 
        .then(response => response.json()) 
        .catch(error => console.log(error))
        .then(data => {
            if(data!==undefined){
                this.setState({ news: [ data['response'] ]})
            }
        }); 
    }

        onChangeZipCode(e){
            this.setState({
                zipcode:e.target.value
             });
        }


    onSubmit(e)
    {   
        e.preventDefault();
        this.setState({ buttonp: true})
        fetch('/weather', { 
            method: 'POST', 
            headers: {
                "Access-Control-Allow-Origin": "*",
                "Content-Type": "application/json" 
            },
            body: JSON.stringify({zipcode: this.state.zipcode}) 
        }) 
        .then(response => response.json()) 
        .catch(error => console.log(error))
        .then(data => {
            if(data!==undefined)
            {
                this.setState({weather: [ data['response'] ]})
            }
          }); 

        fetch('/events', { 
            method: 'POST', 
            headers: {
                "Access-Control-Allow-Origin": "*",
                "Content-Type": "application/json" 
            },
            body: JSON.stringify({zipcode: this.state.zipcode}) 
        }) 
        .then(response => response.json()) 
        .catch(error => console.log(error))
        .then(data => {
            if(data!==undefined){
                this.setState({events: [ data['response'] ]})
            }
        }); 
   
        
      
        if(this.state.weatherb!==undefined)
        {
            this.setState({ weatherb: true})
        }
        if(this.state.eventb!==undefined)
        {
            this.setState({ eventb: true})
        }
        console.log(this.state.events);
    }

   

    

    
    onEnterPress = e => { 
        // if (e.key === 'Enter') { 
        //     this.analyzeZipcode(); 
        //     this.analyzeEvents();
        // } 
    }; 
    
    render() {
        
        const {weatherb,eventb,buttonp} = this.state;
        const weatherComponent = this.state.weather !== undefined ? <Weather weather={this.state.weather} zipcode={this.state.zipcode}/> : null;
        const eventsComponent = this.state.events !== undefined ? <Events events={this.state.events} zipcode={this.state.zipcode}/> : null;
        const newsComponent = this.state.news !== undefined ? <News news={this.state.news}/> : null;
        
        return ( 
         
          <MuiThemeProvider> 
          <Header/>
          <br></br><br></br> <br></br><br></br><br></br> <br></br>
        
            <div className="form-group" > 
            

                <h3>Welcome!</h3>
                <br></br>
                <h6>Enter zipcode to check the weather and to find the events happening around you</h6>
                <br></br><br></br> 
                <form onSubmit={this.onSubmit} class="form-inline">

                <div className="form-group" id="in">
                <label className="tex"> <b>ZipCode :&nbsp; &nbsp;</b> </label>
                    <input
                    type="text"
                    className="form-control"
                    placeholder="Enter Zipcode "
                    value={this.state.zipcode}
                    onKeyUp={this.onEnterPress.bind(this)}
                    onChange={this.onChangeZipCode} required/>
                </div>
                   <div>
                 
                    <div className="form-group" id="bt">
                        <button
                        type="submit"
                        className="btn"><span>Send </span></button>

                    </div>

                    </div>
                   
                </form>
                
                {weatherb && weatherComponent} {eventb && eventsComponent}  
               
            </div> 
            <br>
            </br><br></br>
            <br></br>
            <div className="news">
            
               { !buttonp  && newsComponent}
            
            </div>
            <br>
          </br> <br></br> <br></br> <br></br> <br></br> <br></br> <br></br> <br></br> <br></br> <br>
          </br> <br>
          </br><br></br>
          <br></br>
          <br></br>
          <br></br>
            <Footer/>
            </MuiThemeProvider>
            
        ); 
    } 
} 

