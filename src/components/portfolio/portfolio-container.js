import React, { Component } from "react";

import PortfolioItem from "./portfolio-item";

export default class PortfolioContainer extends Component {
    constructor () {
        super();

        this.state = {
            pageTitle: "Welcome to my portfolio",
            data: [
                {title: "Amazon"}, 
                {title: "Homefix Custom Remodeling"},
                {title: "Chili's"}
            ]
        };
    }

    PortfolioItems() {
        return this.state.data.map(item => {
            return <PortfolioItem title={item.title} url={"google.com"} />;
        });
    }

    render() {
        return (
            <div>
                <h2>{this.state.pageTitle}</h2>

                {this.PortfolioItems()}
            </div>
        );
    }
}

//class component
