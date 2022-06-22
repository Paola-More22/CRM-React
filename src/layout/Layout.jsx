import React from 'react'
import { Outlet, Link, useLocation } from 'react-router-dom'
import { FaUserAlt } from 'react-icons/fa'
import { AiOutlineUser, AiOutlineUserAdd } from 'react-icons/ai'

const Layout = () => {

    const location = useLocation()
    const urlActual = location.pathname

    return (
        <div  className='md:flex md:min-h-screen'>

            <div className='md:w-1/6 bg-gray-800 shadow-md' >
                <h2 className=' flex font-bold text-white bg-blue-500 text-xl p-3'>
                <FaUserAlt className='text-white m-1 mr-3' />
                    Clientes
                </h2>
                <ul className='divide-y divide-gray-700' >
                    <li className={`${urlActual === '/clientes' ? 'bg-gray-900' : 'bg-gray-800'} flex p-3 hover:bg-gray-900`}>
                    <AiOutlineUser className='text-gray-300 m-1 ' />
                        <Link
                            to="/clientes"
                            className='ml-3 text-gray-300 text-base hover:bg-gray-900'
                            //''
                        >Clientes</Link>
                    </li>
                    <li className={`${urlActual === '/clientes/nuevo' ? 'bg-gray-900' : 'bg-gray-800'} flex p-3 hover:bg-gray-900`}>
                        <AiOutlineUserAdd className='text-gray-300 m-1'/>
                        <Link
                            to="/clientes/nuevo"
                            className='ml-3 text-gray-300 text-base hover:bg-gray-900'
                        >Nuevo Cliente</Link>
                    </li>
                    <li></li>
                </ul>
            </div>

            <div className='md:w-10/12 p-10 bg-white m-2 shadow-md rounded-md md:h-screen overflow-scroll'>
                <Outlet />
            </div>

        </div>
    )
}

export default Layout