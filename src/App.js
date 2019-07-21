import React, { Component } from "react";

import Sidebar from "./views/sidebar";
import Shapes from "./views/shapes";
import { getShapes } from "./services/shapesService";

import "./App.scss";

class App extends Component {
  state = {
    shapes: [],
    selected: null
  };

  async componentDidMount() {
    await this.updateShapes();
  }

  async updateShapes() {
    const shapes = await getShapes();
    this.setState({ ...this.state, shapes });
  }

  handlerOnClick = selected => () => this.setState({ ...this.state, selected });

  render() {
    const { shapes, selected } = this.state;
    return (
      <div className="app-container">
        <header className="menu-container">
          <Sidebar
            shapes={shapes}
            handlerOnClick={this.handlerOnClick}
            selected={selected}
          />
        </header>
        <section className="board-container">
          <Shapes
            shapes={shapes}
            handlerOnClick={this.handlerOnClick}
            selected={selected}
          />
        </section>
      </div>
    );
  }
}

export default App;
