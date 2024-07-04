import './App.css';

function App() {
    const title = "Welcome to the New Blog";
    const likes = 50;


    return (
        <div className="App">
            <div className="content">
                <h1>{ title }</h1>
                { /* Note the "unexpected" syntax necessary to embed a comment in the JSX code. */}
                { /* In addition, note that comments are **not** rendered to the page. */}
                { /* Even though `likes` is an integer type, it is "automagically" output as a string. */ }
                <p>Liked { likes } times</p>
            </div>
        </div>
    );
}

export default App;
