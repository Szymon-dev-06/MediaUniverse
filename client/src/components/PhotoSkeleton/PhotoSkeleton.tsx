import { useEffect, useState } from 'react';
import Uploader from '../UploaderMainPhotos/UploaderMainPhotos';
import './PhotoSkeleton.scss'

function PhotoSkeleton() {

	const[images, setImages] = useState<string[]>([])

useEffect(() => {
		fetch('/patchsImages.JSON')
	.then(res => res.json())
	.then((data:string[]) => setImages(data)) 
	.catch(err => console.log('failed to loading images', err))
}, [])

	return(
		 <>
		 <Uploader/>
		 {images.map((url, index) => (
		 <button className='delete-button' key={index}><img className='photo-skeleton' src={url} alt={`${index}image`} /></button>
		 ))}
		</>
	)
}

export default PhotoSkeleton