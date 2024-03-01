const App = () => {
    return (
        <div className="w-full h-15 fixed top-0 bg-gray-800">
            <div className="mx-auto max-w-7xl px-2 sm:px-20 lg:px-10 text-white">
                <div className="relative flex h-16 items-center justify-between">
                    <div className="inline-flex items-center space-x-2">
                        <span className="font-bold relative right-20">Dexterix 4.O</span>
                    </div>
                    <div className="hidden lg:flex items-start">
                        <ul className="ml-12 inline-flex space-x-8">
                            <li>
                                <a
                                    href="#"
                                    className="text-sm font-semibold text-white hover:text-gray-900"
                                >
                                    About
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#"
                                    className="text-sm font-semibold text-white hover:text-gray-900"
                                >
                                    Schedule
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#"
                                    className="text-sm font-semibold text-white hover:text-gray-900"
                                >
                                    Event
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#"
                                    className="text-sm font-semibold text-white hover:text-gray-900"
                                >
                                    Sponsors
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#"
                                    className="text-sm font-semibold text-white hover:text-gray-900"
                                >
                                    FAQs
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#"
                                    className="text-sm font-semibold text-white hover:text-gray-900"
                                >
                                    Contact Us
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className="lg:hidden">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="h-6 w-6 cursor-pointer"
                        >
                            <line x1="4" y1="12" x2="20" y2="12"></line>
                            <line x1="4" y1="6" x2="20" y2="6"></line>
                            <line x1="4" y1="18" x2="20" y2="18"></line>
                        </svg>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default App;
