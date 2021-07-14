import React from 'react';
import {Modal} from "@material-ui/core"
import { makeStyles } from '@material-ui/core/styles';
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import MenuItem from "@material-ui/core/MenuItem";
import Select from "@material-ui/core/Select";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";

const CreateUser = ({show, onHide}) => {
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
        formControl: {
            margin: theme.spacing(1),
            minWidth: 120,
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
                    <h2 id="transition-modal-title">Добавить нового пользователя</h2>
                    <div className={classes.root}>
                        <TextField
                            id="outlined-full-width"
                            label="Имя пользователя"
                            style={{ margin: 8 }}
                            placeholder="Введение имя пользователя"
                            fullWidth
                            margin="normal"
                            InputLabelProps={{
                                shrink: true,
                            }}
                            variant="outlined"
                        />
                        <TextField
                            id="outlined-full-width"
                            label="Фамилия пользователя"
                            style={{ margin: 8 }}
                            placeholder="Введение фамилию пользователя"
                            fullWidth
                            margin="normal"
                            InputLabelProps={{
                                shrink: true,
                            }}
                            variant="outlined"
                        />
                        <TextField
                            id="outlined-full-width"
                            label="Email пользователя"
                            style={{ margin: 8 }}
                            placeholder="Введение email пользователя"
                            fullWidth
                            margin="normal"
                            InputLabelProps={{
                                shrink: true,
                            }}
                            variant="outlined"
                        />
                        <FormControl variant="outlined" className={classes.formControl}>
                            <InputLabel id="demo-simple-select-outlined-label">Роль</InputLabel>
                            <Select
                                labelId="demo-simple-select-outlined-label"
                                id="demo-simple-select-outlined"
                                label="Age"
                            >
                                <MenuItem value="">
                                </MenuItem>
                                <MenuItem value={1}>Студент</MenuItem>
                                <MenuItem value={2}>Учитель</MenuItem>
                                <MenuItem value={3}>Методист</MenuItem>
                            </Select>
                        </FormControl>
                        <Button classes={{ label: classes.label }} style={{ marginLeft: 550 }} variant='contained' onClick={onHide}>Закрыть</Button>
                        <Button classes={{ label: classes.label }} style={{ marginLeft: 10 }} variant="contained" color="primary" onClick={onHide}>Добавить</Button>
                    </div>
                </div>
            }
        </Modal>
    );
};

export default CreateUser;