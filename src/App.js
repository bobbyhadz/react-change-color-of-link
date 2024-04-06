import './App.css';

import {BrowserRouter as Router, Link} from 'react-router-dom';

import './App.css';

export default function App() {
  return (
    <Router>
      <div>
        <Link to="/">Home</Link>

        <br />
        <br />

        <a href="google.com" target="_blank">
          Google.com
        </a>
      </div>
    </Router>
  );
}
