
import loadBlogsData from "@/utils/loadBlogsData";
import Link from "next/link";
import { useRouter } from "next/navigation";

export const metadata = {
    title: 'Next Hero | Blog',
    description: 'Welcome to Next JS',
}

// const blogs = [
//     {
//         id: 1,
//         year: 2016,
//         title: "title 1",
//     },
//     {
//         id: 2,
//         year: 2017,
//         title: "title 2",
//     },
//     {
//         id: 3,
//         year: 2018,
//         title: "title 3",
//     },
//     {
//         id: 4,
//         year: 2019,
//         title: "title 4",
//     },
// ]

const BlogPage = async() => {
    // const router = useRouter();
    const blogs = await loadBlogsData();

    return (
        <div>
            <h1>BlogPage</h1>
            <div className="container mx-auto">
                {
                    blogs.map(({id, body, title}) => <div
                     key={id} className="border border-blue-500 p-2 my-2"
                    >
                        <h2>{title}</h2>
                        <p>{body}</p>
                        <Link className="inline-block m-5" href={`/blogs/${id}`}>
                            <button className="text-white px-2 py-1 bg-blue-500">Details</button>
                        </Link>
                    </div>)
                }
            </div>
        </div>
    );
};

export default BlogPage;