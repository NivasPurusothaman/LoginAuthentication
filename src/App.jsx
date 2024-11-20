import React from 'react'
import LoginForm from './LoginForm'
import 'primeicons/primeicons.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import "primereact/resources/themes/lara-light-cyan/theme.css";
import { createStore, StoreProvider, action } from 'easy-peasy'
import HomePage from './HomePage'


function App() {

  const store = createStore({
    userDetails: [],
    addUserDetails: action((state, payload) => {
      state.userDetails.push({payload})
    } ),
    logoutToastNo: 0,
    addLogoutToastNo: action((state, payload) => {
      state.logoutToastNo = payload
    } )
  })

  return (
    <StoreProvider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LoginForm />} />
          <Route path="/home" element={<HomePage />} />
        </Routes>
      </BrowserRouter>
    </StoreProvider>
  );
}

export default App
