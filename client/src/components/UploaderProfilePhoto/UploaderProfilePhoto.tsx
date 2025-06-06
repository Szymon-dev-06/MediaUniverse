import './UploaderProfilePhoto.scss'

function UploaderProfilePhoto({onUploadSuccess, children}: {onUploadSuccess?: () => void; children?:React.ReactNode}) {	
	async function handleFileChange(e: React.ChangeEvent<HTMLInputElement>) {
		const file = e.target.files?.[0]
		if(!file) return

		const formData = new FormData()
		formData.append('image', file)
		formData.append('purpose', 'profile')

await fetch(`${import.meta.env.VITE_API_URL}/uploads?purpose=profile&t=${Date.now()}`, {
  method: 'POST',
  body: formData,
});
	
onUploadSuccess?.()
	}

	return(
		<>
		<label className='uploader-profile-photo_label' tabIndex={0} role='button' aria-label='upload your profile photo' onKeyDown={(e) => {
		if (e.key === 'Enter' || e.key === ' ') {
			e.preventDefault()
			const input = e.currentTarget.querySelector('input[type="file"]') as HTMLInputElement || null
			if(input) input.click()
		}
		}}><input onChange={handleFileChange} accept='image/*' type="file" />
		{children}
		</label>
		</>
	)
}

export default UploaderProfilePhoto