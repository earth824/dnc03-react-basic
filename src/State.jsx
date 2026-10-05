import React, { useState } from 'react';

export default function App() {
  const [counter, setCounter] = useState(0);
  return (
    <div className="flex flex-col items-center">
      <span>{counter}</span>
      <button
        onClick={() => {
          setCounter(counter + 1);
          setCounter(counter + 1);
          setCounter(counter + 1);
          setCounter(counter + 1);
          setCounter(counter + 1);
        }}
      >
        Up1
      </button>
      <button
        onClick={() => {
          setCounter((prev) => prev + 1);
          setCounter((prev) => prev + 1);
          setCounter((prev) => prev + 1);
          setCounter((prev) => prev + 1);
          setCounter((prev) => prev + 1);
        }}
      >
        Up2
      </button>
    </div>
  );
}

// export default function App() {
//   console.log('APP run');
//   // BATCH UPDATE
//   const [a, setA] = useState(1);
//   const [b, setB] = useState(2);
//   const [c, setC] = useState(3);

//   return (
//     <div
//       onClick={() => {
//         setA(a + 1);
//         setB(b + 1);
//         setC(c + 1);
//       }}
//     >
//       App
//     </div>
//   );
// }

// const rand = () => Math.floor(Math.random() * 1000000);

// const initial = Array.from({ length: 2 }).map(() => rand());

// // console.log(initial);

// export default function App() {
//   const [list, setList] = useState(initial);
//   return (
//     <div className="space-y-4">
//       <button
//         onClick={() => {
//           setList([...list, rand()]);
//         }}
//       >
//         Add more counter
//       </button>
//       {list.map((el) => (
//         <Counter key={el} />
//       ))}
//     </div>
//   );
// }

// function Counter() {
//   console.log('COUNTER run');
//   const [count, setCount] = useState(0);

//   return (
//     <div className="flex items-center gap-4">
//       <button className="px-3 py-1.5 bg-blue-400">-</button>
//       <span>{count}</span>
//       <button
//         className="px-3 py-1.5 bg-blue-400"
//         onClick={() => setCount(count + 1)}
//       >
//         +
//       </button>
//     </div>
//   );
// }

// export default function App() {
//   console.log('APP run');
//   const [isShow, setIsShow] = useState(true);
//   const [count, setCount] = useState(0);

//   return (
//     <div>
//       <button onClick={() => setIsShow(false)}>Hide</button>
//       <button onClick={() => setCount(count + 1)}>Increase</button>
//       {isShow && (
//         <p className="text-blue-500">
//           Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aspernatur
//           quibusdam error deserunt aliquid unde laboriosam modi! Illum neque,
//           dolor accusantium possimus aperiam est itaque! Esse nostrum labore
//           alias mollitia doloremque odio? Doloribus ullam tempore tenetur iusto,
//           reprehenderit laudantium magni id sapiente amet aliquid excepturi nisi
//           odio deserunt adipisci fugit, voluptatum praesentium eum
//           exercitationem
//         </p>
//       )}
//     </div>
//   );
// }

// export default function App() {
//   console.log('APP run');
//   // let currentValue = 0;
//   // STATE:
//   const [currentValue, setCurrentValue] = useState(0); // [state, update state function]
//   // React.useState();
//   return (
//     <div className="flex gap-4 items-center">
//       <button
//         className="px-3 py-1.5 bg-amber-600"
//         onClick={() => {
//           if (currentValue > 0) setCurrentValue(currentValue - 1);
//         }}
//       >
//         -
//       </button>
//       <span>{currentValue}</span>
//       <button
//         className="px-3 py-1.5 bg-amber-600"
//         onClick={() => {
//           setCurrentValue(currentValue + 1);
//           console.log('Click + ', currentValue);
//         }}
//       >
//         +
//       </button>
//     </div>
//   );
// }
