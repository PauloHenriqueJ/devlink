import {Link,useNavigate} from 'react-router-dom'
import logoImg from '../../../public/Minha_logo.png'
import { Input,  } from '../../components/input'
import { FormEvent, useState } from 'react'

import {auth} from '../../services/firebaseConnection'
import {signInWithEmailAndPassword} from 'firebase/auth'


export function Login() {

    const [ email,setEmail] = useState("");
    const [ password,setPassord] = useState("");
    const navigate = useNavigate();

function handleSubmit(e:FormEvent){
    e.preventDefault();
    if(email === ''|| password === ''){
        alert("Preencha todos os campos!")
        return;
    }
    signInWithEmailAndPassword(auth, email, password)
    .then(()=>{
        console.log("LOCADO COM SUCESSO")
    navigate("/admin", {replace:true}) // manda o usuario para tela de login
        

    })
    .catch((error)=>{
        console.log("ERRO AO FAZER O LOGIN:")
        console.log(error);
    })

}

    return(
        <div  className=" flex w-full h-screen items-center justify-center flex-col">
            
            <Link to="/">
                <img  src={logoImg} alt="minha logo" />
                <h1 className='mt-11 text-white mb-7 font-bold text-3xl'>Dev
                 <span className='bg-gradient-to-r from-yellow-500 to-orange-400 bg-clip-text text-transparent'>Link</span>
                </h1>
            </Link>

            <form onSubmit={handleSubmit} className='w-full max-w-xl flex flex-col px-2'>
                <Input
                placeholder='Digite seu email...'
                type='email'
                value={email}
                onChange={(e) => setEmail (e.target.value)}
                />

<Input
                placeholder='*********'
                type='password'
                value={password}
                onChange={(e) => setPassord (e.target.value)}
                />

                <button
                type='submit'
                 className='h-9 bg-blue-600 rounded border-0 text-lg font-medium text-white'>
                    Acessar
                </button>
            </form>

       
          
                  </div>
    )
}