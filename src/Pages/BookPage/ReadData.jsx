import React, { useContext, useEffect, useState } from 'react';
import { BookContext } from '../../contex/BookProvider';
import ReadList from './ReadList';
import NoData from './NoData';

const ReadData = ({shortingType}) => {
    const { readListBook, } = useContext(BookContext);
    const [filteredData, setFilteredData] = useState(readListBook)
 
    useEffect(()=> {
        if(shortingType){
            if(shortingType ==="pages"){
                const shortedData = [...readListBook].sort((a,b)=> a.totalPages - b.totalPages);
                setFilteredData(shortedData);
                
            }
            else if(shortingType==="ratting"){
                const sortedData = [...readListBook].sort((a,b)=> a.rating - b.rating);
                setFilteredData(sortedData);
            }
        }
    },[readListBook, shortingType])
    
     if(filteredData.length === 0 ){
        return (
            <NoData></NoData>
        )
    }
    return (
        <div>


            <div>
                {
                    filteredData.map((read, index) => <ReadList read={read} key={index}></ReadList>)
                }
            </div>
        </div>
    );
};

export default ReadData;