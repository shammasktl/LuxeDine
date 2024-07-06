import React, { useState } from 'react'
import './ExploreMenu.css'
import { menu_list } from '../../assests/assets'

const ExploreMenu = ({category,setCategory }) => {

  return (
    <div className='explore-menu' id='explore-menu'>
      <h1>Check Out Our Menu</h1>
      <p className='explore-menu-text'>Enjoy our delicious salads, rolls, sandwiches, vegetarian dishes, desserts, pasta, noodles, and ice creams, crafted for an unforgettable experience.</p>
      <div className="explore-menu-list">
        {menu_list.map((item,index)=>{
          return(
            <div key={index} className="explore-menu-list-item" onClick={() => setCategory(prev=>prev===item.menu_name?'All':item.menu_name)}>
              <img className={category === item.menu_name?'active':''} src={item.menu_image} alt="" />
              <p>{item.menu_name}</p>
            </div>
          )
        })}
      </div>
      <hr />
    </div>
  )
}

export default ExploreMenu
