import React, { Component } from "react";

// Data
import authors from "./data";

// Components
import Sidebar from "./Sidebar";
import AuthorList from "./AuthorList";
import AuthorDetail from "./AuthorDetail";

class App extends Component {
  state = {
    currentAuthor: null
  };

  selectAuthor = author => {
    this.setState({ currentAuthor: author });
  };

  currentAuthorToNull = () => {
    this.setState({ currentAuthor: null });
  };

  render() {
    if (this.state.currentAuthor == null) {
      return (
        <div id="app" className="container-fluid">
          <div className="row">
            <div className="col-2">
              <Sidebar currentAuthorToNull={this.currentAuthorToNull} />
            </div>
            <div className="content col-10">
              <AuthorList authors={authors} selectAuthor={this.selectAuthor} />
            </div>
          </div>
        </div>
      );
    } else {
      return (
        <div id="app" className="container-fluid">
          <div className="row">
            <div className="col-2">
              <Sidebar currentAuthorToNull={this.currentAuthorToNull} />
            </div>
            <div className="content col-10">
              <AuthorDetail author={this.state.currentAuthor} />
            </div>
          </div>
        </div>
      );
    }
  }
}

export default App;
