import Ballot from "../View/Ballot";
import Results from "../View/Results";
import { RouteObject } from "react-router-dom";


export const ROUTES : RouteObject[] = [
            {
                path: '/',
                index: true,
                element: <Ballot />,
            },
            {
                path: '/results',
                element: <Results />,
            },
]