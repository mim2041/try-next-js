import loadBlogsData from "@/utils/loadBlogsData";
import loadSingleBlogData from "@/utils/loadSingleBlogData";
// import { useParams, useSearchParams } from "next/navigation";

export const generateMetadata = async ({params}) => {
    const {title} = await loadSingleBlogData(params.id);

    return {
        title: title
    }
}

export const generateStaticParams = async () => {
    const blogs = await loadBlogsData();

    return blogs.map((blog) => ({
        id: blog.id.toString()
    }))
}

const SingleBlog = async ({ params }) => {
    const {id, title, body} = await loadSingleBlogData(params.id);

    return (
        <div
                     key={id} className="border border-blue-500 p-2 my-2"
                    >
                        <h2>{id}. {title}</h2>
                        <p>{body}</p>
                    </div>
    );
};

export default SingleBlog;