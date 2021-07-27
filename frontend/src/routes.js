import Cabinet from "./Pages/Cabinet";
import {METHODIST_ROUTE, SUBJECT_ROUTE, USER_ROUTE, LOGIN_ROUTE, REGISTRATION_ROUTE, LEKCII_ROUTE} from "./utils/consts";
import SubjectPage from "./Pages/SubjectPage";
import UserPage from "./Pages/UserPage";
import Auth from "./Pages/Auth";
import {TeachingArea} from "./Pages/TeachingArea/TeachingArea";
import {StudentArea} from "./Pages/StudentArea/StudentArea";
import {StudentRanking} from "./Pages/StudentRanking/StudentRanking";
import {DisciplineRanking} from "./Pages/DisciplineRanking/DisciplineRanking";
import {ComingEvents} from "./Pages/ComingEvents/ComingEvents";
import LK from "./Pages/LK";
import GroupTable from "./Pages/GroupTable";
import PersonalTable from "./Pages/PersonalTable";
import Forum from "./Pages/Forum";
import Lecture_2 from "./Pages/Lections/Lecture_2";

export const metodistroutes = [
    {
        key: "М. Личный Кабинет",
        path: METHODIST_ROUTE,
        Component: Cabinet
    },
    {
        key: "Дисциплины",
        path: SUBJECT_ROUTE + '/:idSub',
        Component: SubjectPage
    },
    {
        key: "Авторизация",
        path: LOGIN_ROUTE,
        Component: Auth
    },
    {
        key: "Регистрация",
        path: REGISTRATION_ROUTE,
        Component: Auth
    }
]

export const teacherRoutes = [
    {
        key: "П. Личный Кабинет",
        path: '/',
        Component: TeachingArea
    },
    {
        key: "С. Личный кабинет",
        path: '/Account',
        Component: StudentArea
    },
    {
        key: "Рейтинг дисциплин",
        path: '/StudentRanking',
        Component: StudentRanking
    },
    {
        key: "Рейтинг учащихся",
        path: '/DisciplineRanking',
        Component: DisciplineRanking
    },
    {
        key: "Ближайшие мероприятия",
        path: '/ComingEvents',
        Component: ComingEvents
    }
]

export const studentRoutes = [
    {
        key: "Личный кабинет",
        path: '/',
        Component: LK
    },
    {
        key: "Рейтинговая таблица",
        path: '/Rankings',
        Component: GroupTable
    },
    {
        key: "Форум",
        path: '/Forum',
        Component: Forum
    }
    // {
    //     key: "Лекции",
    //     path: LEKCII_ROUTE + '/0',
    //     Component: Lecture_2
    // },
]