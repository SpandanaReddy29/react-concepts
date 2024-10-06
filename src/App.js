import './App.css';
import FunctionalGreet from './components/FunctionalGreet';
import UseEffect from './components/hooks/UseEffect';
import UseEffectConditionally from './components/hooks/useEffectConditionally';
import UseStateHook from './components/hooks/UseStateHook';
import UseStateWithArray from './components/hooks/UseStatewithArray';
import UseStateWithObjects from './components/hooks/UseStateWithObjects';
import UseStateWithPrevState from './components/hooks/UseStateWithPrevState';

function App() {
  return (
    <div className="App">
      {/* <FunctionalGreet name="Bommanas">Here is the list of Family Members</FunctionalGreet> */}
      {/* <FunctionalGreet name="Sravan"/>
      <FunctionalGreet name="Spandana"/>
      <FunctionalGreet name="Ushika"/> */}
      {/* <UseStateHook />
      <UseStateWithPrevState />
      <UseStateWithObjects />
      <UseStateWithArray /> */}
      <UseEffect />
      <UseEffectConditionally />
    </div>
  );
}

export default App;
