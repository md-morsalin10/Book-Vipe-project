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
        yearOfPublishing
    } = expectedBook;

    const { handleMarkAsRead, handleWishList } = useContext(BookContext);

    return (
        <div className='container flex justify-between items-center gap-7 p-10 mx-auto'>

            {/* Book Image Card */}
            <div className='
                group w-full p-5 border border-gray-300 rounded-2xl
                transition-all duration-300
                hover:border-pink-400
                hover:shadow-2xl
                hover:-translate-y-1
            '>
                <div className='overflow-hidden rounded-2xl'>
                    <img
                        className='
                            w-100 rounded-2xl
                            transition-transform duration-500
                            group-hover:scale-105
                        '
                        src={image}
                        alt={bookName}
                    />
                </div>
            </div>

            {/* Book Info */}
            <div className='space-y-3'>
                <div>
                    <h2 className='
                        text-4xl font-bold font-serif
                        transition-colors duration-200
                        hover:text-pink-500
                    '>
                        {bookName}
                    </h2>
                    <p className='text-xl font-medium text-gray-500'>by: {author}</p>
                </div>

                <hr />

                <div>
                    <p className='
                        text-xl font-medium inline-block
                        transition-colors duration-200
                        hover:text-pink-400 cursor-default
                    '>
                        {category}
                    </p>
                </div>

                <hr />

                <div className='flex gap-2'>
                    <p className='font-bold'>Review:</p>
                    <p><small>{review}</small></p>
                </div>

                {/* Tags */}
                <div className='flex gap-2'>
                    <p className='font-bold'>Tag:</p>
                    {tags.map((tag, index) =>
                        <p
                            key={index}
                            className='
                                text-green-500 font-bold
                                transition-all duration-200
                                hover:text-green-700 hover:scale-105 cursor-default
                            '
                        >
                            #{tag}
                        </p>
                    )}
                </div>

                {/* Details */}
                <div className='
                    space-y-1 p-4 rounded-xl border border-transparent
                    transition-all duration-300
                    hover:border-gray-200 hover:bg-gray-50 hover:shadow-sm
                '>
                    <div className='flex gap-3.5'>
                        <p className='text-[#131313] opacity-75'>Number of Pages</p>
                        <p className='font-semibold'>: {totalPages}</p>
                    </div>
                    <div className='flex gap-18'>
                        <p className='text-[#131313] opacity-75'>Publisher</p>
                        <p className='font-semibold'>: {publisher}</p>
                    </div>
                    <div className='flex gap-3'>
                        <p className='text-[#131313] opacity-75'>Year of Publishing</p>
                        <p className='font-semibold'>: {yearOfPublishing}</p>
                    </div>
                    <div className='flex justify-baseline gap-22'>
                        <p className='text-[#131313] opacity-75'>Rating</p>
                        <p className='font-semibold'>: {rating} ⭐</p>
                    </div>
                </div>

                {/* Buttons */}
                <div className='py-3 flex gap-3'>
                    <button
                        onClick={() => handleMarkAsRead(expectedBook)}
                        className='
                            btn btn-outline btn-primary
                            transition-all duration-200
                            hover:scale-105 hover:shadow-md
                        '
                    >
                        Mark as Read
                    </button>
                    <button
                        onClick={() => handleWishList(expectedBook)}
                        className='
                            btn btn-outline btn-neutral
                            transition-all duration-200
                            hover:scale-105 hover:shadow-md
                        '
                    >
                        Add to Wish
                    </button>
                </div>
            </div>
        </div>
    );
};

export default BookDetails;