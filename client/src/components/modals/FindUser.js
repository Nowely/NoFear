import React from 'react';
import {Modal} from "@material-ui/core"
import { makeStyles } from '@material-ui/core/styles';
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import UserList from "./UserList";

const FindUser = ({show, onHide}) => {
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
        <Modal
            open={show}
            onClose={onHide}
            className={classes.modal}
            closeAfterTransition
        >
            {
                <div className={classes.paper}>
                    <h2 id="transition-modal-title">Найти пользователя</h2>
                    <div className={classes.root}>
                        <TextField
                            id="outlined-full-width"
                            label="Пользователь"
                            style={{ margin: 8 }}
                            placeholder="Введите ID пользователя"
                            fullWidth
                            margin="normal"
                            InputLabelProps={{
                                shrink: true,
                            }}
                            variant="outlined"
                        />
                        <UserList/>
                    </div>
                    <br></br>
                    <Button classes={{ label: classes.label }} style={{ marginLeft: 1620 }} variant='contained' onClick={onHide}>Закрыть</Button>
                    <Button classes={{ label: classes.label }} style={{ marginLeft: 10 }} variant="contained" color="primary" onClick={onHide}>Найти</Button>
                </div>
            }
        </Modal>
    );
};

export default FindUser;