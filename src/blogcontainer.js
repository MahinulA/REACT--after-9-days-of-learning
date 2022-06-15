import React from "react";

export class BlogContainer extends React.Component {
    render() {
        return (
            <div className="container blog-section">
                <h1 className="section-heading">Blog Section</h1>

                <div className="blog-flex-container">
                    <div className="blogFlex-item">
                        this section will contain the blog full description
                    </div>
                    <div className="blogFlex-item">
                        this section will contain the blog heading as listed
                    </div>
                </div>
            </div>
        );
    }
}