
import { BookContext } from '../../contex/BookProvider';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import ReadList from './ReadList';
import WishList from './WishList';
import NoData from './NoData';
import ReadData from './ReadData';
import WishData from './WishData';
import { useState } from 'react';

const BookPage = () => {
    
    const [shortingType, setShortingType] = useState('');
    console.log(shortingType);
    
    return (
        <div className='container mx-auto py-6'>
            <div className='flex justify-center items-center py-2'>
                <div className="dropdown dropdown-start">
                    <div tabIndex={0} role="button" className="btn bg-pink-500 text-white m-1">Short by ⬇️</div>
                    <ul tabIndex="-1" className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
                        <li onClick={()=>setShortingType('pages')}><a>Pages</a></li>
                        <li onClick={()=> setShortingType("ratting")}><a>Ratting</a></li>
                    </ul>
                </div>
            </div>
            <Tabs>
                <TabList>
                    <Tab>Read List</Tab>
                    <Tab>Wish List</Tab>
                </TabList>

                <TabPanel>
                    <ReadData shortingType={shortingType}></ReadData>
                </TabPanel>
                <TabPanel>
                    <WishData shortingType={shortingType}></WishData>
                </TabPanel>
            </Tabs>
        </div>
    );
};

export default BookPage;