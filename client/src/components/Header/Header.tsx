import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Header.scss';

type DisabledProps = {
	disabled?: boolean;
};

function Header({ disabled }: DisabledProps) {

const [profileButtonPhoto, setProfileButtonPhoto] = useState<string | null>(() => {
	return sessionStorage.getItem('profilePhoto');
});

useEffect(() => {
	const updatePhoto = () => {
		setProfileButtonPhoto(sessionStorage.getItem('profilePhoto'));
	};

	updatePhoto();
	window.addEventListener('profilePhotoUpdate', updatePhoto);
	return () => {
		window.removeEventListener('profilePhotoUpdate', updatePhoto);
	};
}, []);

	const navigate = useNavigate();

	const homeButtonClick = () => navigate('/HomePage');
	const userButtonClick = () => navigate('/UserProfilePage');

	return (
		<header className="header">
			<button
				className='header-nav_button home-button'
				onClick={homeButtonClick}
				disabled={disabled}
			>
				<img
					className="header-nav_img home-icon"
					src='icons/home.svg'
					alt="home-icon"
				/>
			</button>
			<h1 className="title">MediaUniverse</h1>
			<h2 className="subtitle">a place to store your memories</h2>
			<button
				className='header-nav_button user-button'
				onClick={userButtonClick}
				disabled={disabled}
			>
				<img
					className="header-nav_img profile-photo"
					src= {profileButtonPhoto ?? 'icons/emerald-user.svg'}
					alt="profile"
				/>
			</button>
		</header>
	);
}

export default Header;