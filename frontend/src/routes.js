import Cabinet from "./Pages/Cabinet";
import {METHODIST_ROUTE, SUBJECT_ROUTE, USER_ROUTE, LOGIN_ROUTE, REGISTRATION_ROUTE} from "./utils/consts";
import SubjectPage from "./Pages/SubjectPage";
import UserPage from "./Pages/UserPage";
import Auth from "./Pages/Auth";
import {TeachingArea} from "./Pages/TeachingArea/TeachingArea";
import {StudentArea} from "./Pages/StudentArea/StudentArea";
import {StudentRanking} from "./Pages/StudentRanking/StudentRanking";
import {DisciplineRanking} from "./Pages/DisciplineRanking/DisciplineRanking";
import {ComingEvents} from "./Pages/ComingEvents/ComingEvents";

export const metodistroutes = [
    {
        path: METHODIST_ROUTE,
        Component: Cabinet
    },
    {
        path: SUBJECT_ROUTE + '/:idSub',
        Component: SubjectPage
    },
    {
        path: USER_ROUTE + '/:idUsr',
        Component: UserPage
    },
    {
        path: LOGIN_ROUTE,
        Component: Auth
    },
    {
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