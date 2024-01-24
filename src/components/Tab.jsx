import React from 'react'
const tabs = 
[
    {
    id: 1,
    name: "Delivery",
    active_img: "https://b.zmtcdn.com/data/o2_assets/c0bb85d3a6347b2ec070a8db694588261616149578.png?output-format=webp",
     backdrop: "#FCEEC0",
      inactive_img: "https://b.zmtcdn.com/data/o2_assets/c0bb85d3a6347b2ec070a8db694588261616149578.png?output-format=webp",
    },
{
    id: 2,
     name: "Dinning out",
     active_img: "https://b.zmtcdn.com/data/o2_assets/78d25215ff4c1299578ed36eefd5f39d1616149985.png?output-format=webp",
     backdrop: "#E5F3F3",
     inactive_img: " https://b.zmtcdn.com/data/o2_assets/78d25215ff4c1299578ed36eefd5f39d1616149985.png?output-format=webp",

    },
{


    id: 3,
    name: "Nightlife",
    active_img: "https://b.zmtcdn.com/data/o2_assets/855687dc64a5e06d737dae45b7f6a13b1616149818.png",
    backdrop: "#EDF4FF",
    inactive_img: "https://b.zmtcdn.com/data/o2_assets/855687dc64a5e06d737dae45b7f6a13b1616149818.png",
 },
];
const Tab = ({activeTab,setActiveTab}) => {
    return (
        <div className='tab-options'>
            <div className='max-width options-wrapper'></div>
            {tabs.map((tab)=>{
                return(
                    // <div>{tab.name}</div>
                    <div onClick={()=> setActiveTab(tab.name)}
                    className={`tab-item absolute-center cur-po ${activeTab === tab.name && "active-tab"}`}>
                     <div className='tab-image-container absolute-center'
                        style={{backgroundColor:`${activeTab===tab.name?tab.backdrop:""}`}}>
                            <img className='tab-image' alt={tab.name} src={activeTab===tab.name? tab.active_img:tab.inactive_img}/>
                        </div>
                    </div>
                )
            })}
            
           
        </div>
    );
}

export default Tab