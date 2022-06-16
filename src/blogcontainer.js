import React from "react";
import { BlogDayOne } from "./blogContent/blogDayOne";
import { BlogDayTwo } from "./blogContent/blogDaytwo";
import { BlogDayThree } from "./blogContent/blogDaythree";
import { BlogDayFour } from "./blogContent/blogDayFour";
import { BlogDayFive } from "./blogContent/BlogDayFive";

export class BlogContainer extends React.Component {
    constructor(props){
        super(props);
        this.state= {
            blogContent : "Check out my Journey of Learning React library"
        };
    }


    // change blog content based on what button I clicked 
    blogDayOneFunc =() =>{
        setTimeout(() =>{
            this.setState({blogContent : <BlogDayOne />});
        },500);
    }

    blogDayTwoFunc =() =>{
        setTimeout(() =>{
            this.setState({blogContent : <BlogDayTwo />});
        },500);   
    }

    blogDayThreeFunc =() =>{
        setTimeout(() =>{
            this.setState({blogContent : <BlogDayThree />});
        },500);
    }

    blogDayFourFunc =() =>{
        setTimeout(() =>{
            this.setState({blogContent : <BlogDayFour />});
        },500);
    }

    blogDayFiveFunc =() =>{
        setTimeout(() =>{
            this.setState({blogContent : <BlogDayFive />});
        },500);
    }

    render() {
        return (
            <div className="container blog-section">
                <h1 className="section-heading blog-section-heading">Blog Section</h1>

                <div className="blog-flex-container">
                    <div className="blogFlex-item">
                        {this.state.blogContent}
                    </div>
                    <div className="blogFlex-item">
                        <ul>
                            <li><button className="nullify-button" onClick={this.blogDayOneFunc}>Getting started with React</button></li>
                            <li><button className="nullify-button" onClick={this.blogDayTwoFunc}>My React Experience in Day two</button></li>
                            <li><button className="nullify-button" onClick={this.blogDayThreeFunc}>Diving more Fundamentals in React in day three</button></li>
                            <li><button className="nullify-button" onClick={this.blogDayFourFunc}>React in Day Four</button></li>
                            <li><button className="nullify-button" onClick={this.blogDayFiveFunc}>Getting used to the state and props</button></li>
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
}