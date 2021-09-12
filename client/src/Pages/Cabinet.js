import React, {useState} from 'react';
import {Button} from "@material-ui/core";
import {Grid} from "@material-ui/core";
import CreateSubject from "../components/modals/CreateSubject";
import CreateUser from "../components/modals/CreateUser";
import FindUser from "../components/modals/FindUser";
import FindSubject from "../components/modals/FindSubject";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import Card from "@material-ui/core/Card";
import {makeStyles} from "@material-ui/core/styles";

const Cabinet = () => {
    const [subjectVisible, setSubjectVisible] = useState(false)
    const [findSubjectVisible, setFindSubjectVisible] = useState(false)
    const [userVisible, setUserVisible] = useState(false)
    const [findUserVisible, setFindUserVisible] = useState(false)

    const useStyles = makeStyles((theme) => ({
        label: {
            textTransform: 'capitalize',
        },
    }));
    const classes = useStyles();

    return (
        <>
            <Grid container >
            <Grid item xs={3} style={{ marginLeft: 420 }}>
                <Card style={{ width: 400, height: 650, fontSize: 25, marginTop: 150, boxShadow: "none" }}>
                    <CardMedia
                        component="img"
                        height="400"
                        src="https://www.seekpng.com/png/full/73-730482_existing-user-default-avatar.png"
                    />
                    <CardContent>
                        Имя: <br/>
                        Фамилия: <br/>
                        Email: <br/>
                    </CardContent>
                </Card>
            </Grid>
            <Grid item xs={3} style={{ marginTop: 200 }}>
                <h1 style={{ fontSize: 50 }}>Личный кабинет</h1><br/>
                <div>
                    <Button
                        variant="outlined"
                        size="small"
                        block
                        className="mt-4 p-3"
                        style={{ fontSize: '16px', width: 600 }}
                        classes={{
                            label: classes.label,
                        }}
                        onClick={() => setUserVisible(true)}
                    >
                        Добавить пользователя
                    </Button>
                </div>
                <div>
                    <Button
                        variant="outlined"
                        size="small"
                        block
                        style={{ fontSize: '16px', width: 600 }}
                        classes={{
                            label: classes.label,
                        }}
                        onClick={() => setFindUserVisible(true)}
                    >
                        Найти пользователя
                    </Button>
                </div>
                <div>
                    <Button
                        variant="outlined"
                        size="small"
                        block
                        className="mt-4 p-3"
                        style={{ fontSize: '16px', width: 600 }}
                        classes={{
                            label: classes.label,
                        }}
                        onClick={() => setSubjectVisible(true)}
                    >
                        Добавить дисциплину
                    </Button>
                </div>
                <div>
                    <Button
                        variant="outlined"
                        size="small"
                        block
                        className="mt-4 p-3"
                        style={{ fontSize: '16px', width: 600 }}
                        classes={{
                            label: classes.label,
                        }}
                        onClick={() => setFindSubjectVisible(true)}
                    >
                        Найти дисциплину
                    </Button>
                </div>
            </Grid>
            </Grid>
            <CreateSubject show={subjectVisible} onHide={() => setSubjectVisible(false)}/>
            <FindSubject show={findSubjectVisible} onHide={() => setFindSubjectVisible(false)}/>
            <CreateUser show={userVisible} onHide={() => setUserVisible(false)}/>
            <FindUser show={findUserVisible} onHide={() => setFindUserVisible(false)}/>
        </>
    );
};

export default Cabinet;