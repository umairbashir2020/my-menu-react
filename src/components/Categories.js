import React from 'react'

const Categories = ({ filterItem ,categories}) => {
  return (
    <div className='btn-container'>
    {
      categories.map((category,index)=>{
        return(
          <button 
          type='button'
          className='filter-btn'
          key={index}
          onClick={()=>filterItem(category)}
          >
            {category}
          </button>
        )


      })
    }
    </div>
    

  )
}

export default Categories

{/* <div className='btn-container'>
      <button className='filter-btn' onClick={() => filterItem('all')}>all</button>
      <button className='filter-btn' onClick={() => filterItem('breakfast')}>Breakfast</button>

    </div> */}