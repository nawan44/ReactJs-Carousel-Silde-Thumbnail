// App.js
import React from 'react';
import Carousel from './Component/carousel';
import Content from './Component/content';

function App() {
  return (
    <div className="App">
      <h2>Responsive React Carousel Image Gallery with Thumbs</h2>
      <Carousel />
      <Content/>
    </div>
  );
}

export default App;