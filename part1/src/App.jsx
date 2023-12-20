import React from "react";

const Hello = (props) => {
  console.log(props);
  return (
    <div>
      <p>
        Hello {props.name}, you are {props.age} years old
      </p>
    </div>
  );
};

const App = () => {
  const name = "Eewen";
  const age = 20;
  return (
    <div>
      <h1>Greetings</h1>
      <Hello name="Kelvin" age={22 + 2} />
      <Hello name={name} age={age} />
    </div>
  );
};

export default App;
