import React, {useState} from 'react'

const Register = ({setRoute, setUser}) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');
    const handleRegister = (e) => {
        e.preventDefault();
        fetch('https://smart-brain-server-simon.herokuapp.com/register', {
            method: 'post',
            headers: {'Content-Type':'application/json'},
            body : JSON.stringify({
                email,
                password,
                name
            })
        })
        .then(response => {
            if(response.ok) {
                response.json()
                .then(data => {
                    if (data.id) {
                        setUser(data);
                        setRoute('home')
                    }
                })
            }
        })
        .catch(err => console.log(err));
    }
    return (
    <form onSubmit={handleRegister} className="br2 ba dark-gray b--black-10 mv6 w-100 w-50-m w-50-l mw5 center shadow-5">
        <main className="pa4 black-80">
            <div className="measure center">
                <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
                <legend className="f2 fw6 ph0 mh0">Register</legend>
                <div className="mt3">
                    <label className="db fw6 lh-copy f6" htmlFor="name">Name</label>
                    <input 
                        className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100 lh-solid" 
                        type="text" 
                        name="name"  
                        id="name"
                        onChange={(e) => setName(e.target.value)}/>
                </div>
                <div className="mt3">
                    <label className="db fw6 lh-copy f6" htmlFor="email-address">Email</label>
                    <input 
                        className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100 lh-solid" 
                        type="email"
                        name="email-address"  
                        id="email-address"
                        onChange={(e) => setEmail(e.target.value)}/>
                </div>
                <div className="mv3">
                    <label className="db fw6 lh-copy f6" htmlFor="password">Password</label>
                    <input 
                        className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100 lh-solid" 
                        type="password" 
                        name="password"  
                        id="password"
                        onChange={(e) => setPassword(e.target.value)}/>
                </div>
                </fieldset>
                <div className="">
                    <button type='submit' onClick={handleRegister} className="b ph3 pv2 ba b--black bg-transparent grow pointer f6 dib">Register</button>
                </div>
                <div className="lh-copy mt3">
                    <p onClick={() => setRoute('sign in')} className="f6 link dim black db pointer">Sign in</p>
                </div>
            </div>
        </main>
    </form>
  )
}

export default Register