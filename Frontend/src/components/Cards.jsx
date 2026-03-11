import React from 'react'

const Cards = ({ item }) => {
    return (
        <div className='mt-4 my-3 p-3'>
            <div className="card bg-base-100 w-92 shadow-xl hover:scale-105 duration-200 dark:border">
                <figure>
                    <img className='md:h-75 w-80 mt-4 object-cover rounded-xl'
                        src={item.image}
                        alt="Shoes" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">
                        {item.name}
                        <div className="badge badge-secondary">{item.category}</div>
                    </h2>
                    <p>{item.title}</p>
                    <div className="card-actions justify-between">
                        <div className="badge badge-outline">${item.price.toFixed(2)}</div>
                        <div className="badge badge-outline hover:bg-blue-500 hover:text-white duration-200 cursor-pointer px-2 py-1 rounded-full border-[2px]">Buy Now</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Cards