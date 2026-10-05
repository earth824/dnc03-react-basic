// <></> => React Fragment

import SearchBox from './components/SearchBox';
import Card from './components/Card';
import Test from './components/Test';
import './index.css';

{
  /* <div>
  <h1></h1>
  <p></p>
</div> */
}

// App has children: SearchBox, Card, Card, Card
// each Card has props: title, bg
// App pass props to Card (Props passed from parent component to child component)
function App() {
  return (
    <>
      <SearchBox />
      <div style={{ display: 'flex' }}>
        {/* props ==> { title: 'Car', bg: 'yellow' }*/}
        <Card title="Car" bg="yellow" />
        {/* props ==> { title: 'Beauty', bg: 'green' }*/}
        <Card title="Beauty" bg="green" />
        <Card title="Mobile" bg="red" />
        <Card title="Mobile" />
      </div>
      <Test>Hello World</Test>
    </>
  );
}

export default App;
