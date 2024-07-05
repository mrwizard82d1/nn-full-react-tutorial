import './App.css';

function App() {
    const title = "Welcome to the New Blog";
    const likes = 50;
    // const person = { name: 'yoshi', age: 30 };O
    const link = 'https://www.google.com';

    return (
        <div className="App">
            <div className="content">
                <h1>{title}</h1>
                { /* Note the "unexpected" syntax necessary to embed a comment in the JSX code. */}
                { /* In addition, note that comments are **not** rendered to the page. */}
                { /* Even though `likes` is an integer type, it is "automagically" output as a string. */}
                <p>Liked {likes} times</p>
                { /*<p>{ person }</p>*/}

                <p>{ 10 }</p>
                <p>{ "Hello, Ninjas!" }</p>
                <p>{ [1, 2, 3, 4, 5] }</p>
                <p>{ Math.random() * 10 }</p>

                <a href={ link }>Google Site</a>
            </div>
        </div>
    );
}

export default App;
