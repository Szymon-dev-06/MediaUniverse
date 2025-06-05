import { useEffect, useState } from 'react';
import Uploader from '../UploaderMainPhotos/UploaderMainPhotos';
import './PhotoSkeleton.scss'


function PhotoSkeleton() {
	const [photos, setPhotos] = useState<string[]>([])
	const[confirming, setConfirming] = useState<string | null>(null)

		
	const refreshPhotos = () => {
		fetch('http://localhost:3000/photos')
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

	fetch(`http://localhost:3000/uploads/${name}`, { method: 'DELETE' }).then(() => {
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
			}}><img key={name} src={`http://localhost:3000/uploads/${name}`} className='photo-skeleton' alt="{name}" /></button>
			))}
		</>
	)
}

export default PhotoSkeleton