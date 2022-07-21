import React from 'react'

const Alerta = ( {children} ) => {
    return (
        <div className='text-red-500 text-xs italic'>
            {children}
        </div>
    )
}

export default Alerta