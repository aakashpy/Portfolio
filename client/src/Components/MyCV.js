import React,{ useState, useEffect} from 'react'
import axios from 'axios'


const MyCV = (props) => {
    //const names = ['Bruce', 'Clark', 'Diana']
    // const [email,setemail]=useState([])
    // useEffect(()=>{
    //     axios.get(`/api/email/getemails`)
    //     .then(res => {
    //        setemail(res.data)
    //     })
    //     .catch(err=>{
    //         console.log(err)
    //     }) 
    // },[]) 
    const email=[
        {
            _id:121,
            email:"asd"
        },
    ]
    console.log(email)           
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
