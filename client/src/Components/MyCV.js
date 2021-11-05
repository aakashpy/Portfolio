import React,{ useState, useEffect} from 'react'
import axios from 'axios'


const MyCV = (props) => {
    //const names = ['Bruce', 'Clark', 'Diana']
    const [email,setemail]=useState([])
    useEffect(()=>{
        axios.get(`/api/email/`)
        .then(res => {
           setemail(res.data)
        }
        ) 
    },[]) 
    
    console.log(email)            
    return (
        <div className="text-white bg-gradient-to-r from-blue-900 via-black to-blue-900 h-screen">
        {props.navbar}
            My cv
            <div>
            {email.map(item => <h2> {item.email}</h2>)
            }</div>
        </div>
    )
}

export default MyCV
