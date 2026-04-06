import React from 'react';
import { CiLocationOn } from 'react-icons/ci';
import { IoIosContact } from 'react-icons/io';
import { MdContactPage } from 'react-icons/md';

const WishList = ({ wish }) => {
    const { bookName, image, author, yearOfPublishing, rating, tags, category, totalPages, publisher } = wish
    return (
        <div className='flex items-center gap-20 border border-gray-300 my-4 p-3 rounded-2xl'>
            <div className='h-40 w-40 border border-gray-300 flex justify-center items-center rounded-2xl bg-base-200'>
                <img className='object-contain h-30 w-30' src={image} alt="" />
            </div>
            <div className='space-y-2'>
                <div>
                    <h2 className='text-xl font-serif font-bold'>{bookName}</h2>
                    <p className='text-[#131313] opacity-80'>by: {author}</p>
                </div>
                <div className='flex gap-2'>
                    <p className='font-bold'>Tag:</p>
                    {
                        tags.map((tag, index) => <p className='text-green-500 font-bold bg-green-100 px-1 rounded-lg' key={index}>#{tag}</p>)
                    }
                    <p className='text-[#424242] flex justify-center items-center'> <CiLocationOn />Year of Publishing: {yearOfPublishing}</p>
                </div>
                <div className='flex gap-10'>
                    <p className='text-[#424242] flex flex-row items-center'><IoIosContact />Publisher: {publisher}</p>
                    <p className='text-[#424242] flex flex-row items-center'><MdContactPage />Pages: {totalPages}</p>
                </div>
                <hr className='text-gray-300' />
                <div className='flex items-center gap-2'>
                    <p className='text-sky-500 bg-sky-200 px-3 rounded-2xl'>{category}</p>
                    <p className='text-yellow-500 bg-yellow-200 px-3 rounded-2xl'>{rating}</p>
                    <button className=' rounded-3xl'>View Details</button>
                </div>

            </div>
        </div>
    );
};

export default WishList;