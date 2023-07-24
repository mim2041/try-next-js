

const SingleBlog = ({ params }) => {
    console.log(params.segments);
    const [year, id] = params.segments || [];
    return (
        <div>
            <h2>This is SingleBlog page {year || new Date().getFullYear()} for {id}</h2>
        </div>
    );
};

export default SingleBlog;