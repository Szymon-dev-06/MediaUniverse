import { useEffect, useState } from 'react'
import './UploaderProfilePhoto.scss'

function UploaderProfilePhoto() {

	const[profilePhoto, setProfilePhoto] = useState<string | null>(null)

useEffect(() => {
  fetch('/patchsImages.JSON')
    .then(res => res.json())
    .then((data: string[]) => {
      const findProfilePhoto = data.find(name => name.endsWith('/profilePhoto.jpg'));
      if (findProfilePhoto) {
				setProfilePhoto(findProfilePhoto);
				localStorage.setItem('profilePhoto', findProfilePhoto)
			}
    })
    .catch(err => console.log('failed to loading userProfilePhoto', err));
}, []);

	return(
		<>
		<label className='uploader-profile-photo_label' tabIndex={0} role='button' aria-label='upload your profile photo' onKeyDown={(e) => {
		if (e.key === 'Enter' || e.key === ' ') {
			e.preventDefault()
			const input = e.currentTarget.querySelector('input[type="file"]') as HTMLInputElement || null
			if(input) input.click()
		}
		}}><input accept='image/*' type="file"/>
		<img className='profile-photo' src={profilePhoto || 'icons/white-user.svg'}/>
		</label>
		</>
	)
}

export default UploaderProfilePhoto