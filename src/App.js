import React, {useEffect, useState} from "react";
import Sitebar from "./home/NavBar";
import Auth from "./auth/Auth";

function App() {

  const [sessionToken, setSessionToken] = useState('');

  useEffect(() => {
    if (localStorage.getItem('token')){
      setSessionToken(localStorage.getItem('token'));
    }
  }, [])

  const updateToken = (newToken) => {
    localStorage.setItem('token, newToken');
    setSessionToken(newToken);
    console.log(sessionToken);
  }

  useEffect(() => {
    document.title = 'Workout Log Client';
  })

  return (
    <div>
      <Sitebar />
      <Auth updateToken={updateToken}/>
    </div>
  );
}

export default App;
