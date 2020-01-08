import React from 'react';

export default function ToogleBar({handleClick}) {
  
    return (
    <div onClick={handleClick} className="tooglebar" style={{backgroundColor: "black", color:"white"}}>
        Bottom bar 
    </div>
  );
}
