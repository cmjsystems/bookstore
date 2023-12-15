import "./../App.css";
import { useNavigate } from 'react-router-dom';

function QuitPage() {

  const navigate = useNavigate();
  
  // Go back to the home page
  function handleHomePageClick() {
    navigate('/');
  }

  return (
    <div style={{ backgroundColor: '#e3f2fd', height: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
      <h1 style={{ color: '#007BFF', textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)' }}>Goodbye and see you soon!</h1>
      <button onClick={handleHomePageClick} style={{ margin: '20px', padding: '10px', backgroundColor: '#007BFF', color: 'white', border: '1px solid black' }}>Home Page</button>
    </div>
  );
}

export default QuitPage;