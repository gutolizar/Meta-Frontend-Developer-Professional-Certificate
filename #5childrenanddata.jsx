import Child from "./Child"
import './App.css';

function App() {
    const date = new Date()

    return (
        <div>
            <Child message={date.toLocaleTimeString()} />
        </div>
    );
}

export default App;
_____________________________________________________________________--

function Child(props) {
    return (
        <h1>{props.message}</h1>
    )
}

export default Child
