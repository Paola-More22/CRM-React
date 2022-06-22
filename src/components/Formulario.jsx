import React from 'react'
import { Formik, Form, Field } from 'formik'

const Formulario = () => {
    return (
        <div className=' mt-10 px-5 py-5 rounded-md border border-gray-400 md:w-3/3 mx-auto'>
            <h1 className='text-gray-900 font-bold text-xl text-center uppercase'>Agragar Cliente</h1>
            <Formik
                initialValues={{
                    nombre: '',
                    empresa: '',
                    email: '',
                    telefono: '',
                    notas: ''
                }} >
                {({ }) => ( 
                    <Form className='mt-5'>
                        <div className='mb-2'>
                            <label
                                htmlFor='nombre'
                                className='block text-gray-700 text-md font-bold mb-2'>Nombre: </label>
                            <Field
                                id='nombre'
                                type='text'
                                placeholder='Nombre del Cliente'
                                className='mt-2 block w-full p-2 bg-gray-100 text rounded-sm'
                                name='nombre' />
                        </div>
                        <div className='mb-2'>
                            <label
                                htmlFor='empresa'
                                className='block text-gray-700 text-md font-bold mb-2'>Empresa: </label>
                            <Field
                                id='empresa'
                                type='text'
                                placeholder='Empresa del Cliente'
                                className='mt-2 block w-full p-2 bg-gray-100 text rounded-sm'
                                name='empresa' />
                        </div>
                        <div className='mb-2'>
                            <label
                                htmlFor='email'
                                className='block text-gray-700 text-md font-bold mb-2'>E-mail: </label>
                            <Field
                                id='email'
                                type='email'
                                placeholder='E-mail del Cliente'
                                className='mt-2 block w-full p-2 bg-gray-100 text rounded-sm'
                                name='email' />
                        </div>
                        <div className='mb-2'>
                            <label
                                htmlFor='telefono'
                                className='block text-gray-700 text-md font-bold mb-2'>Teléfono: </label>
                            <Field
                                id='telefono'
                                type='tel'
                                placeholder='Teléfono del Cliente'
                                className='mt-2 block w-full p-2 bg-gray-100 text rounded-sm'
                                name='telefono' />
                        </div>
                        <div className='mb-2'>
                            <label
                                htmlFor='notas'
                                className='block text-gray-700 text-md font-bold mb-2'>Notas: </label>
                            <Field
                                as='textarea'
                                id='notas'
                                type='text'
                                placeholder='Observaciones'
                                className='mt-2 block w-full p-2 bg-gray-100 text rounded-sm h-40' 
                                name='notas' />
                        </div>
                        <div className=' bg-blue-600 rounded-md shadow-md mt-5'>
                            <button
                                type='submit'
                                value='Agregar Cliente'
                                className=' w-full bg-blue-800 p-3 hover:bg-blue-500 text-white uppercase font-bold text-lg rounded-md shadow-md'>
                                Agregar Cliente
                            </button>
                        </div>
                    </Form>
                )}
            </Formik>
        </div>
    )
}

export default Formulario