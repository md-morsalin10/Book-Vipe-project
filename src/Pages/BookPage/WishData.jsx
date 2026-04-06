import React, { useContext } from 'react';
import { BookContext } from '../../contex/BookProvider';
import WishList from './WishList';
import NoData from './NoData';

const WishData = () => {
    const { wishList } = useContext(BookContext);

    if(wishList.length === 0 ){
        return (
            <NoData></NoData>
        )
    }
    
    return (
        <div>
            <div>
                {
                    wishList.map((wish, ind) => <WishList wish={wish} key={ind}></WishList>)
                }
            </div>
        </div>
    );
};

export default WishData;