import React, { useEffect, useState } from 'react'
import "./styles/user.css"
import axios from 'axios'
import { useStoreState } from 'easy-peasy';

function User() {

    const [customerData, setCustomerData] = useState([])

    // const addLogoutToastNo = useStoreActions( (actions) => actions.addLogoutToastNo )

    // const navigate = useNavigate()

    const userDetails = useStoreState((state) => state.userDetails)

    useEffect(()=>{
        axios.get("http://52.66.153.167:6001/api/customer", {
          headers: {
            'x-access-token': userDetails[0].payload.token
          }
        })
        .then((res)=>setCustomerData(res.data.results))
        .catch((err)=>console.log(err.message))
    },[])

    // const handleLogout = () => {
    //   userDetails.pop()
    //   addLogoutToastNo(1)
    //   navigate("/")
    // }

  return (
    <div>
      {/* <div className="userContainer">
        <div className="aboutUser">
          <h3>Role : {userDetails[0].payload.user_role}</h3>
          <h3>Department : {userDetails[0].payload.department}</h3>
          <div className="logoutBtnDiv">
            <button onClick={handleLogout}>Logout</button>
          </div>
        </div>
      </div> */}
      <div className='customerTable'>
        <table>
          <thead>
            <tr>
              <th>Id</th>
              <th>Customer name</th>
              <th>Customer number</th>
              <th>Created at</th>
              <th>Updated at</th>
            </tr>
          </thead>
          <tbody>
              { customerData.map( (item) => 
                <tr key={item._id}>
                  <td>{item._id}</td>
                  <td>{item.customer_name}</td>
                  <td>{item.customer_no}</td>
                  <td>{item.createdAt}</td>
                  <td>{item.updatedAt}</td>
                </tr>
               ) }
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default User