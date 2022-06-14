
import './style/index.css';
import './style/header.css';
import './style/footer.css';

import Header from './components/Header';
import Footer from './components/Footer';

import Article from './views/Article';

import { Route, Routes } from 'react-router-dom'

function App() {

  return (
    <>
      <Header />
      <main>
      <Routes>
        <Route exact path="/" element={<Article />} />
      </Routes>
      </main>
      <Footer />
    </>
  );
}

export default App;
