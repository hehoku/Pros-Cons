import React, { ChangeEvent, useState } from 'react';
import { FormElement, Input } from '@nextui-org/react';
import './App.css';

function App() {
  return (
    <div className="App">
      <p className="headtitle">Pros & Cons</p>
      <div className="container">
        <Plan />
      </div>
    </div>
  );
}

const Plan = () => {
  const [cons, setCons] = useState(['']);
  const [pros, setPros] = useState(['']);

  const addPros = () => {
    setPros([...pros, '']);
  };

  const addCons = () => {
    setCons([...cons, '']);
  };

  const handleInputChange = (e: ChangeEvent<FormElement>): void => {
    const newValue = e.currentTarget.value;
    console.log(newValue);
  };

  return (
    <div className="plan">
      <div className="flex-row">
        <div className="pros">
          {pros.map((item, index) => {
            return (
              <Input
                id={item}
                key={index}
                onChange={handleInputChange}
                css={{
                  $$inputColor: '#0072F5',
                  $$inputTextColor: '#fff',
                }}
              />
            );
          })}
          <button className="add-button" onClick={addPros}>
            Add
          </button>
        </div>
        <div className="cons">
          {cons.map((item, index) => {
            return (
              <Input
                id={item}
                key={index}
                css={{
                  $$inputColor: '#f5a524',
                  $$inputTextColor: '#fff',
                }}
              />
            );
          })}
          <button className="add-button" onClick={addCons}>
            Add
          </button>
        </div>
      </div>
    </div>
  );
};

export default App;
