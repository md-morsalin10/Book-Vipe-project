import React from 'react';
import book from '../../assets/book.png'

const Banner = () => {
    return (
        <div className='container my-4 mx-auto'>
            <div className="hero bg-gradient-to-br from-pink-50 via-white to-pink-100 min-h-[85vh] rounded-3xl">
                <div className="hero-content rounded-3xl flex-col w-full gap-20 lg:flex-row-reverse">
                    <img
                        src={book}
                        className="max-w-sm rounded-lg drop-shadow-2xl hover:scale-105 transition-transform duration-500"
                    />
                    <div className='space-y-6'>
                        <h1 className="text-5xl font-bold leading-tight">
                            Books to freshen <br /> up your <span className="text-pink-500">Bookshelf</span>
                        </h1>
                        <p className="text-gray-500 text-lg max-w-md">
                            Discover your next favorite read. Track what you've read,
                            wishlist what you love, and explore new stories every day.
                        </p>
                        <button className="btn bg-pink-500 hover:bg-pink-600 text-white border-none px-8 rounded-full transition-all duration-200 hover:shadow-lg hover:scale-105">
                            View The List
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;