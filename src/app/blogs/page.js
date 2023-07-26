
import Link from "next/link";
import { useRouter } from "next/navigation";

export const metadata = {
    title: 'Next Hero | Blog',
    description: 'Welcome to Next JS',
}

const blogs = [
    {
        id: 1,
        year: 2016,
        title: "title 1",
    },
    {
        id: 2,
        year: 2017,
        title: "title 2",
    },
    {
        id: 3,
        year: 2018,
        title: "title 3",
    },
    {
        id: 4,
        year: 2019,
        title: "title 4",
    },
]

const BlogPage = () => {
    const router = useRouter();
    return (
        <div>
            <h1>BlogPage</h1>
            <div className="container mx-auto">
                {
                    blogs.map(({id, year, title}) => <Link
                    className="block border border-blue-500 p-2 my-2"
                        key={id}
                        href={{
                            pathname: `/blogs/${year}/${id}`,
                            query: {
                                title: title,
                            }
                        }}
                        // onClick={() => router.push(`/blogs/${year}/${id}?title=${title}`)}
                    >{title}</Link>)
                }
            </div>
        </div>
    );
};

export default BlogPage;