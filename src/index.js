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
      navBar: <NavBar buttonClick={this.AboutMeEvent} />,
      heroHeader: <HeroSection />,
      aboutMe: <AboutMe />,
      BlogContainer: <BlogContainer />
    };
    // this.aboutMeNav =this.aboutMeNav.bind(this);
  }


  AboutMeEvent = () =>{
    this.setState({aboutMe: <AboutMe />, heroHeader : ""});
  }


  render() {
    return (
      <div>
        {this.state.navBar}
        {this.state.heroHeader}
        {this.state.aboutMe}
        {this.state.BlogContainer}
      </div>
    );
  }
}

ReactDOM.render(<MyComponent />, document.getElementById('root'));
