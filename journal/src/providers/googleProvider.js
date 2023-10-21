import {GoogleAuthProvider, signInWithPopup}  from 'firebase/auth'
import {firebaseAuthService} from "../firebase";
const googleProvider = new GoogleAuthProvider();

export const signInWithGoogle = async ()=>{
    try{
        const result = await signInWithPopup(firebaseAuthService, googleProvider)
        const {displayName, email, photoURL} = result.user
        console.log(displayName, email, photoURL)
        const credentials = GoogleAuthProvider.credentialFromResult(result)
        console.log(credentials )
    }catch (error){
        console.log(error)
    }
}
