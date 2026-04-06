import React, { useContext } from 'react';
import { BookContext } from '../../contex/BookProvider';
import ReadList from './ReadList';
import NoData from './NoData';

const ReadData = () => {
    const { readListBook, } = useContext(BookContext);

     if(readListBook.length === 0 ){
        return (
            <NoData></NoData>
        )
    }
    return (
        <div>


            <div>
                {
                    readListBook.map((read, index) => <ReadList read={read} key={index}></ReadList>)
                }
            </div>
        </div>
    );
};

export default ReadData;