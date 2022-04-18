import React from 'react'

const input = ({input, setInput, setImage}) => {
  return (
    <div>
        <p className='f4'>This Magic Brain will detext faces in your picture. Give it a try.</p>
        <div className="input-wrapper br3 shadow-5">
            <input 
              className='fl w-70 h2' 
              type='text'
              value={input}  
              onChange={(e) => setInput(e.target.value)}
            />
            <button onClick={() => setImage(input)} className="submit-btn fl w-30 white bg-light-purple grow ba br2 b--white">Detect</button>
        </div>
    </div>
  )
}

export default input