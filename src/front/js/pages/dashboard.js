import React, {useContext, useEffect} from "react";
import { Context } from "../store/appContext";
import { adminDashboard } from "../component/adminDashboard"
import { userDashboard } from "../component/userDashboard"

export const Dashboard = () => {
    const { store, actions } = useContext(Context);

   

    useEffect(()=>{
        actions.getUser();

    }, [])
  
    return (
        <>
        {store.user !== null && store.user.rol === 1 && <adminDashboard user={store.user}/> }
        {store.user !== null && store.user.rol === 2 && <userDashboard user={store.user} /> }
        </>

        )
}