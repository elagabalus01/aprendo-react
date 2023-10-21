import {Button, Grid, Link, TextField} from "@mui/material";
import {Google} from "@mui/icons-material";
import {useForm} from "../hooks/index.js";
import {useDispatch, useSelector} from "react-redux";
import {startGoogleLogin, startLoginWithEmailPassword} from "../store/auth";
import {useEffect} from "react";

export const LoginComponent = () => {

    const dispatch= useDispatch()

    const { status, errorMessage } = useSelector( state => state.auth );

    const validaCorreo = (value)=>{
        console.log("validando");
        const result = value == 'elagabalus@gmail.com'
        console.log(result)
        return result
    }

    const validators = {
        'email': [validaCorreo, 'Correo inválido']
    }

    const { email, password, onInputChange, emailValid } = useForm({
        email: '',
        password: ''
      }, validators);

    useEffect(() => {
        console.log('use effect ' + emailValid);
    }, [ emailValid ])


    const onSubmit = ( event ) => {
        event.preventDefault();

        console.log({ email, password })
        dispatch( startLoginWithEmailPassword({ email, password }) );
    }
    const onGoogleSingIn = ( event ) => {
        event.preventDefault();

        dispatch( startGoogleLogin() );
    }


    return (
        <>
            <h1>PRUEBA</h1>
            <Grid container
                  spacing={0}
                  direction="column"
                  alignItems="center"
                  justifyContent="center"
                  sx={{minHeight: '100vh', backgroundColor: 'primary.main', padding: 4}}
            >
                <Grid item
                      sx={{
                          width: {sm: 450},
                          backgroundColor: 'white',
                          padding: 3,
                          borderRadius: 2
                      }}>

                    <form onSubmit={onSubmit}>
                        <Grid container>
                            <Grid item
                                  xs={12}
                                  sx={{mt: 2}}
                            >
                                <TextField
                                    name="email"
                                    label="Correo"
                                    type="email"
                                    placeholder='correo@google.com'
                                    fullWidth
                                    onChange={onInputChange}
                                    helperText={emailValid}
                                />
                                <Grid item xs={12} sx={{mt: 2}}>
                                    <TextField
                                        name="password"
                                        label="Contraseña"
                                        type="password"
                                        placeholder='Contraseña'
                                        fullWidth
                                        onChange={onInputChange}
                                    />
                                </Grid>

                                <Grid container
                                      spacing={2}
                                      sx={{mb: 2, mt: 1}}
                                >
                                    <Grid item xs={12} sm={6}>
                                        <Button  type="submit"  variant='contained' fullWidth>
                                            Login
                                        </Button>
                                    </Grid>
                                    <Grid item xs={12} sm={6}>
                                        <Button
                                            onClick={onGoogleSingIn}
                                            variant='contained'
                                            fullWidth
                                        >
                                            <Google/>
                                        </Button>
                                    </Grid>
                                </Grid>
                            </Grid>


                        </Grid>


                    </form>

                </Grid>

            </Grid>
        </>
    )

}
