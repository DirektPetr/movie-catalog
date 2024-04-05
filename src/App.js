import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Main from '../src/components/Main/Main';
import About from './components/About/About';
import Contacts from './components/Contacts/Contacts';
import NotFound from './components/NotFound/NotFound';
import MainLayout from './MainLayout/MainLayout';
import './App.css';

function App() {
  return (
    <div className="wrapper">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route index element={<Main />} />
            <Route path="about" element={<About />} />
            <Route path="contacts" element={<Contacts />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
