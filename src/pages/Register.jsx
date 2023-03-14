import { useAuth } from '../context/Auth';
import { Icon } from "@iconify/react";
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
export function Register(){
    const navigate = useNavigate();
    const {register,user} = useAuth();
    useEffect(()=>{
        if (user) {
            navigate("/")
        }
    })
    
    async function handleClick(e){
        e.preventDefault()
        
        const {data} = await register();
    }
    
    


    return (
        <div className="container text-white text-center my-20 ">
            <h1 className="font-bold text-3xl my-6">Welcome to EmailBox</h1>
            <p>An easy to use and free tool to organize and keep emails</p>
            <img className="m-auto my-16" src='./register.png' alt="Main Image" />
            <button
            onClick={handleClick}
            className="text-[#3B41C5] bg-white rounded-lg flex items-start p-2 hover:scale-105 duration-150 m-auto px-6">
                <span className="my-auto mx-2"><Icon icon="logos:google-gmail" /></span>
                <p>Continue with Google</p>
            </button>
        </div>
    )
}