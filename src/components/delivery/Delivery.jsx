import React from 'react'
// import Filters from '../common/filters/Filters';
// import "./Delivery.css"

const deliveryfilters=[
    {
        id: 1,
        icon:<i className=''></i>,
        title:'Filters'
    },
    {
        id: 2,
        icon:<i className=''></i>,
        title:'Rating: 4.0+'
    },
    {
        id: 3,
        icon:<i className=''></i>,
        title:'Pure Veg'
    },
    {
        id: 4,
        icon:<i className=''></i>,
        title:'Delivery Time'
    },
    {
        id: 5,
        icon:<i className=''></i>,
        title:'Great ofer'
    },
    {
        id: 6,
        icon:<i className=''></i>,
        title:'Filters'
    },
];
const Delivery = () => {
  return (
    <div>
    <div className='max-width'>
        <Filters filterlist={deliveryfilters}/>
    </div>
    </div>
  )
}

export default Delivery