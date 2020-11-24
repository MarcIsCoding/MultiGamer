// Router
import {Route} from 'react-router-dom';

// components and pages
import Home from './pages/Home';
import Nav from './components/Nav';
import Footer from './components/Footer';

// Styles
import GlobalStyles from './components/GlobalStyles';

function App() {

  return (
    <div className="App">
      <GlobalStyles />
      <Nav />
      <Route path={['/game/:id', '/']}>
        <Home />
      </Route>
      <Footer />
    </div>
  );
}

export default App;
