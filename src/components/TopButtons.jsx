import React from 'react'

const TopButtons = ({setQuery}) => {

    const cities =[
        {
            id: 1,
            name: 'Mumbai'
        },
        {
            id: 2,
            name: 'Paris'
        },
        {
            id: 3,
            name: 'Berlin'
        },
        {
            id: 4,
            name: 'Sydney'
        },
        {
            id: 5,
            name: 'Tokyo'
        }
    ]


  return (
    <div className='flex item-center justify-around my-6'>
        {
            cities.map(city => (
                <button key={city.id} className='text-lg font-medium hover:bg-gray-700/20 px-3 py-2 rounded-md transition ease-in' onClick={() => setQuery({ q: city.name })}>{city.name}</button>
            ))
        }
        <button className='text-lg font-medium hover:bg-gray-700/20 px-3 py-2 rounded-md transition ease-in'>London</button>
    </div>
  )
};

export default TopButtons;
