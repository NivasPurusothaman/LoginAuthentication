import React, { useState, useEffect, useRef } from 'react'
import { DataTable } from 'primereact/datatable'
import { Column } from 'primereact/column'
import axios from 'axios'
import { Button } from 'primereact/button'
import { Dialog } from 'primereact/dialog'
import { InputText } from "primereact/inputtext"
import { useForm } from "react-hook-form"
import { Toast } from "primereact/toast"
import "primereact/resources/themes/lara-light-cyan/theme.css"
import 'primeicons/primeicons.css'
import '../node_modules/primeflex/primeflex.css'
import 'primeflex/themes/primeone-light.css'
// import { ConfirmPopup, confirmPopup } from 'primereact/confirmpopup'

function PrimeReactCrud() {

    const formToast = useRef(null)

    // const deleteToast = useRef(null)

    const [apiData, setApiData] = useState([])

    const [visible, setVisible] = useState(false)

    const [updateId, setUpdateId] = useState("")

    const { register, handleSubmit, setValue, reset, formState: { errors } } = useForm()

    // const accept = () => {
    //   deleteToast.current.show({ severity: 'info', summary: 'Confirmed', detail: 'You have accepted', life: 3000 })
    //   axios.delete(http://3.111.38.85:8000/api/contacts/${item._id})
    // }

    // const reject = () => {
    //   deleteToast.current.show({ severity: 'warn', summary: 'Rejected', detail: 'You have rejected', life: 3000 })
    // }

    // const confirm = (event) => {
    //   confirmPopup({
    //     target: event.currentTarget,
    //     message: 'Do you want to delete?',
    //     icon: 'pi pi-info-circle',
    //     defaultFocus: 'reject',
    //     acceptClassName: 'p-button-danger',
    //     accept,
    //     reject
    //   })
    // }

    const showAddSuccess = () => {
      formToast.current.show({severity:'success', summary: 'Success', detail:"Added Successfully", life: 3000})
    }

    const showUpdateSuccess = () => {
      formToast.current.show({severity:'success', summary: 'Success', detail:"Updated Successfully", life: 3000})
    }

    const showDeleteSuccess = () => {
      formToast.current.show({severity:'success', summary: 'Success', detail:"Deleted Successfully", life: 3000})
    }

    useEffect( () => {
        axios.get("http://3.111.38.85:8000/api/contacts")
            .then( (response) => {
                setApiData(response.data)
            } )
        }, [apiData] )

    const updateBtn = (item) => {
      return <Button onClick={() => {
        setUpdateId(item._id)
        setValue("name",item.name)
        setValue("email",item.email)
        setValue("message",item.message)
        setVisible(true)
      }}>
        <i className='pi pi-pen-to-square'></i>
      </Button>
    }

    const deleteBtn = (item) => {
      return <Button onClick={()=>{
        axios.delete(`http://3.111.38.85:8000/api/contacts/${item._id}`)
        showDeleteSuccess()
      }}>
        <i className='pi pi-trash'></i>
      </Button>
    }

    const headerElement = (
      <div className="inline-flex align-items-center justify-content-center gap-2">
          <span className="font-bold white-space-nowrap">
            {updateId=="" ? "Add" : "Update"}
          </span>
      </div>
    )

    const handleFormSubmit = (data) => {
      const payLoad = {
        name: data.name,
        email: data.email,
        message: data.message
      }
      if(updateId=="") {
        axios.post("http://3.111.38.85:8000/api/contacts", payLoad)
        .then(()=>{ reset(); setVisible(false); showAddSuccess() })
      }
      else {
        axios.put(`http://3.111.38.85:8000/api/contacts/${updateId}, payLoad`)
        .then(()=>{ reset(); setVisible(false); showUpdateSuccess() })
      }
    }

  return (
    <>
      <div className="flex justify-content-end">
        <Button onClick={() => {setUpdateId(""); setVisible(true)}}>
          <i className='pi pi-plus'></i>
        </Button>
      </div>
      <Toast ref={formToast} />
      {/* <Toast ref={deleteToast} />
      <ConfirmPopup /> */}
      <div className="card flex justify-content-center">
        <Dialog
          className="w-4"
          visible={visible}
          modal
          header={headerElement}
          style={{ width: "50rem" }}
          onHide={() => {
            if (!visible) return;
            setVisible(false);
          }}
        >
          <form onSubmit={handleSubmit((data)=>{
            handleFormSubmit(data)
          })}>
            <div className="flex flex-column gap-2">
              <label htmlFor="name">Name</label>
              <InputText {...register("name", { required: "Name is required" })} id="name" />
              {errors?.name && <p className='text-red-500 mt-0'>{errors.name.message}</p>}
            </div>
            <div className="flex flex-column gap-2 mt-3">
              <label htmlFor="email">Email</label>
              <InputText {...register("email", { required: "Email is required" })} id="email" />
              {errors?.email && <p className='text-red-500 mt-0'>{errors.email.message}</p>}
            </div>
            <div className="flex flex-column gap-2 mt-3">
              <label htmlFor="message">Message</label>
              <InputText {...register("message", { required: "Message is required" })} id="message" />
              {errors?.message && <p className='text-red-500 mt-0'>{errors.message.message}</p>}
            </div>
            <div className="flex justify-content-between mt-3">
              <Button type='submit' label={updateId=="" ? "Add" : "Update"} />
              <Button type='reset' label='Clear'/>
            </div>
          </form>
        </Dialog>
      </div>
      <div className="card">
        <DataTable value={apiData} tableStyle={{ minWidth: "50rem" }}>
          <Column field="name" header="Name"></Column>
          <Column field="email" header="Email"></Column>
          <Column field="message" header="Message"></Column>
          <Column header="Update" body={updateBtn}></Column>
          <Column header="Delete" body={deleteBtn}></Column>
        </DataTable>
      </div>
    </>
  );
}
        
export default PrimeReactCrud