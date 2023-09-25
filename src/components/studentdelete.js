import React,{Component} from "react";
import './delete.css';
import axios from "axios";
export default class Studentdelete extends Component

 {
constructor(props)
 {
  super(props);
this.state = {
   student:[], 
   id:'',
   name1:'',
   place:''
   editingId:null, 
  };
}
componentDidMount() 
{
    axios
    .get('http://localhost:4000/student')
    .then((res)=>
        {
            this.setState({
                student:res.data,
        });
     })
        .catch((error)=>{
            console.log('error',error);
        });
    }
      
      deleteData=(userID)=>
      {
        axios
        .delete(`http://localhost:4000/student/${userID}`)
        .then((res)=>{
            alert("data deleted");
        })
        
            .catch((error)=>
            {
                alert("error");

            });
            
        };
editData=(userID)=>{
    axios
    .get(`http://localhost:4000/student/${userID}`)
    .then((res)=>{
        const{id,name1,place}=res.data;
        this.setState({
            id:id,
            name1:name1,
            place:place,
        });
})
    .catch((error)=>
    {
        console.log("error");
    })
}
changeHandler=(e)=>
this.setState({
    [e.target.name]:e.target.value,
  

});
submitHandler=(e)=>{
e.preventDefault();
const{id,name1,place}=this.state;
axios
.put(`http://localhost:4000/student/${id}`, {id,name1,place})
.then((res)=>
{
    alert("data modified");
    this.setState({
        id:"",
        name1:"",
        place:"",
    })
})
.catch((error)=>{
alert("error");})

}       

render()
{
    const{student,id,name1,place}=this.state;
return(
    <div>
        <form onSubmit={this.submitHandler}>
            <input type="text" placeHolder="id" value={this.state.id} onChange={this.changeHandler}/>
            <input type="text" placeHolder="name" value={this.state.name1} onChange={this.changeHandler}/>
            <input type="text" placeHolder="place" value={this.state.place} onChange={this.changeHandler}/>
            <input type="submit"/>

        </form>
<table>
        <thead>
            <tr>
                <th>id</th>
                <th>name1</th>
                <th>place</th>
                <th></th>
            </tr>
        </thead>
        <tbody>
            {
            this.state.student.map((stud)=>(
            
        <tr key={stud.id}>
            <td>{stud.id}</td>
            <td>{stud.name1}</td>
            <td>{stud.place}</td>
            <td><button className="btn" onClick={()=>this.deleteData(stud.id)}
            >DELETE</button></td>
             <td>
               
            <button className="btn" onClick={()=>this.editData(stud.id)}>edit</button>
            </td>
           
    
            </tr>))}

              
        </tbody>
    </table>
</div>
);}
            }