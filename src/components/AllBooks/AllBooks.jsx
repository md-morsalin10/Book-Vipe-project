import React, { use } from 'react';
import SingleBook from './SingleBook';

const AllBooks = ({booksPromise}) => {
    const booksData = use(booksPromise);
    
    
    return (
        <div className='container mx-auto'>
            <h2 className='text-2xl font-bold text-center pb-8 text-pink-600'>All Books</h2>
            <div className='grid grid-cols-3 gap-10'>
                {
                    booksData.map((book, ind)=> <SingleBook book={book} key={ind}></SingleBook>)
                }
            </div>
        </div>
    );
};

export default AllBooks;