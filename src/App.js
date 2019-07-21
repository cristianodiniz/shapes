import React, { Component } from "react";

import Sidebar from "./views/sidebar";
import Shapes from "./views/shapes";
import { getShapes } from "./services/shapesService";

import "./App.scss";

class App extends Component {
  state = {
    shapes: []
  };

  async componentDidMount() {
    await this.updateShapes();
  }

  async updateShapes() {
    const shapes = await getShapes();
    this.setState({ ...this.state, shapes });
  }

  render() {
    const { shapes } = this.state;
    return (
      <div className="app-container">
        <header className="menu-container">
          <Sidebar shapes={shapes} />
        </header>
        <section className="board-container">
          <Shapes shapes={shapes} />
        </section>
      </div>
    );
  }
}

export default App;
