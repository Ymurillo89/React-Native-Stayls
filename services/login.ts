import { IGetUser } from "../models/interfaces";

export const getLogin= async(user:string,password:string)=>{
    
    let data//:IGetUser[]=[];

    const getHour = await fetch(`https://andresmu91.bsite.net/api/LoginCtrl/Login/${user}/${password}`, 
    {
        method: 'GET',              
    });
    
    data = await getHour.json();          
    
    
    return data;
}