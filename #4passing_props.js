//Heading.js component

function Heading(props) {
    return (
        <h1>Hello, {props.firstName}</h1>
    )
}

export default Heading;


//the App.js component/parent

import Heading from "./Heading";

function App() {
    return (
        <div className="App">
            <Heading firstName="Any name other than Bob" />
            <Heading firstName="Jack" />
        </div>
    );
};

export default App;


//Index.js as the root

import ReactDOM from 'react-dom/client';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
