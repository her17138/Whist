import React from "react";
import ReactDOM from "react-dom";
import Index from './public/Index.jsx'
import Board from './public/board/Board.jsx'

const App = () => {
 
  return (
    <div>Hello React,Webpack 4 & Babel 7!
        <Index />
        <Board />
    </div>
    
  )
  
};

ReactDOM.render(<App />, document.getElementById('root'));