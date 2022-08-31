import { React, Component } from "react";
import './App.css';
import Home from './Pages/Home';
import Portfolio from "./Pages/Portfolio";
import Drums from "./Pages/Drums";
import Blog from "./Pages/Blog";
import Contact from "./Pages/Contact";
import Navbar from './Components/Navbar';
import Footer from './Components/Footer'
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


const theme = createTheme(
  {
    palette: {
      type: 'light',
      primary: {
        main: '#65946a',
        light: '#85aa89',
        dark: '#405e44',
      },
      secondary: {
        main: '#252629',
        light: '#4e4f50',
        dark: '#191a1c',
      },
      background: {
        default: '#e8f5e9',
      },
      info: {
        main: '#2196f3',
      },
      
    },
  }
);

class App extends Component {
  render() {
    return (
      <ThemeProvider className={theme.container} theme={theme}>
      <div className={theme.wrap}>
      <Router>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/portfolio" component={<Portfolio />} />
        <Route path="/drums" component={<Drums />} />
        <Route path="/blog" component={<Blog />} />
        <Route path="/contact" component={<Contact />} />
      </Routes>
    </Router>
    </div>
    <Footer/>
      </ThemeProvider>
    )
  }
}

export default App;
