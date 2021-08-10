import Cabinet from "./Pages/Cabinet";
import {LOGIN_ROUTE, REGISTRATION_ROUTE, LEKCII_ROUTE} from "./utils/consts";
import SubjectPage from "./Pages/SubjectPage";
import UserPage from "./Pages/UserPage";
import Auth from "./Pages/Auth";
import {TeachingArea} from "./Pages/TeachingArea/TeachingArea";
import {StudentArea} from "./Pages/StudentArea/StudentArea";
import {StudentRanking} from "./Pages/StudentRanking/StudentRanking";
import {DisciplineRanking} from "./Pages/DisciplineRanking/DisciplineRanking";
import {ComingEvents} from "./Pages/ComingEvents/ComingEvents";
import GroupTable from "./Pages/GroupTable";
import PersonalTable from "./Pages/PersonalTable";
import Forum from "./Pages/Forum";
import Lecture_2 from "./Pages/Lections/Lecture_2";
import Modules from "./Pages/Modules";

export const metodistRoutes = [
    {
        key: "Личный кабинет",
        path: '/',
        Component: Cabinet
    },
    {
        key: "",
        path: LOGIN_ROUTE,
        Component: Auth
    },
    {
        key: "",
        path: REGISTRATION_ROUTE,
        Component: Auth
    }
]

export const teacherRoutes = [
    {
        key: "Личный Кабинет",
        path: '/',
        Component: TeachingArea
    },
    {
        key: "Рейтинг учеников",
        path: '/Rankings',
        Component: StudentRanking
    },
    {
        key: "Ближайшие мероприятия",
        path: '/ComingEvents',
        Component: ComingEvents
    },
    {
        key: "",
        path: LOGIN_ROUTE,
        Component: Auth
    },
    {
        key: "",
        path: REGISTRATION_ROUTE,
        Component: Auth
    }
]

export const studentRoutes = [
    {
        key: "Личный кабинет",
        path: '/',
        Component: StudentArea
    },
    {
        key: "Рейтинг учеников",
        path: '/Rankings',
        Component: StudentRanking
    },
    {
        key: "",
        path: '/Forum',
        Component: Forum
    },
    {
        key: "Рейтинг дисциплин",
        path: '/DisciplineRanking',
        Component: DisciplineRanking
    },
    {
        key: "",
        path: '/Modules',
        Component: Modules
    },
    {
        key: "",
        path: LOGIN_ROUTE,
        Component: Auth
    },
    {
        key: "",
        path: REGISTRATION_ROUTE,
        Component: Auth
    }

]