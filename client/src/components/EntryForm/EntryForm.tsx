import { useState } from 'react';
import { useNavigate } from 'react-router-dom'
import { useUser } from '../../context/UserContext';
import SubmitFormButton from '../SubmitFormButton/SubmitFormButton';
import './EntryForm.scss'

function EntryForm()  {
	
	const { setUserName } = useUser();
	
	const [inputValue, setInputValue] = useState('')
	
	function handleChange (e:React.ChangeEvent<HTMLInputElement>) {
		setInputValue(e.target.value)
	}

	const navigate = useNavigate();

	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault()
		
		setUserName(inputValue)
		sessionStorage.setItem('userName', inputValue)
		
		navigate('/HomePage')
	}

	return (
		<form onSubmit={handleSubmit} className="entry-form">
			<label htmlFor="username-form-input" className='visually-hidden'>username</label>
			<input id='username-form_input' className='username-form_input' onChange={handleChange} name='username-form_input' value={inputValue} type="text" placeholder='Enter username' required/>
			<label htmlFor="password" className='visually-hidden'>password</label>
			<input id='password-form_input' className='password-form_input' name='password-form_input' type="password" placeholder='Enter password' required/>
			<p className='description-form'>This service allows you to upload and store personal photos, as well as share them with friends and acquaintances without worrying about the privacy of your personal data.</p>
			<SubmitFormButton/>
		</form>
	)
}

export default EntryForm