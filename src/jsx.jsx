import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import App from './App.jsx';

const a = <h1>Sawasdee</h1>;

function test() {
  return <div>Welcome</div>;
}

// <h1>A</h1><div>B</div>
// const b =
// RULE 1. JSX must have only one root element
const c = (
  <div>
    <h1>A</h1>
    <div>B</div>
  </div>
);

function testA() {
  return (
    <div>
      <h1>A</h1>
      <div>B</div>
    </div>
  );
}

// RULE2. JSX must have close tag
// const d = <input></input>
const d = <input />;

// RULE 3. camelCase
// class: reserved word
const e = <div className="main" onClick={() => {}}></div>;
// addEventListener
const f = <label htmlFor="id"></label>;

// RULE 4. insert expression using {}
const random = Math.random() * 100;
const g = <p>{random}</p>;
const h = <h1>{(10 * 60) / 365}</h1>;
const i = <span>{Math.random() * 100}</span>;
// expression can display: string, number, array
// const j = <h1>{[1, 2, 3, 4, 5]}</h1>;
// expression not display: boolean, null, undefined
// const j = <h1>{null}</h1>;
// cause error: object
// const j = <h1>{{ id: 20 }}</h1>;

// background-color ==> backgroundColor
createRoot(document.getElementById('root')).render(
  <div style={{ backgroundColor: 'red', fontSize: '3rem' }}>TESSTSTS</div>
);
