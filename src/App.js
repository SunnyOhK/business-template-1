import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/NavBar/Navbar';
import Footer from './components/Footer/Footer';
import Hero from './components/Hero/Hero';
import { PageProvider } from './providers/PageProvider';
import PageContainer from './pages';

// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,
//   Navigate,
// } from "react-router-dom";

function App() {

  return (
    <PageProvider>
      <Hero />
      <Header />
      <Navbar />
      <PageContainer />
      <Footer />
    </PageProvider>
  );
}

export default App;