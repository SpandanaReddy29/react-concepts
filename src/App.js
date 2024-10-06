import './App.css';
import DataFetching from './components/dataFetch/DataFetching';
import DataFetchingUsingId from './components/dataFetch/DataFetchingUsingId';
import DataFetchingUsingIdButton from './components/dataFetch/DataFetchingUsingIdButton';
import FunctionalGreet from './components/FunctionalGreet';
import UseEffectHook from './components/hooks/useEffect/UseEffectHook';
import UseEffectCleanUp from './components/hooks/useEffect/UseEffectCleanUp';
import UseEffectConditionally from './components/hooks/useEffect/UseEffectConditionally';
import UseEffectOnlyOnce from './components/hooks/useEffect/UseEffectOnlyOnce';
import UseStateHook from './components/hooks/useState/UseStateHook';
import UseStateWithArray from './components/hooks/useState/UseStatewithArray';
import UseStateWithObjects from './components/hooks/useState/UseStateWithObjects';
import UseStateWithPrevState from './components/hooks/useState/UseStateWithPrevState';
import UseContextHook from './components/hooks/useContext/UseContextHook';


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
      {/* <UseEffectHook />
      <UseEffectConditionally /> */}
      {/* <UseEffectOnlyOnce /> */}
      {/* <UseEffectCleanUp /> */}.
      {/* <DataFetchingUsingId /> */}
      {/* <DataFetching /> */}
      {/* <DataFetchingUsingIdButton /> */}
      <UseContextHook />
    </div>
  );
}

export default App;
