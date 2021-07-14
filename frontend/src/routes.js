import Cabinet from "./pages/Cabinet";
import {METHODIST_ROUTE, SUBJECT_ROUTE, USER_ROUTE, LOGIN_ROUTE, REGISTRATION_ROUTE} from "./utils/consts";
import SubjectPage from "./pages/SubjectPage";
import UserPage from "./pages/UserPage";
import Auth from "./pages/Auth";

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