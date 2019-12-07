import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import IndexRoute from './router/index';
function App() {
  return (
    <BrowserRouter>
      <div>
        <IndexRoute />
      </div>
    </BrowserRouter>
  );
}

export default App;
