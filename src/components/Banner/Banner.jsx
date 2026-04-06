import React from 'react';
import book from '../../assets/book.png'

const Banner = () => {
    return (
        <div className='container my-4 mx-auto'>
            <div className="hero bg-base-200 min-h-[85vh]">
                <div className="hero-content rounded-3xl flex-col w-full gap-30 lg:flex-row-reverse">
                    <img
                        src={book}
                        className="max-w-sm rounded-lg"
                    />
                    <div className='space-y-10'>
                        <h1 className="text-5xl font-bold">Books to freshen <br /> up  your bookshelf</h1>
                      
                        <button className="btn btn-success text-white">View The List</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;