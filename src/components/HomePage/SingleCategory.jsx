import Link from 'next/link';
import React from 'react';

const SingleCategory = ({ category }) => {
    const {id, name} = category;

    return (
        <div className='border py-2 rounded-lg pl-2 shadow-lg'>
            <Link href={`/products?categoryId=${id}`}>{name}</Link>
        </div>
    );
};

export default SingleCategory;