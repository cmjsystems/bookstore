import { useNavigate } from 'react-router-dom';
import "./../App.css";

function HomePage() {

  const navigate = useNavigate();

  // Navigate to the setup page
  function handleSetupClick() {
    navigate('/setup');
  }

  return (
    <>
    <div className = "div_general">

      <h1> Welcome to the Group 9 Bookstore! </h1>

      <button
        className   = "button_1" onClick = {handleSetupClick}
        onMouseOver = {e => e.currentTarget.style.backgroundColor = '#0056b3'}
        onMouseOut  = {e => e.currentTarget.style.backgroundColor = '#007BFF'}
      > Setup </button>

    </div>
    </>
  );
}

export default HomePage;