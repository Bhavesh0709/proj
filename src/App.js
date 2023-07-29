import React from 'react'
import Main from './Quiz/Main'
import '../src/App.css';
import Header from './Quiz/Header';
import { BrowserRouter as Router, Route,  } from 'react-router-dom';
import Options from './Quiz/Options';
function App() {
  return (
    <Router>
        <Header />
          <Route path='/' exact component={Main} />
          <Route path='/about' component={Options} />
    </Router>
  )
}

export default App