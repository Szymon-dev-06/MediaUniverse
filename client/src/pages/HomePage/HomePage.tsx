import Header from '../../components/Header/Header';
import PhotoSkeleton from '../../components/PhotoSkeleton/PhotoSkeleton';
import styles from './HomePage.module.scss'


function HomePage() {

	return (
		<>
		<Header/>
		<div className={styles.container}>
		 <PhotoSkeleton/>
		</div>
		</>
	);
}

export default HomePage;