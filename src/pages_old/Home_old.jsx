import "./../App.css";
import { useNavigate } from 'react-router-dom';

function HomePage() {

  const navigate = useNavigate();

  function handleSetupClick() {
    navigate('/setup');
  }

  return (
    <>
      {/* <h1>Welcome to the Bookstore!</h1>
      <button onClick={handleSetupClick}>Setup</button> */}
      <h1>Welcome to the Group 7 Bookstore!</h1>
      <br />
      <button onClick={handleSetupClick}>Setup</button>
    </>
  );
}

export default HomePage;