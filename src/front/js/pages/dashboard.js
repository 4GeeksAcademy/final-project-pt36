import React, {useContext, useEffect} from "react";
import { Context } from "../store/appContext";

export const Dashboard = () => {
    const { store, actions } = useContext(Context);

    useEffect(()=>{
        actions.getUser();
    }, [])



    return <>{store.user}</>
}