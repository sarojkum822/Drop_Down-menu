import React from 'react'

const data=[
    {
        image:"https://images.unsplash.com/photo-1621768216002-5ac171876625?q=80&w=2074&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        name:"Amazon Basics",
        desc:"This is the stock of apple ",
        inStock:true
    },
    {
        image:"https://images.unsplash.com/photo-1581993192008-63e896f4f744?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8c2Ftc3VuZ3xlbnwwfHwwfHx8MA%3D%3D",
        name:"Samsung Basics",
        desc:"This is the stock of Samsung ",
        inStock:false

    },
    {
        image:"https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8c2Ftc3VuZ3xlbnwwfHwwfHx8MA%3D%3D",
        name:"Motorola",
        desc:"This is the stock of Motorola ",
        inStock:true

    },
];




const Card = () => {
  return (
   <div className='w-full h-screen bg-red-200 flex justify-center  items-center gap-4 '>
    {data.map((items,index)=>(

       <div  className='w-52 h-[15vw] bg-zinc-900 h-[12vw] overflow-hidden rounded-md'>
        <div key={index} className='w-full h-32 bg-zinc-300'>
            <img src={items.image} alt='image' />

        </div>
       <div className='w-full px-3 py-4  text-white'>    
            <h2 className='font-semibold'>{items.name}</h2>
            <p className='text-xs mt-3'>{items.desc}</p>
                <button className={`bg-blue-500 pl-2 pr-2 items-start rounded-md w-[7vw] ${items.inStock?"bg-blue-500":"bg-red-500"}`}>{items.inStock?"In Stock":"Out of Stock"}</button>
        </div>
       </div>
    ))

    }
   </div>
  )
}

export default Card