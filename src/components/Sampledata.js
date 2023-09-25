import React from "react";
import useCustomFetchData from "Customfetchdata.js";
const Sampledata=()=>
{
    const data=useCustomFetchData('https://jsonplaceholder.typicode.com/posts')
    const todos=useCustomFetchData('https://jsonplaceholder.typicode.com/todos')
    return(
        <div>
       <div>
            <h1>HELLO</h1>
                <table><thead>
                    <tr><th>id</th>
                    <th>title</th>
                   </tr>
                    </thead>
                   
                    <tbody>
                        
                        {posts.map((data)=>(
             
                <tr key={data.id}>
                    <td >{data.id}</td>
                    <td>{data.title}</td>
                        }
                </tr>) )
                </tbody> 
                </table>   
                     </div>

}
export default Sampledata;
