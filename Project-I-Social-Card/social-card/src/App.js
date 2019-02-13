import React from 'react';
import Moment from 'moment';
import './App.css';
import HeaderContainer from './components/HeaderComponents/HeaderContainer';
import CardContainer from './components/CardComponents/CardContainer';
import ImageThumbnail from './components/HeaderComponents/ImageThumbnail';

const App = () => {
  return (
    <div className="appContainer">
      <ImageThumbnail />
      <div>
        <HeaderContainer />
        <a href="https://www.reactjs.org"><CardContainer /></a>
      </div>
    </div>
  );
};

export default App;
