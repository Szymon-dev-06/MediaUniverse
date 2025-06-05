import { useState } from 'react';
import './UploaderMainPhotos.scss';

function Uploader({ onUploadSuccess }: { onUploadSuccess: () => void }) {
  const [uploading, setUploading] = useState(false);

async function handleFileChange(e: React.ChangeEvent<HTMLInputElement>) {
  const selectedFile = e.target.files?.[0];
  if (!selectedFile) return;

  const formData = new FormData();
  formData.append('image', selectedFile);

  try {
    setUploading(true);

    const response = await fetch(`${import.meta.env.VITE_API_URL}/uploads`, {
      method: 'POST',
      body: formData,
    });

    if (!response.ok) throw new Error('Upload failed');

    await new Promise(res => setTimeout(res, 100));
    onUploadSuccess();
  } catch (error) {
    console.error('Ошибка загрузки:', error);
  } finally {
    setUploading(false);
    setTimeout(() => {
      e.target.value = ''
    }, 0);
  }
}

  return (
    <label className="uploader-main-photo_label" tabIndex={0} role='button' aria-label='upload your photo' onKeyDown={(e) => {
			if (e.key === 'Enter' || e.key === ' ') {
				e.preventDefault()
				const input = e.currentTarget.querySelector('input[type="file"]') as HTMLInputElement | null
				if (input) input.click()
			}
		}}>
      <img className='uploader-plus-icon' src={`${import.meta.env.BASE_URL}icons/upload-plus.svg`} alt="uploading-plus-icon" />
      <input className="uploader-input" type="file" accept="image/*" onChange={handleFileChange} disabled={uploading} />
    </label>
  );
}

export default Uploader;