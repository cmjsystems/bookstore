import { useNavigate } from 'react-router-dom';
import "./../App.css";

function QuitPage() {

  const navigate = useNavigate();
  
  // Go back to the home page
  function handleHomePageClick() {
    navigate('/');
  }

  return (
    <>
      <h1>Goodbye and see you soon!</h1>
      <p><button onClick={handleHomePageClick}>Home Page</button></p>
    </>
  );
}

export default QuitPage;