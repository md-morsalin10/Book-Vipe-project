import React from "react";

const ErrorPage = () => {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 text-center px-4">

            {/* 404 Text */}
            <h1 className="text-7xl font-extrabold text-red-500 mb-4">
                404
            </h1>

            {/* Title */}
            <h2 className="text-2xl md:text-3xl font-semibold mb-2">
                Oops! Page Not Found
            </h2>

            {/* Description */}
            <p className="text-gray-600 mb-6 max-w-md">
                The page you are looking for doesn’t exist or has been moved.
            </p>

            {/* Button */}
            <a
                href="/"
                className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition duration-300"
            >
                Go Back Home
            </a>

        </div>
    );
};

export default ErrorPage;