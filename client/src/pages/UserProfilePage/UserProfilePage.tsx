import Header from "../../components/Header/Header"
import UploaderProfilePhoto from "../../components/UploaderProfilePhoto/UploaderProfilePhoto"
import GreetingName from "../../components/GreetingUserName/GreetingUserName"
import ThankYouLetter from "../../components/ThankYouLetter/ThankYouLetter"
import styles from './UserProfilePage.module.scss'

function UserProfile() {
	return(
		<>
		<Header/>
		<div className={styles.mainContainer}>
				<UploaderProfilePhoto/>
				<GreetingName/>
				<ThankYouLetter/>
			</div>
		</>
	)
}

export default UserProfile