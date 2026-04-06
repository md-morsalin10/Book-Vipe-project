import React from 'react';
import { Link } from 'react-router';

const SingleBook = ({book}) => {
    const {image, tags, bookName, author, rating, bookId,category} = book
    return (
        <Link to={`/bookDetails/${bookId}`} className='shadow-2xl border border-gray-300 p-5 rounded-2xl'>
            <div className='flex justify-center items-center'>
                <img className='object-contain h-80 w-80 rounded-3xl' src={image} alt="" />
            </div>
            <div className='py-2 p-2'>
                <div className='flex justify-baseline gap-9 items-center'>
                    {tags.map((t, ind)=> 
                    <div  key={ind}>
                        <div className="badge badge-soft bg-pink-200 font-semibold badge-secondary">{t}</div>
                    </div>)}
                </div>
                <div>
                    <h2 className='text-2xl font-bold'>{bookName}</h2>
                    <p className='font-medium'>By: {author}</p>
                </div>
                <div className='divider'></div>
                <div className='flex justify-between text=[#131313] opacity-80 font-bold'>
                    <p>{category}</p>
                    <p>{rating}</p>
                </div>
            </div>
        </Link>
    );
};

export default SingleBook;