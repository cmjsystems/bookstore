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
    <div className = "div_general">

      <h1> Goodbye and see you soon! </h1>

      <button
        className   = "button_1" onClick = {handleHomePageClick}
        onMouseOver = {e => e.currentTarget.style.backgroundColor = '#0056b3'}
        onMouseOut  = {e => e.currentTarget.style.backgroundColor = '#007BFF'}
      > Home Page </button>

    </div>
    </>
  );
}

export default QuitPage;