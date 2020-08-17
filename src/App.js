import React from 'react';
import './App.sass';
import { Header } from './components/header';
import Logo from './img/Logo.png'
// SERGEY BRANCH
export const App = () => {
  return (
    <>
      <div className="main-app-content">
        <Header logo={Logo} />
      </div>
    </>
  )
}