import {useState, FormEvent, useEffect} from 'react'
import { Header } from "../../components/Header";
import { Input } from "../../components/input";

import {db} from '../../services/firebaseConnection'
import {
    setDoc, //cria um item que tem que a gente tem que  escolher o nome
    doc, // cria um item com id aleatorio
    getDoc, // buscar uma vez um unico documento
} from 'firebase/firestore'

export function Networks(){
const [facebook, setFacebook] = useState("")
const [youtube, setYoutube] = useState("")
const [instagram, setInstagram] = useState("")

useEffect( () => {
    function loadLinks(){
        const docRef = doc(db, "social", "link")
        getDoc(docRef)
        .then((snapshot) => {
            if(snapshot.data() !== undefined){
                setFacebook(snapshot.data()?.facebook)
                setInstagram (snapshot.data()?.instagram)
                setYoutube(snapshot.data()?.youtube)
            }
        })
    }
    loadLinks();
}, [])

function handleRegister (e:FormEvent){
    e.preventDefault();

    setDoc(doc(db, "social", "link"), {
        facebook:facebook,
        youtube:youtube,
        instagram:instagram
    })
    .then(()=>{
        console.log("CADASTRADO COM SUCESSO")
    })
    .catch((error)=> {
        console.log("erro ao Cadastrar" + error)

    })
}

    return(
        <div className="flex items-center flex-col min-h-screen pb-7 px-2">
            <Header/>

            <h1 className=" text-white text-2xl font-medium mt-8 mb-4">Minhas Redes sociais</h1>

            <form className="flex flex-col max-w-xl w-full" onSubmit={handleRegister}>
                <label className=" text-white font-medium mt-2 mb-2">Link do facebook</label>
                <Input
                type="url"
                placeholder="Digite a url do facebook..."
                value={facebook}
                onChange={(e) => setFacebook(e.target.value)}
                />

<label className=" text-white font-medium mt-2 mb-2">Link do youtube</label>
                <Input
                type="url"
                placeholder="Digite a url do youtube..."
                value={youtube}
                onChange={(e) => setYoutube(e.target.value)}
                />

<label className=" text-white font-medium mt-2 mb-2">Link do instagram</label>
                <Input
                type="url"
                placeholder="Digite a url do instagram..."
                value={instagram}
                onChange={(e) => setInstagram(e.target.value)}
                />

                <button
                type='submit'
                 className='text-white bg-blue-600 h-9 rounded-md items-center justify-center flex mb-7 font-medium'>
                    Salvar links</button>

            </form>
        </div>
    )
}