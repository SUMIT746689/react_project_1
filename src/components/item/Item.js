import React, { useEffect, useState } from 'react'
import Albums from './Albums';
import EmptyItem from './EmptyItem';
import Loading from './Loading';

export default function Item() {
    const [loading,setloading] = useState(true);
    const [item,setitem] = useState([]);
    
    const items =()=>{
        fetch('https://jsonplaceholder.typicode.com/photos')
         .then(res=>res.json())
         .then(data=>{const values = data.filter((datas)=>datas.id<=10);
            setitem(values);
        });
     }
    useEffect(() =>{
        
        async function fetchdata (){
            await items();
            await setloading(false);
        }
        
        fetchdata();
     },[loading]);
    
    const removeItems = (id)=>{
        const hasItem = item.filter((x)=>x.id!==id);
        console.log(hasItem);
        setitem(hasItem);
    }
    if(item.length<=0 && loading===true){
        return <Loading/>
    }
    
    return ( 
        <div>
            <Albums albums={item} removeItems={removeItems}/>
            {item.length===0 ? <EmptyItem  setloading={setloading} />: ''}
        </div>
    )
}
