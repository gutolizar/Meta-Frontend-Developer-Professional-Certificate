//App.js

import logo from "./assets/logo.png"

function App() {
  return (
    <div className="App">
      <h1>Task: Add an image below</h1>
      <img src={logo} alt="Logo" />
    </div>
  );
}

export default App;

//index.js

import ReactDOM from 'react-dom/client';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
