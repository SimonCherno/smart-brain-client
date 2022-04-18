import React from 'react'

const Rank = ({user}) => {
  return (<div className='white'>
    <div className='f3'><span style={{textTransform:'capitalize'}}>{user ? user.name : null }</span>, your rank is...</div>
    <div className='f1'>{user ? user.entries : null}</div>
  </div>
  )
}

export default Rank