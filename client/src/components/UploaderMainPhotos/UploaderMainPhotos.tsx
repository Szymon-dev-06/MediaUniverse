import './UploaderMainPhotos.scss';

function Uploader() {
  return (
    <label className="uploader-main-photo_label" tabIndex={0} role='button' aria-label='upload your photo' onKeyDown={(e) => {
			if (e.key === 'Enter' || e.key === ' ') {
				e.preventDefault()
				const input = e.currentTarget.querySelector('input[type="file"]') as HTMLInputElement | null
				if (input) input.click()
			}
		}}>
      <img className='uploader-plus-icon' src='/icons/upload-plus.svg' alt="uploading-plus-icon" />
      <input className="uploader-input" type="file" accept="image/*"/>
    </label>
  );
}

export default Uploader;