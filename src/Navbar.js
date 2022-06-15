import React from "react";



export class NavBar extends React.Component {
    render() {
        return (
            <div className="navigation-bar-container container">
                <div className="nav-item">
                    <button className="nullify-button navBar-logo navBar-button">React Experience</button>
                </div>
                <div className="nav-item">
                    <button className="nullify-button navbar-menu color-black navBar-button" onClick={this.props.buttonClick}>About Me</button>
                    <button className="nullify-button navbar-menu color-black navBar-button">Visit Blog</button>
                    <button className="nullify-button navbar-menu color-black navBar-button">Find me on Upwork</button>
                </div>
            </div>
        );
    }
}