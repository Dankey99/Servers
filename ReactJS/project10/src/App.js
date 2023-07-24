import logo from './logo.svg';
import './App.css';

import Results from './Results';
function App() {
  return (
    <>
      <h1>
<center>
  Welcome to the ReactJS Training
</center>

      </h1>
      <br/>
      <Results name="Shafeeq" physics="60" chemistry="50" maths="55" Total="C" />
      <Results name="Dan" physics="88" chemistry="58" maths="65" Total="C"/>
    
    </>
  );
}

export default App;
