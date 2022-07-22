import { useNavigate } from 'react-router-dom' 

const Cliente = ({cliente, handleDelete}) => {

    const navigate = useNavigate()

    const {nombre, empresa, email, telefono, notas, id} = cliente

    return (
        <tr className=' border-b hover:bg-gray-100'>
            <td className='py-4 px-6'>{nombre}</td>
            <td className='py-4 px-6'>
                <p><span className='text-xs uppercase font-bold'>Email: </span>{email}</p>
                <p><span className='text-xs uppercase font-bold'>Tel: </span>{telefono}</p>
            </td>
            <td className='py-4 px-6'>{empresa}</td>
            <td className='py-4 px-6 '>
                <button
                    type='button'
                    className='m-2 inline-block hover:bg-yellow-500 text-yellow-700
                        font-semibold hover:text-white py-2 px-4 border border-yellow-500
                        hover:border-transparent rounded'
                    onClick={() => navigate(`/clientes/${id}`)}
                    >Ver</button>
                <button
                    type='button'
                    className='m-2 inline-block hover:bg-blue-500 text-blue-700
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
            </td>
        </tr>
    )
}

export default Cliente