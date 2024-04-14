import React from "react";

const SimpleExample = () => {
  const a = 2;
  const b = 4;
  return (
    <div>
      <header className="App-header">
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <ul>
          <li>Apple</li>
          <li>Banana</li>
          <li>Tomato</li>
        </ul>

        <h1 data-testid="mytestid">hello</h1>
        <span title="sum">{a + b}</span>
      </header>
    </div>
  );
};

export default SimpleExample;
