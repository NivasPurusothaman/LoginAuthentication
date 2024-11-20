import React, { useState } from 'react'
import "./styles/navbar.css"

function Navbar({navState, setNavState, arrowNum, setArrowNum}) {

  return (
    <div className='navParentDiv'>
      {/* <div className='arrow'> */}
        {
          arrowNum === 1 ?
          <i className='pi pi-angle-left arrow' style={{fontSize: "20px"}} onClick={()=>setArrowNum(2)}></i> :
          <i className='pi pi-angle-right arrow' style={{fontSize: "20px"}} onClick={()=>setArrowNum(1)}></i>
        }
      {/* </div> */}
      {/* <div className="navbarHeader">
        {
          arrowNum === 1 ?
          <h1><i className='pi pi-bars btnIcon'></i>Menu</h1> :
          <h1><i className='pi pi-bars btnIcon'></i></h1>
        }
      </div> */}
      <div className='btnDiv'>
        <div className={navState===1 ? "focussedBtn" : null}>
          {
            arrowNum === 1 ?
            <button onClick={()=>setNavState(1)}><i className='pi pi-users btnIcon'></i>User</button> :
            <button onClick={()=>setNavState(1)}><i className='pi pi-users btnIcon'></i></button>
          }
        </div>
      </div>
      <div className='btnDiv'>
        <div className={navState===2 ? "focussedBtn" : null}>
          {
            arrowNum === 1 ?
            <button onClick={()=>setNavState(2)}><i className='pi pi-database btnIcon'></i>Pages</button> :
            <button onClick={()=>setNavState(2)}><i className='pi pi-database btnIcon'></i></button>
          }
        </div>
      </div>
      <div className='btnDiv'>
        <div className={navState===3 ? "focussedBtn" : null}>
          {
            arrowNum === 1 ?
            <button onClick={()=>setNavState(3)}><i className='pi pi-gift btnIcon'></i>Third</button> :
            <button onClick={()=>setNavState(3)}><i className='pi pi-gift btnIcon'></i></button>
          }
        </div>
      </div>
      <div className='btnDiv'>
        <div className={navState===4 ? "focussedBtn" : null}>
          {
            arrowNum === 1 ?
            <button onClick={()=>setNavState(4)}><i className='pi pi-gift btnIcon'></i>Fourth</button> :
            <button onClick={()=>setNavState(4)}><i className='pi pi-gift btnIcon'></i></button>
          }
        </div>
      </div>
    </div>
  );
}

export default Navbar