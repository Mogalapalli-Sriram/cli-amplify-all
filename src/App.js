
import './App.css';
import Amplify, { Auth } from 'aws-amplify';
import awsconfig from './aws-exports';
Amplify.configure(awsconfig);

function App() {
  return (
    <div className="App">
     <h1>Hello Amplify cli World</h1>
    </div>
  );
}

export default App;
