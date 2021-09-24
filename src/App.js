import React from 'react';
import './App.css';
import PropsDataType from './R018_PropsDataType'

function App() {
  return (
    <div>
        <h1>Start React 200!</h1>
        <p>HTML 적용하기!</p>
        <PropsDataType
            String="react"
            Number={200}
            Boolean={1==1}
            Array={[0, 1, 8]}
            Object Json={{react:"리액트", twohundred:"200"}}
            Function={console.log("FunctionProps: function!")}
        />
    </div>
  );
}

export default App;
