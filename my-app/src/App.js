import React from 'react';
import ReactDOM from 'react-dom';

function App() {
  

  return (
    <section>
      <Header shopname="Nature's Basket" />
      <Content fruitList={fruitObjList}/>
      <Footer year={new Date().getFullYear()} />
    </section>
  );
}

const fruitList = ["Apple", "Oranges", "Guava", "Watermelom"];

const fruitObjList = fruitList.map(
  (fruit, i) => ({
    id: i,
    title: fruit
  }
));

function Content(props) {
  return (
    <ul>
      {props.fruitList.map((fruit) => (
        <li key={fruit.id}>{fruit.title}</li>
      ))}
      </ul>
  )
}

function Header(props) {
  return <header>
    <h1>{props.shopname}</h1>
  </header>
}

function Footer(props) {
  return <footer>
    <h5>Copyright {props.year}</h5>
  </footer>
}


export default App;
