"use client"

import { useParams, useSearchParams } from "next/navigation";

const SingleBlog = ({ params, searchParams }) => {
    console.log(params.segments);
    const [year, id] = params.segments || [];
    const params2 = useParams();
    const searchParams2 = useSearchParams();

    // console.log(params2.segments.split("/"), searchParams2.get("title"))

    return (
        <div>
            <h2>This is SingleBlog page {year || new Date().getFullYear()} for {id}</h2>
            <br />
            {searchParams.title}
        </div>
    );
};

export default SingleBlog;