import React from 'react'
import Title from '../Utils/Title/Title'
import Item from '../Utils/Items/Items'
const Sales = ({endpoint: {title , items}}) => {
  return (
    <div className=''>
        <Title title={title}/>
        <div>
            {items?.map((items, i)=>
            <Item {...items} key={i}/>
            )}
        
        </div>

    </div>
  )
}

export default Sales