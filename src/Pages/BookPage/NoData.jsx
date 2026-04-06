import React from 'react';

const NoData = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-[300px] border-2 border-dashed border-gray-200 rounded-2xl bg-gray-50 my-10 p-10">
            <h2 className="text-2xl font-bold text-gray-400">No Data Available</h2>
            <p className="text-gray-400">Please add some books to see them here.</p>
        </div>
    );
};

export default NoData;