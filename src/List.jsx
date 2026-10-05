export default function App() {
  const products = ['Coke', 'Pepsi', 'Fanta', 'Sprite']; // map(transform), filter
  const obj = [
    { name: 'Coke', id: 1 },
    { name: 'Pepsi', id: 2 },
    { name: 'Fanta', id: 3 },
    { name: 'Sprite', id: 4 }
  ];

  return (
    <div>
      {obj.map((el) => (
        <Product name={el.name} key={el.id} />
      ))}

      {/* {[
        <Product name="Coke" key='a'/>,
        <Product name="Pepsi" key='b'/>,
        <Product name="Fanta" key='c'/>,
        <Product name="Sprite" key='d'/>
      ]} */}

      {/* <Product name="Coke" />
      <Product name="Pepsi" />
      <Product name="Fanta" />
      <Product name="Sprite" /> */}
    </div>
  );
}

function Product({ name }) {
  return <p>{name}</p>;
}

// [1, 2, 5, 7].map(function (el) {
//   // assume function name cb
//   return el * 2;
// });
// [1,2,5,7].map(el => el*2)
// // 4 Loop
// // #1: cb(1) ==> 2
// // #2: cb(2) ==> 4
// // #3: cb(5) ==> 10
// // #4: cb(7) ==> 14
// // Result: [2, 4, 10, 14]

// ['Coke', 'Pepsi', 'Fanta', 'Sprite'].map(function (el) {
//   return <Product name={el} />;
// });
// ['Coke', 'Pepsi', 'Fanta', 'Sprite'].map(el => <Product name={el}/>);
// // #1: cb('Coke') ==> <Product name={'Coke'} />
// // #2: cb('Pepsi') ==> <Product name={'Pepsi'} />
// // #3: cb('Fanta') ==> <Product name={'Fanta'} />
// // #4: cb('Sprite') ==> <Product name={'Sprite'} />
// // Result: [<Product name={'Coke'} />, <Product name={'Pepsi'} />, <Product name={'Fanta'} />, <Product name={'Sprite'} />]
