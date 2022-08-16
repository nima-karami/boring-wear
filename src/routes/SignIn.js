import SigninForm from '../components/SigninForm';
import Container from '@mui/material/Container';

const SignIn = () => {
    
    return (
        <div className='center'>
            <Container maxWidth="false" sx={{ display: 'flex', justifyContent: 'space-between',flexWrap: 'wrap' , padding: '50px' }}>       
                <SigninForm />
            </Container>
        </div>
    )
}

export default SignIn;