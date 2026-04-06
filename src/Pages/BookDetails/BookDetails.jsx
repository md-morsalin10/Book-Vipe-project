import React, { useContext } from 'react';
import { useLoaderData, useParams } from 'react-router';
import { BookContext } from '../../contex/BookProvider';

const BookDetails = () => {
    const params = useParams()
    const bookData = useLoaderData();
    

    const expectedBook = bookData.find((book) => book.bookId == params.id);
    const {
        bookName,
        author,
        image,
        review,
        totalPages,
        rating,
        tags,
        category,
        publisher,
        yearOfPublishing} = expectedBook;
    
    const {handleMarkAsRead, handleWishList} = useContext(BookContext);
    



    return (
        <div className='container flex justify-between items-center gap-7 p-10 mx-auto'>
            <div className='w-full p-5 border'>
                <div>
                    <img className='w-100' src={image} alt="" />
                </div>
            </div>
            <div className='space-y-3'>
                <div>
                    <h2 className='text-4xl font-bold font-serif'>{bookName}</h2>
                    <p className='text-xl font-medium'>by: {author}</p>
                </div>
                <hr />
                <div>
                    <p className='text-xl font-medium'>{category}</p>
                </div>
                <hr />
                <div className='flex gap-2'>
                    <p className='font-bold'>Review:</p>
                    <p><small>{review}</small></p>
                </div>
                <div className='flex gap-2'>
                    <p className='font-bold'>Tag:</p>
                    {
                        tags.map((tag, index) => <p className='text-green-500 font-bold' key={index}>#{tag}</p>)
                    }
                </div>
                <div>
                    <div className='flex gap-3.5'>
                        <p className='text-[#131313] opacity-75'>Number of Pages </p>
                        <p>: {totalPages}</p>
                    </div>
                    <div className='flex gap-18'>
                        <p className='text-[#131313] opacity-75'>Publisher</p>
                        <p>: {publisher}</p>
                    </div>
                    <div className='flex gap-3'>
                        <p className='text-[#131313] opacity-75'>Year of Publishing</p>
                        <p>: {yearOfPublishing}</p>
                    </div>
                    <div className='flex justify-baseline gap-22'>
                        <p className='text-[#131313] opacity-75'>Ratting</p>
                        <p>: {rating}</p>
                    </div>
                    <div className='py-3'>
                        <button onClick={() => handleMarkAsRead(expectedBook)} className='btn btn-primary mx-3'>Mark as Read</button>
                        <button onClick={()=> handleWishList(expectedBook)} className='btn btn-neutral'>Add to Wish</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BookDetails;