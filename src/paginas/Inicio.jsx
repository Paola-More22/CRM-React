import { useState, useEffect } from 'react'
import Cliente from '../components/Cliente'

const Inicio = () => {

    const [clientes, setClientes] = useState([])

    useEffect(() => {
        const obtenerClientesAPI = async () => {

            try {
                const url = 'http://localhost:4000/clientes'
                const respuesta = await fetch(url)
                const resultado = await respuesta.json()
                setClientes(resultado)
            } catch (error) {
                console.log(error)
            }
        }
        obtenerClientesAPI()
    }, [])

    return (
        <>
            <h1 className='font-bold text-3xl text-gray-900'>Clientes</h1>
            <p className='mt-3'>Administra tus clientes</p>

            <table className='w-full text-sm text-left text-gray-700'>
                <thead className='text-sm text-gray-700 uppercase bg-gray-50'>
                    <tr>
                        <th className='py-3 px-6'>Nombre</th>
                        <th className='py-3 px-6'>Contacto</th>
                        <th className='py-3 px-6'>Empresa</th>
                        <th className='py-3 px-6'>Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    {clientes.map(cliente => (
                        <Cliente
                            key={cliente.id}
                            cliente={cliente}
                        />
                    ))}
                </tbody>
            </table>

        </>
    )
}

export default Inicio