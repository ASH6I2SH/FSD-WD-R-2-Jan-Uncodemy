import { useState } from 'react'
import '../css/registration.css'
const Registration = ()=>{
    const [firstname,setfirstname] = useState('')
    const [lastname,setlastname] = useState('')
    const handleFirstname = (event)=>{
        setfirstname(event.target.value)
    }
    const handleLastname = (event)=>{
        setlastname(event.target.value)
    }
    return(
        <>
        <div id="form-top-container">
            <div id="form-container">
                <div class="header-form">Registration Form </div>
                <form class="form">
                <div class="input-box">
                    <label for="firstname">First name </label>
                    <input type="text" placeholder="First name" value={firstname} onChange={handleFirstname}/>
                </div>
                <div class="input-box">
                    <label for="lastname">Last name </label>
                    <input type="text" placeholder="Last name" value={lastname} onChange={handleLastname}/>
                </div>
                <div class="input-box">
                    <label for="mobileno">Mobile no </label>
                    <input type="text" placeholder="Mobile no"/>
                </div>
                <div class="input-box">
                    <label for="email">Email </label>
                    <input type="text" placeholder="Email"/>
                </div>
                <div class="input-box">
                    <label for="password">Password</label>
                    <input type="text" placeholder="Password"/>
                </div>
                <div className="task">
                    <table>hello</table>
                    </div>
                <input type="submit" value="Registration"/>
                </form>
                </div>
            </div>

        </>
    )
}
export default Registration
