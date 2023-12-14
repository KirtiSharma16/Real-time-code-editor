import './App.css';

// to import router
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import {Toaster} from 'react-hot-toast';
import Home from './pages/Home';
import EditorPage from './pages/EditorPage';

function App() {
  return (
    <>
      {/* container for toaster generated */}
      <div>
        <Toaster position='top-right'toastOptions={
          {success: {
            theme: {
              primary: '#4aed88'
            },
          },
        }} ></Toaster>
      </div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>}></Route>
          {/* roomID is identifier and : used for variable part in the path */}
          <Route path="/editor/:roomId" element={<EditorPage/>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
