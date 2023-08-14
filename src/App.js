import Header from './components/Header/Header';
import { useRoutes } from "react-router-dom";
import routes from "./routes";

function App() {
  let router = useRoutes(routes);

  return (
    <div className="App">
      <Header />
      <div className='contentWrapper'>
        {router}
      </div>
    </div>
  );
}

export default App;