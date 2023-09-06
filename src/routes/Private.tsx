import {ReactNode, useEffect, useState} from 'react';
import {auth} from '../services/firebaseConnection';
import { onAuthStateChanged } from "firebase/auth";
import { Navigate } from 'react-router-dom';

interface PrivateProps{
    children:ReactNode
}

export function Private({children}: PrivateProps){
    const [loading,setLoading] = useState(true);
    const [signed, setSigned] = useState(false);

    useEffect (() => { // quando for fazer login
        const onsub = onAuthStateChanged (auth, (user) => { // Verificar se tem usuario logado
            if(user){
               const userData = {
                uid:user?.uid,
                email:user?.email
               }
               localStorage.setItem("@reactlinks", JSON.stringify(userData))
               setLoading(false);
               setSigned(true);
        
            }else{
            setLoading(false);
            setSigned(false);
        }
        })

        return() =>{
            onsub();
        }

    }, [])

    if(loading){
        return <div>carregando</div>
    }

    if(!signed){
        return <Navigate to="/login"/>
    }
    return children;
}