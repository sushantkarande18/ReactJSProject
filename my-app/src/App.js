import React, { useRef } from 'react';
import { useState } from 'react';
import './App.css'

function App() {
  const what = useState() ;  
  console.log(what);  

  return (
    <React.Fragment >
      <Header shopname="Nature's Basket" />
      <SorryMsg/>
      <Banner/>
      <LeftNav/>
      <ContentForm/>
      <Content fruitList={fruitObjList}/>
      <RighttNav/>
      <Footer year={new Date().getFullYear()} />
    </React.Fragment>
  );
}

const NATURE_BASKET_HEADING = "Nature's Basket" ;

const fruitList = ["Apple", "Oranges", "Guava", "Watermelom"];

const fruitObjList = fruitList.map(
  (fruit, i) => ({
    id: i,
    title: fruit
  }
));

function Banner() {
  return (
    <img 
        height={300}
        alt='Fruit basket logo'
        src='https://cdn.rosesonly.com.au/eyJidWNrZXQiOiJmbG93ZXJzYXUiLCJrZXkiOiJtZWRpYS9Sb3Nlc09ubHkvSW1hZ2VzL1Byb2R1Y3RzL0NsYXNzaWNGcnVpdEhhbXBlck5vTGlkLmpwZyIsImVkaXRzIjp7InJlc2l6ZSI6eyJ3aWR0aCI6ODUwLCJoZWlnaHQiOjg1MCwiZml0IjoiY29udGFpbiIsImJhY2tncm91bmQiOnsiciI6MTY3MTE2ODAsImciOjY1MjgwLCJiIjoyNTUsImFscGhhIjoxfX0sIndlYnAiOnt9fX0='
      />      
  )
}


function SorryMsg (){
  const sorryMsg = "Sorry website is still in progress !!" 
  useState("happy");
  console.log({useState})
  useState("eeee") ;
  console.log({useState})
  return <section>{sorryMsg}</section>

}


function ContentForm() {
  const txtTitle = useRef() ;
  const txtColor = useRef() ;

  const submit  = (e) => {
    e.preventDefault();
    const text = txtTitle.current.value
    const  color = txtColor.current.value

  console.log('${text}'+ ' selected');

  }
  return (
    <form onSubmit={submit}>
      <input type='text' ref={txtTitle}/>
      <input type='color' ref={txtColor}/>
      <input type='submit' value="Add"/>
    </form>    
  )
}

function Content(props) {

  const [emotion, setEmotion] = useState("") ;  
  return (
    <section>
    <ul>
      {props.fruitList.map((fruit) => (
        <li key={fruit.id}>
          <input type='checkbox' value={fruit.title} onChange={() => {
            console.log(fruit.title + ' selected')
            }
          }/>
          {fruit.title}
        </li>
      ))}
      </ul>        
      <button onClick={() => setEmotion("Happy")}>HAPPY</button>
      <button onClick={() => setEmotion("SAD")}>SAD</button> 
       {emotion}
    </section>

    
  )
}

function LeftNav(props) {
  return (
    <div className='App-link'>
      LEFT
      LINKS
    </div>
  )
}

function RighttNav(props) {
  return (
    <div >
      RIGHT 
      LINKS
    </div>
  )
}

function Header(props) {
  return <header>
    <h1>{NATURE_BASKET_HEADING}</h1>
  </header>
}

function Footer(props) {
  return <footer>
    <h5>Copyright {props.year}</h5>
  </footer>
}

export default App;
