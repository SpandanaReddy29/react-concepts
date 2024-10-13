import './App.css';
import DataFetching from './components/hooks/useEffect/dataFetch/DataFetching';
import DataFetchingUsingId from './components/hooks/useEffect/dataFetch/DataFetchingUsingId';
import DataFetchingUsingIdButton from './components/hooks/useEffect/dataFetch/DataFetchingUsingIdButton';
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
import UseReducerSimpleState from './components/hooks/useReducer/UseReducerSimpleState';
import UseReducerComplexState from './components/hooks/useReducer/UseReducerComplexState';
import MultipleUseReducer from './components/hooks/useReducer/MultipleUseReducer';
import UseReducerUseContext from './components/hooks/useReducer/UseReducerUseContext';
import DataFetchOne from './components/hooks/useReducer/DataFetching/DataFetchOne';
import DataFetchTwo from './components/hooks/useReducer/DataFetching/DataFetchTwo';
import ParentComponent from './components/hooks/useCallback/ParentComponent';
import Counter from './components/hooks/useMemo/Counter';
import FocusInput from './components/hooks/useRef/FocusInput';
import Timer from './components/hooks/useRef/Timer';
import DocTitle from './components/hooks/customHooks/DocTitle';
import CounterOne from './components/hooks/customHooks/CounterOne';
import UserForm from './components/hooks/customHooks/UserForm';
import OptionalChaining from './components/conditionalOperators/OptionalChaining';
import NullishCoalescing from './components/conditionalOperators/NullishCoalescing';

function App() {
  return (
    <div className="App">
      <OptionalChaining />
      <NullishCoalescing />
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
      {/* <UseContextHook /> */}
      {/* <UseReducerSimpleState />
      <UseReducerComplexState /> */}
      {/* <MultipleUseReducer /> */}
      {/* <UseReducerUseContext /> */}
      {/* <DataFetchOne /> */}
      {/* <DataFetchTwo /> */}
      {/* <ParentComponent /> */}
      {/* <Counter /> */}
      {/* <FocusInput /> */}
      {/* <Timer /> */}
      {/* <DocTitle /> */}
      {/* <CounterOne /> */}
      {/* <UserForm /> */}
    </div>
  );
}

export default App;
