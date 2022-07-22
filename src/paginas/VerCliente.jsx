import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import Spinner from '../components/spinner'

const VerCliente = () => {

    const [cliente, setCliente] = useState({})
    const [cargando, setCargando] = useState(true)
    const navigate = useNavigate()

    const { id } = useParams()

    useEffect(() => {
        const obtenerClienteAPI = async () => {
            try {
                const url = `http://localhost:4000/clientes/${id}`
                const respuesta = await fetch(url)
                const resultado = await respuesta.json()
                setCliente(resultado)
            } catch (error) {
                console.log(error)
            }

            setTimeout(() => {
                setCargando(!cargando)
            }, 2000);

        }

        obtenerClienteAPI()
    }, [])

    return (
        cargando ? <Spinner /> : 
            Object.keys(cliente).length === 0 ? 
            <p>No hay resultados </p> : 
        (
            <div>
                <h1 className='font-bold text-3xl text-gray-900'>Ver Cliente: <span className='capitalize'>{cliente.nombre}</span> </h1>
                <p className='text-gray-900 text-sm mb-6'>Información del cliente</p>

                {cliente.nombre && (
                <p className='text-xl text-gray-600'>
                    <span className='text-gray-800 uppercase font-bold'>Cliente: </span>
                    <span className='capitalize'>{cliente.nombre}</span>
                </p>
                )}
                {cliente.empresa && (
                <p className='text-xl text-gray-600 mt-4'>
                    <span className='text-gray-800 uppercase font-bold'>Empresa: </span>
                    <span className='capitalize'>{cliente.empresa}</span>
                </p>
                )}
                {cliente.email && (
                <p className='text-xl text-gray-600 mt-4'>
                    <span className='text-gray-800 uppercase font-bold'>Email: </span>
                    <span className='normal-case'>{cliente.email}</span>
                </p>
                )}
                {cliente.telefono && (
                <p className='text-xl text-gray-600 mt-4'>
                    <span className='text-gray-800 uppercase font-bold'>Telefono: </span>
                    <span >{cliente.telefono}</span>
                </p>
                )}
                {cliente.notas && (
                    <p className='text-xl text-gray-600 mt-4'>
                        <span className='text-gray-800 uppercase font-bold'>Notas: </span>
                        <span className='normal-case'>{cliente.notas}</span>
                    </p>
                )}
                <button
                    type='button'
                    className=' ml-0 mt-5 m-2 inline-block hover:bg-blue-500 text-blue-700
                        font-semibold hover:text-white py-2 px-4 border border-blue-500
                        hover:border-transparent rounded'
                    onClick={() => navigate(`/clientes/editar/${id}`)}    
                    >Editar</button>
                <button
                    type='button' className='m-2 inline-block hover:bg-red-600
                        text-red-700 font-semibold hover:text-white py-2 px-4 border
                        border-red-600 hover:border-transparent rounded'
                    onClick={() => handleDelete(id)}
                    >Eliminar</button>
            </div>
        )
    )
}

export default VerCliente