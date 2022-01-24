import React from 'react';
import {BiLoaderAlt} from 'react-icons/bi';

export default function Loading() {
    return (
        <button className="px-2 py-5 grid place-items-center h-screen m-auto" disabled>
            <span className=" animate-spin text-pink-500 text-8xl font-bold"><BiLoaderAlt /></span>
        </button>
    )
}
