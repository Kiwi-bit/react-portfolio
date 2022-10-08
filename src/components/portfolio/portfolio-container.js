import React, { Component } from "react";
import axios from "axios";

import PortfolioItem from "./portfolio-item";

export default class PortfolioContainer extends Component {
    constructor () {
        super();

        this.state = {
            pageTitle: "Welcome to my portfolio",
            isLoading: false,
            data: []
        };

        this.handleFilter = this.handleFilter.bind(this);
    }

    handleFilter(filter) {
        this.setState({
            data: this.state.data.filter(item => {
                return item.category === filter;
            })
        })
    }

    getPortfolioItems() {
        axios.get("https://kiarawilliams.devcamp.space/portfolio/portfolio_items")
      .then(res => {
        // handle success
        console.log("response data", res);
        this.setState({
            data: res.data.portfolio_items
        })
      })
      .catch(error => {
        // handle error
        console.log(error);
      });
      }

    PortfolioItems() {
        return this.state.data.map(item => {
            return (
            <PortfolioItem 
            key={item.id} 
            item={item} />);
        });
    }

    componentDidMount() {
        this.getPortfolioItems();
    }

    render() {
        if (this.state.isLoading) {
            return <div>Loading...</div>;
        }


        return (
            <div className="portfolio-items-wrapper">
                <button className="btn" onClick={()  => this.handleFilter('eCommerce')}>eCommerce</button>
                <button className="btn" onClick={()  => this.handleFilter('Renovation')}>Renovation</button>
                <button className="btn" onClick={()  => this.handleFilter('Restaurant')}>Restaurant</button>
                
                {this.PortfolioItems()}
                
            </div>
        );
    }
}

//class component
