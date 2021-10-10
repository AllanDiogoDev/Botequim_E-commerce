import React from 'react';
import './App.css';
import Header from './components/header/header';
import Main from './components/main/main';
import Aside from './components/aside/aside';
import Footer from './components/footer/footer';

export default function App() {
  return (
    <>
      <Header/>
      <Main/>
      <Aside/>
      <Footer/>
    </>
  )
}
