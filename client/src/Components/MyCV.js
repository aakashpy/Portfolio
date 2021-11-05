import React,{ useState, useEffect} from 'react'
import axios from 'axios'


const MyCV = (props) => {
    //const names = ['Bruce', 'Clark', 'Diana']
    
    const [email,setemail]=useState([])
    useEffect(()=>{
        axios.get(`/api/email/getemails`)
        .then(res => {return (res.data)})
        .then((data)=>{
            if(!data.error){
                console.log("yaaay no error")
                setemail(data)
                return data
                
            }else{
                console.log("error") 
            }
        })
        .then(()=>console.log(email))
        .catch(err=>{
            console.log(err)
            console.log("bruh")
        }) 
    },[])
    //setting_email=email 
    // const email=[
    //     {
    //         _id:121,
    //         email:"asd"
    //     },
    // ]
               
    return (
        <div className="text-white bg-gradient-to-r from-blue-900 via-black to-blue-900 h-screen">
        {props.navbar}
            MyCV
            <div>
                {email.map((item) => <li key={item._id}>{item.email}</li>)}
            </div>
        </div>
    )
}

export default MyCV
