import './App.css';
import Parent from './Parent';
import Sister from './Sister';
import FamilyMemberContext from './FamilyMemberContext'; 

function App() {

  return (
    <div className="App">
      <FamilyMemberContext.Provider value={{}}>
        <Parent>
          <Sister />
        </Parent>
      </FamilyMemberContext.Provider>
    </div>
  );
}

export default App;
