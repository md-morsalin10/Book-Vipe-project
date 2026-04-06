import React, { Suspense } from 'react';
import Banner from '../../components/Banner/Banner';
import AllBooks from '../../components/AllBooks/AllBooks';

const booksPromise = fetch('/booksData.json').then(res=> res.json())
const HomePage = () => {
    return (
        <div >
            <Banner/>
            <Suspense fallback={<p>Loading...</p>}>
                <AllBooks booksPromise={booksPromise} />
            </Suspense>
        </div>
    );
};

export default HomePage;