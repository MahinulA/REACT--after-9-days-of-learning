import React from "react";



export class NavBar extends React.Component {
    render() {
        return (
            <div className="navigation-bar-container container">
                <div className="nav-item">
                    <button className="nullify-button navBar-logo navBar-button" onClick={this.props.HomePageClick}>React Experience</button>
                </div>
                <div className="nav-item">
                    <button className="nullify-button navbar-menu color-black navBar-button" onClick={this.props.AboutMeNav}>About Me</button>
                    <button className="nullify-button navbar-menu color-black navBar-button" onClick={this.props.BlogPageClick}>Visit Blog</button>
                    <a className="nullify-button navbar-menu color-black navBar-button" href="upwork.com">Find me on Upwork</a>
                </div>
            </div>
        );
    }
}