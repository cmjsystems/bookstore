import Header from "../components/Header";
import "./App.css";
import LoginPage from './pages/Login';

function Quit() {
  return (
    <>
      <BrowserRouter>
          <Routes>
            <Route path="/login" element={<LoginPage />} />
          </Routes>
      </BrowserRouter>
      
      <Header />
      <h1>Quit Page</h1>
    </>
  );
}

export default Quit;