// frontend/src/components/Dashboard.jsx
import React from 'react';

const Dashboard = () => {
    const handleLogout = () => {
        window.location.href = '/'; 
    };

    return (
        <div className="min-h-screen bg-[#141414] text-white p-4 md:p-8">
            <header className="flex justify-between items-center border-b border-gray-700 pb-4 mb-8 max-w-7xl mx-auto">
                <h1 className="text-2xl md:text-4xl font-bold text-[#e50914]">NETFLIX Dashboard</h1>
                <button
                    onClick={handleLogout}
                    className="py-1 px-3 md:py-2 md:px-4 bg-[#e50914] hover:bg-red-700 rounded text-sm md:text-base font-semibold transition-colors"
                >
                    Logout
                </button>
            </header>
            
            <section className="mt-8 md:mt-12 max-w-7xl mx-auto">
                <h2 className="text-2xl md:text-3xl mb-4">Welcome Back!</h2>
                <p className="text-gray-400 mb-6">
                    This is your personalized area, confirming successful authentication.
                </p>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {['My List', 'Continue Watching', 'New Releases', 'Top Picks'].map((title, index) => (
                        <div key={index} className="bg-[#222] p-6 rounded shadow-lg transition-transform duration-300 hover:scale-[1.02]">
                            <h3 className="text-xl font-semibold mb-2">{title}</h3>
                            <p className="text-sm text-gray-500">Explore movies and shows in this category.</p>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
};

export default Dashboard;