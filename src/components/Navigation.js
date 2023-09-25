import React from 'react'
import Getdata from './Getdata';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import Getcal from './About';
import ChooseUs from './ChooseUs';
import { Segment,Grid,Divider,Reveal,Image } from 'semantic-ui-react';
const Navigation = () => {
    const [uname,setUname]=useState('');
    const [pwd,setPwd]=useState('');
    const [error,setError]=useState('');
    const navigate=useNavigate();
    const submitHandler=(e)=>{
        e.preventDefault();
    if (uname=== `R`&& pwd=== `1`)
   {
    navigate ('/ChooseUs');
}
else
{
   setError('Invalid Credentials');
}}
  return (
    <div>
<form onSubmit ={submitHandler}>
    <input type="text"  value={uname} onChange={((e)=>setUname(e.target.value))}/>
    <input type="text"  value={pwd} onChange={((e)=>setPwd(e.target.value))}/>
    <input type="submit"  value="submit"/>

    </form>
   {error && <p id="error"> {error} </p>}
 
   <Segment>
   <Grid columns={2} relaxed='very'>
     <Grid.Column>
       <p>
      <b>What is an iPhone?</b><br/>


The iPhone is a smartphone made by Apple that combines a computer, iPod, digital camera and cellular phone into one device with a touchscreen interface. The iPhone runs the iOS operating system, and in 2021 when the iPhone 13 was introduced, it offered up to 1 TB of storage and a 12-megapixel camera.

The original iPhone was announced on Jan. 9, 2007, at the Macworld convention by Apple co-founder Steve Jobs. While it was not considered the first smartphone, the iPhone has helped drive the global shift to mobile computing among both consumers and businesses. Its primary rival has been Google Android-based devices from companies such as Samsung, also introduced in 2007.
       </p>
     </Grid.Column>
     <Grid.Column>
       <p>
      <b> What is an iPhone?</b>
<br/>

The iPhone is a smartphone made by Apple that combines a computer, iPod, digital camera and cellular phone into one device with a touchscreen interface. The iPhone runs the iOS operating system, and in 2021 when the iPhone 13 was introduced, it offered up to 1 TB of storage and a 12-megapixel camera.

The original iPhone was announced on Jan. 9, 2007, at the Macworld convention by Apple co-founder Steve Jobs. While it was not considered the first smartphone, the iPhone has helped drive the global shift to mobile computing among both consumers and businesses. Its primary rival has been Google Android-based devices from companies such as Samsung, also introduced in 2007. 
       </p>
     </Grid.Column>
   </Grid>

   <Divider vertical>And</Divider>
 </Segment>
 
 <Reveal animated='fade'>
    <Reveal.Content visible>
    <Image src='./Images/spi.jpg'/>
    </Reveal.Content>
    <Reveal.Content hidden>
      <Image src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAH0AAAB9CAMAAAC4XpwXAAAAmVBMVEXp6eD///8UoIUmuZrZ18rz1Vv19fAfpIowupwAnH+g0cXl5Nrc2s4Rtpak3M7M5uDm9PHy7OS528zC3tBds57p6ubz1FP000wAl3mBwbGQy733/Pvr5cjy12jx2oTy2HHt4bGb0sDS49dDvqK94Ng6qZGy29Lb7elvvKrv3prq59fu4Kft4rjx2Xns47/r5tBXwadxyLCDzLZq9r31AAAEgklEQVRoge3Z63KjIBQA4FyaWtJ2lVaN0Zi0aYzZNru9vP/DLQi5ISgih05n9vzYmVXgk9uBTAdDIa4HveNabFMZA/H/FuL27lv1q1sz3cK4U12XB9I1eSj9SmvuwXQtHk7XGXxAXYOH1Nt5UL117mH1Nh5Ybxl8aL2ZB9cbeXi9ae4d6A28C109+E50Je9GV/GOdMXc6+pRdPjHTJfzWno0WPxe5flquX/V8aW6dPB19GixjOMJiXiWvxnrMl5Dj/bMriL+Y6xL+HY92s8mZxHnrYOv0utz36pH7/HkIuJlG397pwqx9+19Xwr6ZLZo67z6u6476ovZRIylsS7+xGvTozex65NJ/upMX9XwPkPfdeRl+pNezrOg59+pS0f+ryneWa9tOLLj353pf+s7bmWMd57319rEz96Mp72zHj2Jnc+N7e56LdXOFuZdN9Cj1TnfY7sZ6YPo9/GAj3PdnmNbOr3c5DMS8Z+ngR6O11Mpb6IT/3Wx3y/eNW1ylL7cP8t4M32gfaFl8XE/lvLGeofABB9LeQc6/qQ44b9qPLyOvxhO+E+RB9fx8wGX8NA6np5wyjvV8eM5TvgPhzpeX+IiD6rXccK/uNLXN3Wd8LdOdJJf6zjl14elb0HHigNs8CHFz/n+OtnQDzIey3vOgvO9dZrKpPxnAz4eP2IreoXcP9b4r0ac1+ipr/ncivx5fm3ge+n4tKUu+XZ8XE1XHx0/3F82dnwxbcerA7+HLnTwxIvJXc330MV1dRh8vNayaY2NsV7fUZxf32jrv0x1WS5hvCy5W9XJzMpTOJl7fdxQv1jsAq9K7vb0pt3cATfTmzM4sN5lbC3rWHpfcaTjx04Ta1fXOT3AdNxyaIPq2Npi767jddNFDVgHwPV1/GBzsXfU9W4rQLrtxd5Nt5dcO+sQ601bJ9c0IFxDV98kHOiWM3s33Xpy7aR/jG8AY9ysT5EHGaNpiz6CDPRf/6//LD0hwVrhUW+elJA8tqKXQeBXBcI5i+JSSop062+mc6XfSw+Gw4AWQP6hfDb1jjVQcXiczRXNWNaJFPIqKMxOTzfAepbO59OS8gV7WdD6AXm6Ic92wHpAl16yI/1lS2FEv2RLl2ISBgX0yAcefZLMSSU69mhHx5vviETVgGV95PFKiHa9aKoMoY8y1uXiNAWOdVKpGvj2RGlbpyud7G6U8vl3qidbtuUS2ixb6aokbFenWb/q8haxrxhW31OkLKQr0F628TcbnzwYlhRlfaev5rylEFQ/hO8dmy3Yvs8yR3q2CXmCoVOwqyrzmyusHnioOsx5syFfAMdPgdYvXnnkXfltOqJ/deAb3q7usd2LaGYpFfqIDn0J0PckKNOCTHFRnaGJQkd0x/sooUesxVXHa/CLS5VEZDrbCNk2Tbc0CwSWsg1Kz25M7MIm1dnU8/Dl9wuDkUdF6lcfkJWHZSXVSaZh5YJSdd4YrXmEinC3C0/355CErFxSlfOs36iVx1a9XNPbn/tLClrfKK+jViJp/jvscATZeTQaNuuB4leIldgFgvYPuhKibhijOVIAAAAASUVORK5CYII=' size='small' />
    </Reveal.Content>
  </Reveal>
 
 
 
 </div>
   )
   
}
  

export default Navigation