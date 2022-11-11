import './App.css';
import { Provider } from 'react-redux'
import { BrowserRouter as Router } from "react-router-dom";
import { configStore } from './redux_store/Store'
import Main from './components/main';
function App() {
  return (
    <Provider store={configStore}>
      <div className="App">
        hello
        <Router>
          <Main />
        </Router>
      </div>
    </Provider>
  );
}
export default App;
