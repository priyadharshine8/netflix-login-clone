import LoginForm from './components/LoginForm'; // The path MUST match the casing: L and F capitalized
import Dashboard from './components/Dashboard'; // The path MUST match the casing: D capitalized

const NETFLIX_BG_URL = "https://assets.nflxext.com/ffe/siteui/vlv3/5fd52069-281c-4b53-b09b-6ddc3605c31f/38f03766-3d75-4c07-8898-1e434f8103c2/IN-en-20240728-POP-UP-DAQ-97811124-780b-46a2-97b7-6f81f181cc05_main_bg_large.jpg";

const App = () => {
    
    // Simple routing
    if (window.location.pathname === '/dashboard-dummy') {
        return <Dashboard />;
    }

    // Render Login page
    return (
        <div className="min-h-screen bg-[#141414] relative"
             style={{ 
                 backgroundImage: `linear-gradient(to top, rgba(0, 0, 0, 0.8) 0, rgba(0, 0, 0, 0) 60%, rgba(0, 0, 0, 0.8) 100%), url('${NETFLIX_BG_URL}')`, 
                 backgroundSize: 'cover', 
                 backgroundPosition: 'center',
             }}>
            
            <header className="absolute top-0 left-0 p-5 z-10">
                <img src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg" alt="Netflix Logo" className="w-28 md:w-40" />
            </header>
            
            <div className="flex justify-center pt-20 md:pt-0 md:min-h-screen">
                <LoginForm />
            </div>

            <footer className="hidden md:block bg-black bg-opacity-70 text-gray-400 p-16 mt-auto absolute bottom-0 w-full">
                <div className="max-w-4xl mx-auto">
                    Questions? Call 000-800-919-1694
                </div>
            </footer>
        </div>
    );
};

export default App;