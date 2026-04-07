import React, { Children, createContext, useState } from 'react';
import { toast } from 'react-toastify';

export const BookContext = createContext()

const BookProvider = ({ children }) => {

    const [readListBook, setReadListBook] = useState([]);
    const [wishList, setWishList] = useState([]);

    const handleMarkAsRead = (currentBook) => {
        const isExistedBook = readListBook.find((book) => book.bookId === currentBook.bookId);
        if (isExistedBook) {
            toast.error(`${currentBook.bookName} all ready existed in ReadList`);
        }
        else {
            setReadListBook([...readListBook, currentBook])
            toast.success(`${currentBook.bookName} Added in ReadList Successfully`);
        }

    }
    const handleWishList = (currentBook) => {
        
        const isExisted = readListBook.find((book)=> book.bookId === currentBook.bookId);
        if(isExisted){
            toast.error(`${currentBook.bookName} is  in ReadList`);
            return;
        }

        const isExistedBook = wishList.find((book) => book.bookId === currentBook.bookId);
        if (isExistedBook) {
            toast.error(`${currentBook.bookName} all ready existed in WishList`);
        }
        else {
            setWishList([...wishList, currentBook])
            toast.success(`${currentBook.bookName} Added in WishList Successfully`);
        }
    }

    const data = {
        handleMarkAsRead,
        readListBook,
        setReadListBook,
        handleWishList,
        wishList,
        setWishList
    }
    return <BookContext.Provider value={data}>{children}</BookContext.Provider>

};

export default BookProvider;