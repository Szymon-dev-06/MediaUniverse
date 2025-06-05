import { useEffect, useState } from 'react';
import Uploader from '../UploaderMainPhotos/UploaderMainPhotos';
import './PhotoSkeleton.scss'


function PhotoSkeleton() {
	const [photos, setPhotos] = useState<string[]>([])
	const[confirming, setConfirming] = useState<string | null>(null)

		
	const refreshPhotos = () => {
		fetch(`${import.meta.env.VITE_API_URL}/photos`)
		.then(res => res.json())
		.then(setPhotos)
		}

	useEffect(refreshPhotos, [])

	function handleDeletePhoto(name: string) {
	if (confirming !== name) {
		setConfirming(name);
		setTimeout(() => {
			setConfirming(null);
			document.activeElement instanceof HTMLElement && document.activeElement.blur();
		}, 2000);
		return;
	}

	fetch(`${import.meta.env.VITE_API_URL}/${name}`, { method: 'DELETE' }).then(() => {
		setPhotos((photos) => photos.filter((n) => n !== name));
		setConfirming(null);
	});
}

	return(
		 <>
		 <Uploader onUploadSuccess={refreshPhotos}/>
			{photos.map(name => (
			<button className='delete-button' key={name} onClick={() => handleDeletePhoto(name) } onBlur={() => {
				if(confirming === name)  {
					setConfirming(null)
				}
			}}><img key={name} src={`${import.meta.env.VITE_API_URL}/photos`} className='photo-skeleton' alt="{name}" /></button>
			))}
		</>
	)
}

export default PhotoSkeleton