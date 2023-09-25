import React, { Component } from 'react'
import axios from "axios";
export default class Getdata extends Component {
constructor(props) {
  super(props)

  this.state = {
      posts:[],
  };
}

componentDidMount(){
    axios
    .get("http://localhost:4000/student/")
    .then((res)=>{
        const response = res.data; 
        this.setState({ posts: response }); 
           
        })
    
    .catch((err)=>{
    console.log(err);}
    )
    
 ;
}
  render() 
  {
return (
<div>
            <h1>HELLO</h1>
                <table><thead>
                    <tr><th>id</th>
                    <th>title</th>
                    <th>Body</th></tr>
                    </thead>
                   
                    <tbody>
                        </tbody>{
                        this.state.posts.map((data)=>{
return(
                    
                <tr key={data.id}>
                    <td >{data.id}</td>
                    <td>{data.title}</td>
                    <td>{data.body}</td>
                
                </tr>);  } )}   </table>   
                        
    
     </div>
     )
      }}