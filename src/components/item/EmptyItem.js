import React from 'react'

export default function EmptyItem({setloading}) {
    
    return (
        <div className="px-2 py-5 grid place-items-center h-screen m-auto">
            <div>
                <h5 className="text-pink-700 font-medium text-3xl mb-8">Empty Items ...</h5>               
                <button onClick={()=>setloading(true)}className="flex m-auto bg-pink-500 hover:bg-pink-800 duration-500 p-3 rounded-md text-xl text-white">Reload this page</button>
            </div>
            
        </div>
    )
}
