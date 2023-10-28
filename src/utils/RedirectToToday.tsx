import { Navigate } from "react-router-dom";

function RedirectToToday(): JSX.Element {
    return <Navigate to={'/today'} />
}

export default RedirectToToday;