import React, { useEffect, useState } from 'react'
import logo from '../images/logo.png'
import Form from './Buyer/Create/Form'
import { Axios } from './Axios'

const Create = () => {

	const [email, setEmail] = useState('')
	const [number, setNumber] = useState('')
	const [password, setPassword] = useState('')


	const email_handle = (e) => {
		setEmail(e.target.value)
	}
	const number_handle = (e) => {
		setNumber(e.target.value)
	}
	const password_handle = (e) => {
		setPassword(e.target.value)
	}

	const submit_form = async (e) => {
		e.preventDefault();
		await Axios.post('/new/buyer', {
			email: email,
			password: password,
			mobile: number
		})
	}


	useEffect(() => {



	}, [])


	return (
		<section className="h-screen flex-1 bg-slate-200">
			<Form/>
		</section>
	)
}

export default Create