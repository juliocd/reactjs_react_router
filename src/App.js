import { Route } from 'react-router-dom';

import Wellcome from './pages/Wellcome';
import Products from './pages/Products';

function App() {
  return (
    <div>
      <Route path="/wellcome">
        <Wellcome />
      </Route>
      <Route path="/products">
        <Products />
      </Route>
    </div>
  );
}

export default App;
