import React from 'react'
import { Formik, Form, Field } from 'formik'
import { useNavigate } from 'react-router-dom'
import * as Yup from 'yup'
import Alerta from './Alerta'
import Spinner from '../components/spinner'

const Formulario = ({cliente, cargando}) => {

    const navigate = useNavigate()
    console.log(cliente)

    const nuevoClienteSchema = Yup.object().shape({
        nombre: Yup.string()
                    .min(3, 'El nombre es muy corto')
                    .max(20, 'El nombre es muy largo')
                    .required('El nombre del cliente es obligatorio'),
        empresa: Yup.string()
                    .required('El nombre de la empresa del cliente es obligatoria'),
        email: Yup.string()
                    .email('Email no válido')
                    .required('El email del cliente es obligatorio'),
        telefono: Yup.number().typeError('El número no es válido')
                    .positive('El número debe ser positivo')
                    .integer('Número no válido')

    })

    const handleSumit = async (values) => {
        try {
            let respuesta
            if(cliente.id){
                //Editando cliente
                const url = `http://localhost:4000/clientes/${cliente.id}`
                respuesta = await fetch(url, {
                    method: 'PUT',
                    body: JSON.stringify(values),
                    headers: {
                        'Content-Type': 'application/json'
                    }
                })

            } else {
                //Nuevo cliente
                const url = 'http://localhost:4000/clientes'
                respuesta = await fetch(url, {
                    method: 'POST',
                    body: JSON.stringify(values),
                    headers: {
                        'Content-Type': 'application/json'
                    }
                })

            }

            await respuesta.json()
            navigate('/clientes')

        } catch (error) {
            console.log(error)
        }
    }

    return (
        cargando ? <Spinner /> : (
            <div className=' mt-10 px-5 py-5 rounded-md border border-gray-400 md:w-3/3 mx-auto'>
                <h1 className='text-gray-900 font-bold text-xl text-center uppercase'>
                    {cliente.id ? 'Editar Cliente' : 'Nuevo Cliente'}
                </h1>
                <Formik
                    initialValues={{
                        nombre: cliente?.nombre ?? '',
                        empresa: cliente?.empresa ?? '',
                        email: cliente?.email ?? '',
                        telefono: cliente?.telefono ?? '',
                        notas: cliente?.notas ?? ''
                    }}
                    enableReinitialize={true}
                    onSubmit={ async (values, {resetForm}) => {
                        await handleSumit(values)
                        resetForm()
                    }}
                    validationSchema={nuevoClienteSchema}
                >
                    {({errors, touched}) => {
                        return (
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
                                    {errors.nombre && touched.nombre ? (
                                        <Alerta>{errors.nombre}</Alerta>
                                    ) : null}
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
                                    {errors.empresa && touched.empresa ? (
                                        <Alerta>{errors.empresa}</Alerta>
                                    ) : null}
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
                                    {errors.email && touched.email ? (
                                        <Alerta>{errors.email}</Alerta>
                                    ) : null}
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
                                    {errors.telefono && touched.telefono ? (
                                        <Alerta>{errors.telefono}</Alerta>
                                    ) : null}
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
                                    value=''
                                    className='w-full bg-blue-800 p-3 hover:bg-blue-500 text-white uppercase font-bold text-lg rounded-md shadow-md'>
                                    {cliente.id ? 'Editar Cliente' : 'Agragar Cliente'}
                                </button>
                            </div>
                        </Form>
                    )}}
                </Formik>
            </div>
        )
    )
}

Formulario.defaulProps = {
    cliente: {},
    cargando: false
}

export default Formulario