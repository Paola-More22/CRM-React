import React from 'react'
import Formulario from '../components/Formulario'

const NuevoCliente = () => {
    return (
        <>
            <h1 className='font-bold text-3xl text-gray-900'>Nuevo Cliente</h1>
            <p className='mt-3'>Llena los Siguientes campos para registrar un cliente</p>

            <Formulario />
        </>
    )
}

export default NuevoCliente