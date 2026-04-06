
import { BookContext } from '../../contex/BookProvider';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import ReadList from './ReadList';
import WishList from './WishList';
import NoData from './NoData';
import ReadData from './ReadData';
import WishData from './WishData';

const BookPage = () => {
   
    return (
        <div className='container mx-auto py-10'>
            <Tabs>
                <TabList>
                    <Tab>Read List</Tab>
                    <Tab>Wish List</Tab>
                </TabList>

                <TabPanel>
                    <ReadData></ReadData>
                </TabPanel>
                <TabPanel>
                    <WishData></WishData>
                </TabPanel>
            </Tabs>
        </div>
    );
};

export default BookPage;