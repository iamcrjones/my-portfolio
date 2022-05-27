import { Link } from "react-router-dom"

const NotFound = () => {
    return(
        <>
            <h4>Error: URL not found.</h4>
            <Link to="/">Go back</Link>
        </>
    )
}
export default NotFound