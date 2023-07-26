import React from 'react';

const error = ({error, reset}) => {
    return (
        <div className="text-center">
            <h1 className="text-2xl font-semibold">{error.message || "Something went wrong"}</h1>
            <button onClick={() => reset()}>Reset</button>
        </div>
    );
};

export default error;