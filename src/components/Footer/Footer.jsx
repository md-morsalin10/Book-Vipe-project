const Footer = () => {
    return (
        <footer className="bg-zinc-950 border-t-4 border-pink-500 pt-16 mt-8 pb-10">
            <div className="max-w-7xl mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
                    {/* Logo & Description */}
                    <div className="md:col-span-5">
                        <div className="flex items-center gap-3 mb-6">
                            <h2 className="text-3xl font-bold tracking-tighter bg-gradient-to-r from-pink-400 to-pink-600 bg-clip-text text-transparent">
                                📚 Book Vibe
                            </h2>
                        </div>
                        <p className="text-zinc-400 text-lg max-w-md leading-relaxed">
                            Discover your next favorite book. Track what you've read,
                            save what you love, and explore new stories — all in one place.
                        </p>
                        <div className="mt-6 h-1 w-16 rounded-full bg-gradient-to-r from-pink-500 to-pink-300"></div>
                    </div>

                    {/* Explore */}
                    <div className="md:col-span-2">
                        <h3 className="text-pink-400 font-bold mb-6 text-lg uppercase tracking-wider">Explore</h3>
                        <ul className="space-y-4 text-zinc-400">
                            <li><a href="#" className="hover:text-pink-400 transition-colors duration-200">All Books</a></li>
                            <li><a href="#" className="hover:text-pink-400 transition-colors duration-200">Categories</a></li>
                            <li><a href="#" className="hover:text-pink-400 transition-colors duration-200">Top Rated</a></li>
                            <li><a href="#" className="hover:text-pink-400 transition-colors duration-200">New Arrivals</a></li>
                        </ul>
                    </div>

                    {/* My Library */}
                    <div className="md:col-span-2">
                        <h3 className="text-pink-400 font-bold mb-6 text-lg uppercase tracking-wider">My Library</h3>
                        <ul className="space-y-4 text-zinc-400">
                            <li><a href="#" className="hover:text-pink-400 transition-colors duration-200">Read List</a></li>
                            <li><a href="#" className="hover:text-pink-400 transition-colors duration-200">Wish List</a></li>
                            <li><a href="#" className="hover:text-pink-400 transition-colors duration-200">Reviews</a></li>
                            <li><a href="#" className="hover:text-pink-400 transition-colors duration-200">Profile</a></li>
                        </ul>
                    </div>

                    {/* Support */}
                    <div className="md:col-span-3">
                        <h3 className="text-pink-400 font-bold mb-6 text-lg uppercase tracking-wider">Support</h3>
                        <ul className="space-y-4 text-zinc-400">
                            <li><a href="#" className="hover:text-pink-400 transition-colors duration-200">Help Center</a></li>
                            <li><a href="#" className="hover:text-pink-400 transition-colors duration-200">Privacy Policy</a></li>
                            <li><a href="#" className="hover:text-pink-400 transition-colors duration-200">Terms of Service</a></li>
                            <li><a href="#" className="hover:text-pink-400 transition-colors duration-200">Contact Us</a></li>
                        </ul>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="mt-16 pt-8 border-t border-pink-900/40 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-zinc-500">
                    <div>© {new Date().getFullYear()} <span className="text-pink-400 font-semibold">Book Vibe</span>. All rights reserved.</div>
                    <div>
                        <a href="#" className="hover:text-pink-400 transition-colors duration-200">
                            Made with ❤️ by <span className="text-pink-400 font-semibold">Morsalin</span>
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;