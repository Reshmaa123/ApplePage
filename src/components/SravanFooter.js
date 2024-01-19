import React from 'react'
const data =["https://tse1.mm.bing.net/th?id=OIP.hqgXmy-r13g-63xcvlz6AwHaE7&pid=Api&rs=1&c=1&qlt=95&w=176&h=117",
"https://tse1.mm.bing.net/th?id=OIP.YAXlTjvtEKchdMVc5laZhwHaE8&pid=Api&P=0&h=220",
"https://tse1.mm.bing.net/th?id=OIP.E4IJcali_762Oo_vNhhbFgHaEK&pid=Api&P=0&h=220",
"https://tse4.mm.bing.net/th?id=OIP.awCvJ1gReYh4tWseENeY8AHaE_&pid=Api&P=0&h=220",
"https://tse1.mm.bing.net/th?id=OIP.evUMYFwlMncUnlz-sqBP5wHaEo&pid=Api&P=0&h=220"]
const SravanFooter = () => {
    const [image,setImage]=useState(0);
const handleclick=()=>{
    setImage(image+1)
}
const next =()=>{
    setImage
}
    
  return (
    <div>
<div className='flex justify-center'>
    <button className='font' onClick={handleclick}>Previous</button>
<img src={data[image]} alt=""/>
    <button className='font' onClick={next}>Next</button>
</div>

    </div>
  )
}

export default SravanFooter