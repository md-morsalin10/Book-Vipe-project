import React, { Children, createContext, useState } from 'react';

export const BookContext = createContext()

const BookProvider = ({ children }) => {

    const [readListBook, setReadListBook] = useState([]);
    const [wishList, setWishList] = useState([]);

    const handleMarkAsRead = (currentBook) => {
        const isExistedBook = readListBook.find((book) => book.bookId === currentBook.bookId);
        if (isExistedBook) {
            alert('The book is all ready existed')
        }
        else {
            setReadListBook([...readListBook, currentBook])
            alert("books added successfully")
        }

    }
    const handleWishList = (currentBook) => {
        
        const isExisted = readListBook.find((book)=> book.bookId === currentBook.bookId);
        if(isExisted){
            alert('this books  in readList')
            return;
        }

        const isExistedBook = wishList.find((book) => book.bookId === currentBook.bookId);
        if (isExistedBook) {
            alert('This books is all ready Existed')
        }
        else {
            setWishList([...wishList, currentBook])
            alert("added into wishlist")
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