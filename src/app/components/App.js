import React, { Component } from "react";

import { InfiniteList } from "../../infinite-list";

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>React Virtualizer field test</h1>
        <section>
          <InfiniteList />
        </section>
      </div>
    );
  }
}

export default App;
