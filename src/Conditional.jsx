export default function App() {
  return (
    <div className="flex gap-4">
      <ProductCard name="Coke" price={20} />
      <ProductCard name="Pepsi" price={25} discount={0} />
    </div>
  );
}

function ProductCard({ name, price, discount }) {
  // Props: name, price, discount?

  return (
    <div className={`border p-4 ${discount ? 'bg-red-200' : 'bg-green-200'}`}>
      {/* {!discount && <p>Normal</p>}
      {discount && <p>Discount</p>} */}
      {/* ternary operator ? */}
      <p>{discount ? 'Discount' : 'Normal'}</p>
      {/* Product Name */}
      <h1>{name}</h1>
      {/* Product Price */}
      <h2>{price}</h2>
      {/* Price After Discount (show only if product has a dicount)*/}
      {/* truthy value */}
      {discount > 0 && <p>{price * (1 - discount)}</p>}
    </div>
  );
}
