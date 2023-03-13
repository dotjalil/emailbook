import React from "react";
import { Icon } from '@iconify/react';

export function Signup(){
    return (
        <button
            className="text-[#3B41C5] bg-white rounded-lg flex items-start p-2 hover:scale-105 duration-150 m-auto">
                <span><Icon icon="logos:google-gmail" /></span>
                <p>Continue with Google</p>
        </button>
    )
}