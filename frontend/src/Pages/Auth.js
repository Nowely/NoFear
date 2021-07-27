import React from 'react';
import {Card, Container, Button} from "@material-ui/core";
import {NavLink, useLocation} from "react-router-dom";
import {LOGIN_ROUTE, REGISTRATION_ROUTE} from "../utils/consts";
import TextField from "@material-ui/core/TextField";
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    modal: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    paper: {
        backgroundColor: theme.palette.background.paper,
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
    },
    root: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    textField: {
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(1),
        width: '25ch',
    },
    label: {
        textTransform: 'capitalize'
    },
}));

const Auth = () => {
    const location = useLocation()
    const isLogin = location.pathname === LOGIN_ROUTE

    const classes = useStyles();

    return (
        <Container
            className={"d-flex justify-content-center align-items-center"}
            style={{height: window.innerHeight - 54}}
        >
            <Card style={isLogin ? {width: 500} : {width: 1150}} className="p-5">
                <h2 className="m-auto">{isLogin ? 'Авторизация' : 'Регистрация'}</h2>
                <br/>
                <div>
                    <div className={classes.root}>
                        {isLogin ?
                            <div>
                                <TextField
                                    id="outlined-full-width"
                                    label="Логин"
                                    style={{margin: 8}}
                                    placeholder="Введите логин"
                                    fullWidth
                                    margin="normal"
                                    InputLabelProps={{
                                        shrink: true,
                                    }}
                                    variant="outlined"
                                />
                                <TextField
                                    id="outlined-full-width"
                                    label="Пароль"
                                    style={{margin: 8}}
                                    placeholder="Введите пароль"
                                    fullWidth
                                    margin="normal"
                                    InputLabelProps={{
                                        shrink: true,
                                    }}
                                    variant="outlined"
                                />
                            </div> :
                            <div>
                                <TextField
                                    id="outlined-full-width"
                                    label="Логин"
                                    style={{margin: 8}}
                                    placeholder="Введите логин"
                                    fullWidth
                                    margin="normal"
                                    InputLabelProps={{
                                        shrink: true,
                                    }}
                                    variant="outlined"
                                />
                                <TextField
                                    id="outlined-full-width"
                                    label="Почта"
                                    style={{margin: 8}}
                                    placeholder="Введите почту"
                                    fullWidth
                                    margin="normal"
                                    InputLabelProps={{
                                        shrink: true,
                                    }}
                                    variant="outlined"
                                />
                                <TextField
                                    id="outlined-full-width"
                                    label="Имя"
                                    style={{margin: 8}}
                                    placeholder="Введите имя"
                                    fullWidth
                                    margin="normal"
                                    InputLabelProps={{
                                        shrink: true,
                                    }}
                                    variant="outlined"
                                />
                                <TextField
                                    id="outlined-full-width"
                                    label="Фамилия"
                                    style={{margin: 8}}
                                    placeholder="Введите фамилию"
                                    fullWidth
                                    margin="normal"
                                    InputLabelProps={{
                                        shrink: true,
                                    }}
                                    variant="outlined"
                                />
                                <TextField
                                    id="outlined-full-width"
                                    label="Пароль"
                                    style={{margin: 8}}
                                    placeholder="Введите пароль"
                                    fullWidth
                                    margin="normal"
                                    InputLabelProps={{
                                        shrink: true,
                                    }}
                                    variant="outlined"
                                />
                            </div>
                        }
                        {isLogin ?
                            <div style={{ marginLeft: 10 }}>
                                Нет аккаунта? <NavLink to={REGISTRATION_ROUTE}>Зарегистрируйся</NavLink>
                            </div>
                            :
                            <div style={{ marginLeft: 10 }}>
                                Есть аккаунт? <NavLink to={LOGIN_ROUTE}>Авторизируйся</NavLink>
                            </div>
                        }
                        {isLogin ?
                        <Button classes={{ label: classes.label }} style={{ marginLeft: 190 }} variant="contained" color="primary">
                            Войти
                        </Button>
                            :
                            <Button classes={{ label: classes.label }} style={{ marginLeft: 160 }} variant="contained" color="primary">
                                Регистрация
                            </Button> }
                    </div>
                </div>
            </Card>
        </Container>
    );
};

export default Auth;