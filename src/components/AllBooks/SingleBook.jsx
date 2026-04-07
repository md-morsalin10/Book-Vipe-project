import React from 'react';
import { Link } from 'react-router';

const SingleBook = ({book}) => {
    const {image, tags, bookName, author, rating, bookId, category} = book
    return (
        <Link 
            to={`/bookDetails/${bookId}`} 
            className='
                group
                shadow-2xl border border-gray-300 p-5 rounded-2xl
                transition-all duration-300 ease-in-out
                hover:shadow-[0_20px_50px_rgba(236,72,153,0.25)]
                hover:-translate-y-2
                hover:border-pink-300
                cursor-pointer
                block
            '
        >
            {/* Image wrapper with zoom effect */}
            <div className='flex justify-center items-center overflow-hidden rounded-3xl'>
                <img 
                    className='
                        object-contain h-70 w-70 rounded-3xl
                        transition-transform duration-500 ease-in-out
                        group-hover:scale-105
                    ' 
                    src={image} 
                    alt={bookName} 
                />
            </div>

            <div className='py-2 p-2'>
                {/* Tags */}
                <div className='flex justify-baseline gap-9 items-center'>
                    {tags.map((t, ind)=> 
                    <div key={ind}>
                        <div className="
                            badge badge-soft bg-pink-200 font-semibold badge-secondary
                            transition-colors duration-200
                            group-hover:bg-pink-400 group-hover:text-white
                        ">
                            {t}
                        </div>
                    </div>)}
                </div>

                {/* Title & Author */}
                <div>
                    <h2 className='
                        text-2xl font-bold
                        transition-colors duration-200
                        group-hover:text-pink-500
                    '>
                        {bookName}
                    </h2>
                    <p className='font-medium text-gray-500'> By: {author}</p>
                </div>

                <div className='divider'></div>

                {/* Category & Rating */}
                <div className='flex justify-between text-[#131313] opacity-80 font-bold'>
                    <p className='transition-colors duration-200 group-hover:text-pink-500'>
                        {category}
                    </p>
                    <p className='flex items-center gap-1'>
                        <span className='
                            transition-transform duration-200
                            group-hover:scale-125 inline-block
                        '>
                            ⭐
                        </span>
                        {rating}
                    </p>
                </div>
            </div>
        </Link>
    );
};

export default SingleBook;