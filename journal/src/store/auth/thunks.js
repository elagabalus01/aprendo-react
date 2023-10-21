import {checkCredentials} from "./authSlice.js";
import {signInWithGoogle} from "../../providers/googleProvider.js";

export const startLoginWithEmailPassword = ({ email, password }) => {
    return async( dispatch ) => {

        dispatch( checkCredentials() );

    }
}

export const startGoogleLogin = () => {
    return async( dispatch ) => {
        dispatch( checkCredentials() );

        signInWithGoogle()


    }
}
