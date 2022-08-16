import { useEffect } from 'react';
import { getRedirectResult } from 'firebase/auth';
import { auth, SingInWithGooglePopup, SignInWithGoogleRedirect, CreateUserDocumentFromAuth } from '../utils/Firebase/Firebase';
import SigninForm from '../components/SigninForm';
import Container from '@mui/material/Container';

const SignIn = () => {
    useEffect( () => {
        const logGoogleRedirectResponse = async () => {
            const { user } = await getRedirectResult(auth);
            
            if (user) {
                const userDocRef = await CreateUserDocumentFromAuth(user); 
            }
        }
        logGoogleRedirectResponse();
    }, []);
    
    const logGoogleUser = async () => {
        const { user } = await SingInWithGooglePopup();
        const userDocRef = await CreateUserDocumentFromAuth(user);
    }
    
    const logGoogleRedirectUser = async () => {
        const { user } = await SignInWithGoogleRedirect();
        console.log(user);
    }
    
    return (
        <div className='center'>
            <h1 className='center'>This is sign in page</h1>
            <button onClick={logGoogleUser}>
                Sign in with Google Popup
            </button>
            <button onClick={logGoogleRedirectUser}>
                Sign in with Google Redirect
            </button>
            <Container maxWidth="false" sx={{ display: 'flex', justifyContent: 'space-between',flexWrap: 'wrap' , padding: '50px' }}>
        
                <SigninForm />
        
            </Container>
           
        </div>
    )
}

export default SignIn;