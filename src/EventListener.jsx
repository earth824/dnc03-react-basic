export default function App() {
  const handleClickSearch = () => {
    console.log('Search clicked');
  };
  // const onClickSearchHandler = () => {}

  return (
    <>
      <button
        className="px-3 py-1.5 bg-blue-400"
        onClick={() => {
          console.log('Clicked');
        }}
      >
        Click
      </button>
      <button className="px-3 py-1.5 bg-red-400" onClick={handleClickSearch}>
        Search
      </button>
      <br />
      <input
        type="text"
        className="px-3 py-1.5 border rounded-lg"
        onChange={(event) => {
          console.log(event.target.value);
        }}
      />
      <br />
      <form
        action=""
        onSubmit={(event) => {
          event.preventDefault();
          // fetch,axios
          console.log('Form submitted');
        }}
      >
        <input type="text" className="px-3 py-1.5 border rounded-lg" />
        <button type="submit" className="px-3 py-1.5 bg-green-400">
          Submit Form
        </button>
      </form>
    </>
  );
}

// const btn = document.querySelector('button')
// btn.addEventListener('click', function() {})
