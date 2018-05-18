import React, { Component } from 'react';
import logo from './cnn.png';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
      <ul class="nav nav-tabs">
		<li role="presentation" class="active"><a href="#">Home</a></li>
		<li role="presentation"><a href="#">Saved Articles</a></li>
		<li role="presentation" class="navbar-right"><a href="#">Scrape Articles Here </a></li>
	  </ul>
        <header className="App-header">
          <h1 className="App-title">MongoScraper</h1>
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Edition</h1>
        </header>
        <p className="App-intro">
        </p>

		    <div class="thumbnail">
		      <div class="caption">
		        <h3>Apple to sell 1st gen iPhones again</h3>
		        <p>According to a survey done by the company, some customers are nostalgic of the features from 1st gen iPhones.</p>
		        <p><a href="#" class="btn btn-primary" role="button">Save Article</a></p>
		      </div>
		    </div>
		    <div class="thumbnail">
		      <div class="caption">
		        <h3>Mark Zuckerberg to appear before European Parliamennt</h3>
		        <p>Facebook CEO Mark Zuckerberg has agreed to come to the European Parliament, according to the parliament's top official.</p>
		        <p><a href="#" class="btn btn-primary" role="button">Save Article</a></p>
		      </div>
		    </div>
	  </div>

    );
  }
}

export default App;
