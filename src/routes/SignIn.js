import { SingInWithGooglePopup, CreateUserDocumentFromAuth } from '../utils/Firebase/Firebase';

const SignIn = () => {
    const logGoogleUser = async () => {
        const { user } = await SingInWithGooglePopup();
        const userDocRef = await CreateUserDocumentFromAuth(user);
    }
    
    
    return (
        <div>
            <h1>This is sign in page</h1>
            <button onClick={logGoogleUser}>
                Sign in with Google Popup
            </button>
        </div>
    )
}

export default SignIn;