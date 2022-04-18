import React, {useEffect, useState} from 'react';
import './App.css';
import Logo from './components/logo/Logo';
import Navigation from './components/navigation/Navigation';
import Rank from './components/rank/Rank';
import Input from './components/input/Input';
import Particles from "react-tsparticles";
import { options } from './assets/particleOptions';
import FaceRecognition from './components/faceRecognition/FaceRecognition';
import SignIn from './components/signOrLogin/SignIn';
import Register from './components/signOrLogin/Register';

function App() {
  const [input, setInput] = useState('');
  const [image, setImage] = useState('');
  const [borderBox, setBorderBox] = useState(null);
  const [route, setRoute] = useState('sign-in');
  const [user, setUser] = useState({});
  const signOut = () => {
    setRoute('sign-in');
    setUser({});
    setImage('');
    setInput('');
  }
  useEffect(() => {
    setBorderBox(null);
    if (image) {
        fetch('https://smart-brain-server-simon.herokuapp.com/imageUrl', {
        method: 'post',
        headers: {'Content-Type':'application/json'},
        body : JSON.stringify({
          image
        })
      })
      .then(response => response.json())
      .then((response) => {
        fetch('https://smart-brain-server-simon.herokuapp.com/image', {
            method: 'put',
            headers: {'Content-Type':'application/json'},
            body : JSON.stringify({
              id: user.id
            })
          })
          .then(response => response.json())
          .then(data => {
            setUser((user) => {
              return {
                ...user, entries:data
              }
            })
          })
          setBorderBox(response.rawData.outputs[0].data.regions[0].region_info.bounding_box);
      })
      .catch((err) => console.log(err))
    } 
  }, [image]);
  return (
    <div className="App">
      <Particles
        id="tsparticles"
        options={options}
      />
      {route === 'home'
        ?
        <>
          <Navigation 
            signOut={signOut} />
          <Logo />
          <Rank user={user}/>
          <Input 
              input={input} 
              setInput={setInput}
              setImage={setImage}
            />
          <FaceRecognition image={image} borderBox={borderBox}/>
        </>
        : (
          route === 'register'
            ? <Register setRoute={setRoute} setUser={setUser}/>
            : <SignIn setRoute={setRoute} setUser={setUser}/>
        )
      }
    </div>
  );
}

export default App;
