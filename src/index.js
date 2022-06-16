import React from "react";
import ReactDOM from "react-dom";
import { NavBar } from "./Navbar";
import { HeroSection } from "./heroSection";
import { AboutMe } from "./aboutme";
import { BlogContainer } from "./blogcontainer";
import "./navBar.css"
import "./googlefonts.css";
import "./main.css";
import "./universal.css";

class MyComponent extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      navBar: <NavBar AboutMeNav={this.AboutMeEvent} HomePageClick={this.HomePageEvent} BlogPageClick = {this.BlogPageEvent}/>,
      heroHeader: <HeroSection />,
      aboutMe:"",
      blogContainer: ''
    };
    // this.AboutMeEvent =this.AboutMeEvent.bind(this);
  }


  AboutMeEvent = () =>{
    this.setState({aboutMe: <AboutMe />, heroHeader : ""});
  }
  HomePageEvent =()=>{
    this.setState({heroHeader: <HeroSection />, aboutMe: "", blogContainer: ""});
  }
  BlogPageEvent =()=>{
    this.setState({heroHeader: "", aboutMe: "", blogContainer: <BlogContainer />});
  }

  render() {
    return (
      <div>
        {this.state.navBar}
        {this.state.heroHeader}
        {this.state.aboutMe}
        {this.state.blogContainer}
      </div>
    );
  }
}

ReactDOM.render(<MyComponent />, document.getElementById('root'));
