import { useUser } from '../../context/UserContext'
import './GreetingUserName.scss'

function GreetingName() {

	const {userName} = useUser()
	
	return(
	<h3 className='greeting-name'>Hello, {userName}</h3>
	)
}

export default GreetingName