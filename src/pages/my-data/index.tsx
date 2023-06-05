import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { toast } from "sonner";
import { dataUserState } from "state/atoms";

export function MyData() {
    

const data= useRecoilValue(dataUserState)
console.log(data)

const {email,userName,profilePhoto,id}=data
    
    function handleClick(){
        toast('Event has been created', {
            action: {
              label: 'close',
              onClick: () => console.log('Undo')
            },
          })
    }
    
    
    
        return (
            <div>
                <div>mis datos</div>
                <h1>{userName}</h1>
                <p>{id}</p>
                <p>{email}</p>
               <img src={profilePhoto} alt="" />
                <button onClick={handleClick}></button>
            </div>
            )
            
    
    }