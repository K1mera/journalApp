import { checkingCredentials, logout, login } from "./"
import { logoutFirebase, signInWithCredentials, signUpCredentials, singInGoogle } from "../../firebase/providers";

export const checkingAuth = ( email, password ) => {
    return async ( dispatch ) => {
        dispatch( checkingCredentials() );

    }
}

export const startGoogleSignIn = ( ) => {
    return async ( dispatch ) => {
        dispatch( checkingCredentials() );
        const result = await singInGoogle();
        if (!result.ok) return dispatch( logout( result.errorMessage ) );

        dispatch( login( result ) )

    }
}

export const startSignUpWithCredentials = ({ displayName, password, email }) => {
    return async( dispatch ) => {
        dispatch( checkingCredentials() );

        const { ok, uid, photoURL, errorMessage } = await signUpCredentials({ email, password, displayName });

        if ( !ok ) return dispatch( logout({ errorMessage }) );

        dispatch( login({ uid, displayName, email, photoURL }));
    }
}

export const startLoginWithCredentials = ({ email, password }) => {
    return async( dispatch ) => {
        dispatch( checkingCredentials() );

        const { uid, displayName, ok, errorMessage, photoURL } = await signInWithCredentials({ email, password });

        if ( !ok ) return dispatch( logout({ errorMessage }) );

        dispatch( login({ uid, displayName, email, photoURL }));

    }
}

export const startLogout = () => {
    return async ( dispatch ) => {
        await logoutFirebase();

        dispatch( logout({  }) )
    } 

}