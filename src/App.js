import React, { Component, Fragment } from "react";

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
        {shapes.length > 0 ? (
          <Fragment>
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
          </Fragment>
        ) : (
          <div className="loading-container">
            <h3>Loading...</h3>
          </div>
        )}
      </div>
    );
  }
}

export default App;
