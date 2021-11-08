import './App.css';

// run "npm start" in terminal to see webpage

function App() {
  return (
    <div className="App">
      <h1 style={{color: "violet"}}><b>forumerrorly</b></h1>
      <p style = {{color: "pink"}}><i>Made by the best team in the world B)</i></p>

      {/* thread list below */}
      <ol>
        <li class="row">
          <a href="/item">
            <h3 class="title">First Thread</h3>
          </a>
        </li>
      </ol>
    </div>
  );
}

export default App;