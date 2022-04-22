import './App.css';
import { DefaultTemplate } from 'layout';
import { CustomerOnboarding } from 'pages';

function App() {
  return (
    <div className="App">
       <DefaultTemplate>
         <CustomerOnboarding />
       </DefaultTemplate> 
    </div>
  );
}

export default App;
