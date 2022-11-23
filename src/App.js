import { Provider } from 'react-redux'
import { BrowserRouter as Router } from "react-router-dom";
import { configStore } from './redux_store/Store'
import Main from './components/Main';
function App() {
  return (
    <Provider store={configStore}>
        <Router>
          <Main />
        </Router>
    </Provider>
  );
}
export default App;
