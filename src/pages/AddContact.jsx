import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import { useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

export const AddContact = () => {

  const {store, dispatch} =useGlobalReducer();
  const {state} =useLocation();
  const contact = state?.contact();
  const navigate = useNavigate ();
  const [form,setForm] = useState ({
    name:"",
    email:"",
    phone:"",
    address:"",
  });


    
    return (
        <div className="container mt-4">
            <h2>Editing this contact..</h2>
                <button>
                    Save Contact
                </button>
                <button>
                    Cancel
                </button>
        </div>
  ); 
};