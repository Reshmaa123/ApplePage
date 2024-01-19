import React from 'react'

const AdminHos = () => {
    const [uname,setUname]=useState('')
    const [upswd,setPswd]=useState('')
    const [error,setError]=useState('')
    const navigate=useNavigate();
    const submitHandler=(e)=>{
        e.preventDefault();
        if(uname==="Reshma" && upswd==="123456")
       {
            navigate('/Dashboard')
        }
        else{
            setError("Invalid credentials");
        }
    }
  return (
    <div>AdminHos</div>
  )
}

export default AdminHos