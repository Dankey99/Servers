import logo from './logo.svg';
import './App.css';
import SalarySlip from './SalarySlip';
function App() {
  return (
    <>
      <h1>
<center>
  Welcome to the ReactJS Training
</center>

      </h1>
      <br/>
      <SalarySlip name="Shafeeq" salary="28000"/>
      <SalarySlip name="James Bond" salary="23000"/>
    
    </>
  );
}

export default App;
