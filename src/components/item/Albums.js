import React, { useState } from 'react'


export default function Albums({albums,removeItems}) {

    const detail = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, Nonea! Maiores et perferendis eaque, exercitationem praesentium nihil.";
    const [show,setshow] = useState(false)

    const totalalbums = albums.map((everyAlbum)=>
    <div className="p-2 " key={everyAlbum.id}>  
        <div className="max-w-sm rounded overflow-hidden shadow-lg">
        <img className="w-full" src={everyAlbum.thumbnailUrl} alt="Mountain"/>
        <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">{everyAlbum.title}</div>
            <p className="text-gray-700 text-base">
                {show ? detail : `${detail.substring(0,100)}...`}
                <button className='text-pink-500 font-bold px-1' onClick={()=>setshow(!show)}>
                    {show ? 'Show Less' : 'Show More'}
                </button>
            </p>
        </div>
        <div className="flex ">
            <button onClick={()=>removeItems(everyAlbum.id)} className="bg-blue-500 hover:bg-blue-800 duration-500 text-yellow-50 p-2 rounded-md mx-auto">Remove Item</button>
        </div>
        <div className="px-6 pt-4 pb-2">
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#photography</span>
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#travel</span>
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#winter</span>
        </div>
        </div>
    </div>
    )
    return (
        <div className="duration-500 grid grid-col-none sm:grid-cols-2 lg:grid-cols-3 justify-items-center gap-4">
            {totalalbums}
        </div>
    )
}
