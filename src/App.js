import './App.css';
import C001 from './components/C001';
import Member from './components/Member';
import Products from './components/Products';

function App() {
  return (
    // JSX
    <div className="App">
      
      <Products />

      <header className="App-header">

        

        {/* <Member mName='ali' mAge='22' mTitle='expert'/>
        <Member mName='tamer' mAge='17' mTitle='begginer'/>
        <Member mName='yaser' mAge='19' mTitle='senior'/> */}

        {/* <h3>Another h3 Tag Here .....</h3>        
        <C001 /> */}
        
      </header>
    </div>
  );
}

export default App;
