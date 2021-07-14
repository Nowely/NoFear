import React from 'react';
import {Card, Container, Button} from "@material-ui/core";
import {NavLink, useLocation} from "react-router-dom";
import {LOGIN_ROUTE, REGISTRATION_ROUTE} from "../utils/consts";
import TextField from "@material-ui/core/TextField";
import {makeStyles} from "@material-ui/core/styles";

const Auth = () => {
    const location = useLocation()
    const isLogin = location.pathname === LOGIN_ROUTE

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
    const classes = useStyles();

    return (
        <Container
            className={"d-flex justify-content-center align-items-center"}
            style={{height: window.innerHeight - 54}}
        >
            <Card style={{width: 600}} className="p-5">
                <h2 className="m-auto">{isLogin ? 'Авторизация' : 'Регистрация'}</h2>
                <br/>
                <div>
                    <div className={classes.root}>
                        <TextField
                            id="outlined-full-width"
                            label="Логин"
                            style={{ margin: 8 }}
                            placeholder="Введите название дисциплины"
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
                            style={{ margin: 8 }}
                            placeholder="Введите название дисциплины"
                            fullWidth
                            margin="normal"
                            InputLabelProps={{
                                shrink: true,
                            }}
                            variant="outlined"
                        />
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
                {/*<Form className="d-flex flex-column">*/}
                {/*    <Form.Control*/}
                {/*        className="mt-4"*/}
                {/*        placeholder="Введите ваш email..."*/}
                {/*    />*/}
                {/*    <Form.Control*/}
                {/*        className="mt-3"*/}
                {/*        placeholder="Введите ваш пароль..."*/}
                {/*    />*/}
                {/*    <Row className="d-flex justify-content-between mt-3 pl-3 pr-3">*/}
                {/*        {isLogin ?*/}
                {/*        <div>*/}
                {/*            Нет аккаунта? <NavLink to={REGISTRATION_ROUTE}>Зарегистрируйся</NavLink>*/}
                {/*        </div>*/}
                {/*            :*/}
                {/*            <div>*/}
                {/*                Есть аккаунт? <NavLink to={LOGIN_ROUTE}>Авторизируйся</NavLink>*/}
                {/*            </div>*/}
                {/*        }*/}
                {/*        <Button variant={"outline-success"}>*/}
                {/*            {isLogin ? 'Войти' : 'Регистрация'}*/}
                {/*        </Button>*/}
                {/*    </Row>*/}
                {/*</Form>*/}
            </Card>
        </Container>
    );
};

export default Auth;