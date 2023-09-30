import {Button, Grid, Link, TextField} from "@mui/material";
import {Google} from "@mui/icons-material";

export const LoginComponent = () => {

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

                    <form>
                        <Grid container>
                            <Grid item
                                  xs={12}
                                  sx={{mt: 2}}
                            >
                                <TextField
                                    label="Correo"
                                    type="email"
                                    placeholder='correo@google.com'
                                    fullWidth
                                />
                                <Grid item xs={12} sx={{mt: 2}}>
                                    <TextField
                                        label="Contraseña"
                                        type="password"
                                        placeholder='Contraseña'
                                        fullWidth
                                    />
                                </Grid>

                                <Grid container
                                      spacing={2}
                                      sx={{mb: 2, mt: 1}}
                                >
                                    <Grid item xs={12} sm={6}>
                                        <Button variant='contained' fullWidth>
                                            Login
                                        </Button>
                                    </Grid>
                                    <Grid item xs={12} sm={6}>
                                        <Button
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
