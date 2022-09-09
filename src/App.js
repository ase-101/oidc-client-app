import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import LoginPage from './pages/Login';
import UserProfilePage from './pages/UserProfile';

function App() {
  return (

    <div style={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      height: '100vh',
      backgroundImage: `url("https://cdn5.vectorstock.com/i/1000x1000/77/84/clean-medical-and-healthcare-background-vector-15367784.jpg")`
    }} className="min-h-full h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<LoginPage />} />
            <Route path="/userprofile" element={<UserProfilePage />} />
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
