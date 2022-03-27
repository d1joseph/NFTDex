import React, { Component } from "react";

import { Navbar } from "./components";
import { Header, TrendingRaffles, FeaturedCollections, FeaturedCreators, GettingStarted, Footer } from "./containers";
import "./App.css";

const App = () => {
  return (
    <div className="App">
      <div className="navbar">
        <Navbar/>
      </div>
      <div className="header">
        <Header />
      </div>
      <div className="trending-raffles">
        <TrendingRaffles />
      </div>
      <div className="featured-collections">
        <FeaturedCollections />
      </div>
      <div className="getting-started">
        <GettingStarted />
      </div>
      <div className="featured-creators">
        <FeaturedCreators />
      </div>
      <br/>
      <div className="footer">
        <Footer />
      </div>
    </div>
  )
}

export default App;
