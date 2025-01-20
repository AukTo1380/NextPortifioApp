import React from 'react'

function pageDetails({ params }: { params: { id: string } }) {
    const { id } = params
    return (
      
        <div className='text-3xl'>User Porfile { id}</div>
  )
}

export default pageDetails