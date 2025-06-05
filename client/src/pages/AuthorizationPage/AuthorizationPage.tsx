import Header from '../../components/Header/Header';
import EntryForm from "../../components/EntryForm/EntryForm";


function AuthorizationPage() {
	return(
		<>
		<Header disabled={true}/>
		<EntryForm/>
		</>
	)
}

export default AuthorizationPage