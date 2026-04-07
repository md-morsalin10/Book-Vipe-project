import React, { useContext, useEffect, useState } from 'react';
import { BookContext } from '../../contex/BookProvider';
import WishList from './WishList';
import NoData from './NoData';

const WishData = ({shortingType}) => {
    const { wishList } = useContext(BookContext);

    const [filteredData, setFilteredData] = useState(wishList)
 
    useEffect(()=> {
        if(shortingType){
            if(shortingType ==="pages"){
                const shortedData = [...wishList].sort((a,b)=> a.totalPages - b.totalPages);
                setFilteredData(shortedData);
                
            }
            else if(shortingType==="ratting"){
                const sortedData = [...wishList].sort((a,b)=> a.rating - b.rating);
                setFilteredData(sortedData);
            }
        }
    },[wishList, shortingType]);

    if(filteredData.length === 0 ){
        return (
            <NoData></NoData>
        )
    }
    
    return (
        <div>
            <div>
                {
                    filteredData.map((wish, ind) => <WishList wish={wish} key={ind}></WishList>)
                }
            </div>
        </div>
    );
};

export default WishData;