import React, { useState } from 'react'
import Navbar from './Navbar'
import "./styles/homepage.css"
import User from './User'
import { useStoreState } from 'easy-peasy';
import { useNavigate } from 'react-router-dom';
import { useStoreActions } from 'easy-peasy';
import Pages from './Pages'
import PrimeReactCrud from './PrimeReactCrud'
import DynamicTable from './DynamicTable'

function HomePage() {

    const [navState, setNavState] = useState(1)
    const [arrowNum, setArrowNum] = useState(1)

    const userDetails = useStoreState((state) => state.userDetails)

    const addLogoutToastNo = useStoreActions( (actions) => actions.addLogoutToastNo )

    const navigate = useNavigate()

    const handleLogout = () => {
      userDetails.pop()
      addLogoutToastNo(1)
      navigate("/")
    }

  return (
    <div className="homepage">
      <div className='mainHeader'>
        <div className="loginContentHeader">
          <h2>Amphenol</h2>
          <h6>Automotive</h6>
        </div>
        <div className='headerSecondSection'>
          <p>{userDetails[0].payload.user_role}</p>
          <p>{userDetails[0].payload.department}</p>
          <div className='logoutDiv'>
            <button onClick={handleLogout}><i className='pi pi-power-off'></i></button>
          </div>
        </div>
      </div>
      <div className="navAndContent">
        <div
          className="navbar"
          style={arrowNum === 1 ? { width: "15vw" } : { width: "6.3vw" }}
        >
          <Navbar
            navState={navState}
            setNavState={setNavState}
            arrowNum={arrowNum}
            setArrowNum={setArrowNum}
          />
        </div>
        <div>
          {(() => {
            if (navState === 1) {
              return <User />;
            } else if (navState === 2) {
              return <Pages />;
            } else if (navState === 3) {
              return <PrimeReactCrud />;
            } else if (navState === 4) {
              return <DynamicTable />;
            }
          })()}
        </div>
      </div>
    </div>
  );
}

export default HomePage