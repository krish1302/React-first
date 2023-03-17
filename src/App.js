import logo from './logo.svg';
import './App.css';
import Fun1 from './Components/Fun1';
import Class1 from './Components/Class1';
import Fun2 from './Components/Fun2';
import Conditional from './Conditional';
import ListRender from './Components/ListRender';
import Child from './Components/Child';
import EventBind from './Components/EventBind';
import FormHandle from './Components/FormHandle';
import Login from './Components/Login';

function App() {

  let val

  function childListener(child_val){
    console.log(child_val)
    alert('form child:'+ child_val)
  }

  return (
    <div className="App">
      <Child listener={childListener}></Child>
      <Login></Login>
    </div>
  );
}

export default App;
