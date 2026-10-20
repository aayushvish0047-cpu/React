import { useState } from 'react'
import './App.css'
import ControlledComponet from './components/ControlledComponet'
import UnControlledComponet from './components/UnControlledComponet';
import UnControlledComponetUseref from './components/UnControlledComponetUseref';

function App() {
 return(
  <>
  <ControlledComponet/>
  <UnControlledComponet/>
  <UnControlledComponetUseref/>
  </>
 )
}
export default App;
