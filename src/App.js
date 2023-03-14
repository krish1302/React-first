import logo from './logo.svg';
import './App.css';
import Fun1 from './Components/Fun1';
import Class1 from './Components/Class1';

function App() {
  return (
    <div className="App">
     <h1>Hello World</h1>
     <Fun1 name="bala" work="developer"></Fun1>
     <Fun1 name="krish" work="data engineer"></Fun1>
     <Class1 name="Hero" work="Honda"></Class1>
     <Class1></Class1>
     <Class1></Class1>
    </div>
  );
}

export default App;
