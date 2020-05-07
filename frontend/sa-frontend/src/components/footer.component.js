import React, {Component} from 'react';
import './footer.css';


class Footer extends Component {
  render(){
    return(
      <div id="footerContainer">
        <div className="footerHeader">
          <h3 className="secheading">Contact Us</h3>
        </div>
        <div className="footerBody">
          <div className="content">
            <div className="contentRight">
              <h5>Address</h5>
              <p>12, Peterborugh, Centrum Plaza,</p>
              <p>Boston, MA, 02215</p>
              <h5>Sources:</h5>
              <p>News API</p>
            </div>
            <div className="contentLeft">
              <h5>Phone Number</h5>
              <a href="tel:123-456-7890">+1 123-456-7890</a>
              <h5>Email Id</h5>
              <a href="mailto:eventino.io@gmail.com">eventino.io@gmail.com</a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Footer;
