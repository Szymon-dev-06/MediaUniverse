import Header from "../../components/Header/Header"
import UserProfilePhoto from "../../components/UserProfilePhoto/UserProfilePhoto"
import GreetingName from "../../components/GreetingUserName/GreetingUserName"
import ThankYouLetter from "../../components/ThankYouLetter/ThankYouLetter"
import styles from './UserProfilePage.module.scss'

function UserProfile() {
	return(
		<>
		<Header/>
		<div className={styles.mainContainer}>
			<UserProfilePhoto/>
			<div className={styles.positionContaner}>
				<GreetingName/>
				<ThankYouLetter/>
			</div>
		</div>
		</>
	)
}

export default UserProfile