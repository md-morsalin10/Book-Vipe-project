import React from 'react';
import { CiLocationOn } from 'react-icons/ci';
import { IoIosContact } from 'react-icons/io';
import { MdContactPage } from 'react-icons/md';

const WishList = ({ wish }) => {
    const { bookName, image, author, yearOfPublishing, rating, tags, category, totalPages, publisher } = wish
    return (
        <div className='
            group flex items-center gap-20 border border-gray-300 my-4 p-3 rounded-2xl
            transition-all duration-300
            hover:border-pink-300
            hover:shadow-xl
            hover:-translate-y-1
            hover:bg-pink-50/30
        '>
            {/* Book Image */}
            <div className='
                h-40 w-40 border border-gray-300 flex justify-center items-center rounded-2xl bg-base-200
                transition-all duration-300
                group-hover:border-pink-300
                group-hover:bg-pink-100/40
                overflow-hidden
            '>
                <img
                    className='
                        object-contain h-30 w-30
                        transition-transform duration-500
                        group-hover:scale-110
                    '
                    src={image}
                    alt={bookName}
                />
            </div>

            <div className='space-y-2'>
                {/* Name & Author */}
                <div>
                    <h2 className='
                        text-xl font-serif font-bold
                        transition-colors duration-200
                        group-hover:text-pink-500
                    '>
                        {bookName}
                    </h2>
                    <p className='text-[#131313] opacity-80'>by: {author}</p>
                </div>

                {/* Tags & Year */}
                <div className='flex gap-2'>
                    <p className='font-bold'>Tag:</p>
                    {tags.map((tag, index) =>
                        <p
                            key={index}
                            className='
                                text-green-500 font-bold bg-green-100 px-1 rounded-lg
                                transition-all duration-200
                                group-hover:bg-green-200 group-hover:text-green-700
                            '
                        >
                            #{tag}
                        </p>
                    )}
                    <p className='text-[#424242] flex justify-center items-center'>
                        <CiLocationOn /> Year of Publishing: {yearOfPublishing}
                    </p>
                </div>

                {/* Publisher & Pages */}
                <div className='flex gap-10'>
                    <p className='text-[#424242] flex flex-row items-center'>
                        <IoIosContact /> Publisher: {publisher}
                    </p>
                    <p className='text-[#424242] flex flex-row items-center'>
                        <MdContactPage /> Pages: {totalPages}
                    </p>
                </div>

                <hr className='text-gray-300' />

                {/* Category & Rating */}
                <div className='flex items-center gap-2'>
                    <p className='
                        text-sky-500 bg-sky-200 px-3 rounded-2xl
                        transition-all duration-200
                        group-hover:bg-sky-400 group-hover:text-white
                    '>
                        {category}
                    </p>
                    <p className='
                        text-yellow-500 bg-yellow-200 px-3 rounded-2xl
                        transition-all duration-200
                        group-hover:bg-yellow-400 group-hover:text-white
                    '>
                        ⭐ {rating}
                    </p>
                </div>
            </div>
        </div>
    );
};

export default WishList;