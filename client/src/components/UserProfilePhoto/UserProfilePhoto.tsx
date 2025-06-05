import { useState } from 'react';
import UploaderProfilePhoto from '../UploaderProfilePhoto/UploaderProfilePhoto';
import './UserProfilePhoto.scss'

function UserProfilePhoto() {
  const [photoURL, setPhotoURL] = useState<string | null>(() => {
		return sessionStorage.getItem('profilePhoto')
	});

	const handleUploadSuccess = () => {
		const newURL = `${import.meta.env.VITE_API_URL}/uploads/UserProfilePhoto.JPG?t=${Date.now()}`;
		sessionStorage.setItem('profilePhoto', newURL);
		setPhotoURL(newURL);
		window.dispatchEvent(new Event('profilePhotoUpdate'));
  };

  return (
	<UploaderProfilePhoto onUploadSuccess={handleUploadSuccess}>
		<img className='profile-photo' src={photoURL ?? 'icons/white-user.svg'}/></UploaderProfilePhoto>
  );
}

export default UserProfilePhoto;