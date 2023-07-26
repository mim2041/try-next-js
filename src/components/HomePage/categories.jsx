import getAllCategories from "@/utils/getAllCategories";
import SingleCategory from "./SingleCategory";

const Categories = async () => {
    const categories = await getAllCategories();

    return (
        <div>
            <h1>Categories</h1>
            <div className="container mx-auto grid gap-4 grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                {
                    categories.map(category => <SingleCategory 
                        key={category.id} category={category}/>)
                }
            </div>
        </div>
    );
};

export default Categories;