import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// import Navbar from './Navbar'
import ProductCreate from './ProductCreate'
// import Products from "./Products";
import { GlobalStyle } from "./GlobalStyle";
import { ThemeProvider } from "styled-components";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ErrorPage from "./ErrorPage";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import ProductsPage from "./ProductsPage";
import ProductUpdate from "./ProductUpdate";
import SingleProduct from "./SingleProduct";

export default function App() {
  const theme = {
    colors: {
      heading: "rgb(24 24 29)",
      text: "rgba(29 ,29, 29, .8)",
      white: "#fff",
      black: " #212529",
      helper: "#8490ff",

      bg: "#F6F8FA",
      footer_bg: "#0a1435",
      btn: "rgb(98 84 243)",
      border: "rgba(98, 84, 243, 0.5)",
      hr: "#ffffff",
      gradient:
        "linear-gradient(0deg, rgb(132 144 255) 0%, rgb(98 189 252) 100%)",
      shadow:
        "rgba(0, 0, 0, 0.02) 0px 1px 3px 0px,rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;",
      shadowSupport: " rgba(0, 0, 0, 0.16) 0px 1px 4px",
    },
    media: {
      mobile: "768px",
      tab: "998px",
    },
  };
  return (
    <ThemeProvider theme={theme}>
    <Router> 
    <GlobalStyle />
    <Header />
    
    <Routes>
      <Route path='/' exact element={<Home />} />
      <Route path='/about' element={<About />} />
       <Route path='/products' element={<ProductsPage />} /> 
      <Route path='/contact' element={<Contact />} />
      <Route exact path='/create' element={<ProductCreate />} />
      <Route exact path='/update/:id' element={<ProductUpdate />} />
      <Route path='/singleproduct/:id' element={<SingleProduct />} />
      <Route path="*" element={<ErrorPage />} />
  
  
    </Routes>
    <Footer />
  
    </Router>
  
    </ThemeProvider>
  );
}