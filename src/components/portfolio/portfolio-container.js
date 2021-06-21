import React, {Component} from "react";

import PortfolioItem from "./portfolio-item"

export default class PortfolioContainer extends Component {
    constructor(){
        super();

        this.state = {
            pageTitle: "Welcome to my portfolio",
            data: [
                {title: "Quip"}, 
                {title: "Eventbrite"}, 
                {title: "Ministry Safe"},
                {title: "fortnite"}
            ]
        };

        this.handlePageTitleUpdate = this.handlePageTitleUpdate.bind(this);
    }

    portfolioItems() {


        return this.state.data.map(item => {
            return <PortfolioItem title={item.title} url={"google.com"} />;
            // return <h1>{item}</h1>
        })
    }

    handlePageTitleUpdate() {
        this.setState({
            pageTitle: "Something Else"
        })
    }

    render() {
        return (
            <div>
                <h2>{this.state.pageTitle}</h2>

                {this.portfolioItems()}

                <hr/>

                <button onClick={this.handlePageTitleUpdate}>Change Title</button>
            </div>
        );
    }
}