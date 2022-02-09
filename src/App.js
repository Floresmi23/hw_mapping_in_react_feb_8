import Box from "./components/characters";


function App() {

  const list = [
    {
      message:"Name: Cinder",
      nm: "Superpower: Fire",
      age: "Age 28",
      sm: "Special Moves:",
      sm2: "Trailblazer",
      sm3: "Inferno",
      sm4: "Fire Flash",
      num:" My Power is Fire!"
    },
    {
      message: "Name: Aganos",
      nm:"Superpower: Rock",
      age: "Age: I am too Old",
      sm: "Special Moves:",
      sm2: "Payload Assault",
      sm3: "Pulverize",
      sm4: "Ruin",
      num:" My Power is Rock!"
    },
    {
      message: "Name: Jago",
      nm:"Superpower: Tiger Spirit",
      age: "Age: 25",
      sm: "Special Moves:",
      sm2: "Edokuken",
      sm3: "Tiger Fury",
      sm4: "Wind Kick",
      num:" My Power is Tiger Spirit!"
    },
    {
      message: "Name: Aqua",
      nm:"Superpower: Water",
      age: "Age: 20",
      sm: "Special Moves:",
      sm2: "Water fall",
      sm3: "Water Jet",
      sm4: "Wet towel",
      num:" My Power is Water!"
    },
    {
      message: "Name: Greeny",
      nm:"Superpower: Earth",
      age: "Age: I am too Old",
      sm: "Special Moves:",
      sm2: "Grass Cut",
      sm3: "Plant Grow",
      sm4: "Grass Knot",
      num:" My Power is Earth!"
    },
    {
      message: "Name: Breather",
      nm:"Superpower: Wind/Air",
      age: "Age: 14",
      sm: "Special Moves:",
      sm2: "Fly",
      sm3: "Quick Attack",
      sm4: "Spiral Attack",
      num:" My Power is Wind/Air!"
    },

  ];


  let boxEles = list.map((obj, idx)=>
      <Box key={idx} mess={obj.message} nm={obj.nm} age={obj.age} sm={obj.sm} sm2={obj.sm2} sm3={obj.sm3} sm4={obj.sm4} number={obj.num}/>
  )



  return (
      <div className="App">
        <header className="App-header">
          {boxEles}
        </header>
      </div>
  );
}

export default App;
