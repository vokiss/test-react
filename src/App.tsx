import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import ListPage from './pages/ListPage';
import SummaryPage from './pages/SummaryPage';
import { basenameUrl } from './const';

function App(): JSX.Element {
  return (
    <div className="App">
      <BrowserRouter basename={basenameUrl}>
        <Routes>
          <Route path={'/'} element={<SummaryPage />} />
          <Route path={'/navigator'} element={<ListPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
