import { Link } from 'react-router-dom'

const Error = () => {
    return (
        <div className="errorPage">
            <h1>404 - Page not found</h1>
            <button className='homepagebtn'>
                <Link to='/' className='linktext'>Go back to the homepage</Link>
            </button>
        </div>

    )
}

export default Error