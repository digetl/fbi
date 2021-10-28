import './App.css';

// const x = fetch('https://api.fbi.gov/wanted/v1/list')
// .then(r => r.json())
// .then(data => console.log(data))

// console.log("x", x);


async function fetchText() {
  let response = await fetch('https://api.fbi.gov/wanted/v1/list');
  let data = await response.json();
  console.log(data);
}

// fetchText();

console.log(fetchText());


function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <p>
          <p>{fetchText()} </p>
          {/* <p>{x}</p> */}
          Edit <code>src/App.js</code> and save to reload.
        </p>
        {/* <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}
      </header>
    </div>
  );
}

export default App;
