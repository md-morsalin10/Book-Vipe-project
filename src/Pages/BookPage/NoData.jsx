import React from 'react';

const NoData = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-[300px] border-2 border-dashed border-pink-200 rounded-2xl bg-pink-50/50 my-10 p-10 transition-all duration-300">
            
            {/* Icon */}
            <div className="text-6xl mb-4 animate-bounce">📚</div>

            {/* Text */}
            <h2 className="text-2xl font-bold text-pink-400 mb-2">No Books Found</h2>
            <p className="text-gray-400 text-center max-w-sm">
                Your list is empty! Start exploring and add some books to see them here.
            </p>

            {/* Decorative dots */}
            <div className="flex gap-2 mt-6">
                <span className="w-2 h-2 rounded-full bg-pink-200"></span>
                <span className="w-2 h-2 rounded-full bg-pink-300"></span>
                <span className="w-2 h-2 rounded-full bg-pink-400"></span>
            </div>
        </div>
    );
};

export default NoData;