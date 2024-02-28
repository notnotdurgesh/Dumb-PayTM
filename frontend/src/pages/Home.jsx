import { Link } from 'react-router-dom';

export function Home(){
    return (
        <div className='content-center items-center'>
            <Navbar/>

        </div>
    )

    function Navbar(){

        return <nav className="bg-white border-gray-200 rounded-md m-2 dark:bg-gray-900">
            <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl p-4">
                <Link to="/" className="flex items-center space-x-3 rtl:space-x-reverse">
                    <img src="https://i.ibb.co/xq81Hw4/logo.png" className="h-16" alt="Flowbite Logo" />
                    <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">DumbPayTM</span>s
                </Link>
                <div className="flex items-center space-x-6 rtl:space-x-reverse">
                    <Link to="/Signup" className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-full text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">Sign Up</Link>
                    <Link to="/Signin" className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-full text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700">Log In</Link>
                </div>
            </div>
        </nav>
    }

        
}
