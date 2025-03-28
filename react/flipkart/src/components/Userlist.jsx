import { useEffect, useState } from 'react'
import '../css/userlist.css'
import axios from 'axios'

const Userlist = () =>{
    const [usersData ,getusersData] = useState('')
    const userlistdata = ()=>{
        axios.get('https://api.uncodecart.com/users/userlist').then((response)=>{
            getusersData(response.data.message)
        })
        
    }
    useEffect(()=>{
        userlistdata()
    },[])
    const handleDelete = (id) => {
        console.log(id)
        axios.delete('https://api.uncodecart.com/users/deleteuser/'+id).then((response)=>{
            console.log(response.data.message)
            userlistdata()
        })
    }

    return(
    <>
        <table>
          <tr>
            <th>Users id</th>
            <th>First name</th>
            <th>Last name</th>
            <th>Mobile no</th>
            <th>Email</th>
            <th>Password</th>
            <th>Action</th>
          </tr>
         {usersData && usersData.map((users)=>(
             <tr>
                <td>{users.users_id}</td>
                <td>{users.firstname}</td>
                <td>{users.lastname}</td>
                <td>{users.email}</td>
                <td>{users.mobileno}</td>
                <td>{users.password}</td>
                <td>
                    <input type='button' value="Delete" onClick={()=>{handleDelete(users.users_id)}}/>
                    <input type='button' value="Edit"/>
                </td>
            </tr>
         ))}
       
       
        </table>

    </>
    )
}
export default Userlist