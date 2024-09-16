import React from 'react'

function Square({value,onClick}) {
  return (
    <>
    <div className = 'square-container' style = {{border : "1px solid black", height: "200px", width: '100%', display:'flex',justifyContent:'center',alignItems:'center'}}
    onClick={onClick}
    >{value}</div>
    </>
    
  )
}

export default Square