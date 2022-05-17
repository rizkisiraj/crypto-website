import './styles/App.scss';
import TableContainer from './components/table-container/table-container.components';
import Navigation from './components/navigation/navigation.components';
import CoinDashboard from './routes/coin-dashboard/coinDashboard.component';
import { Route, Routes } from 'react-router-dom';

const App = () => {

  return (
    <Routes>
      <Route path='/' element={<Navigation />}>
        <Route index element={<TableContainer />} />
        <Route path=':coinId' element={<CoinDashboard />} />
      </Route>
    </Routes>
  );
}

export default App;
