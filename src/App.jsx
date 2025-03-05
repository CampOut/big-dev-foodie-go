import Layout from './Layout';
import { Route, Routes } from 'react-router-dom';

import Main from './pages/Main';

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path='/' element={<Main />} />
      </Route>
    </Routes>
  );
}

export default App;
