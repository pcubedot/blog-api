import Blog from "../models/blog.js"
export const createBlog = async (req, res) => {
    try {
        console.log(req.body);
        const blogData = new Blog(req.body);

        const savedBlog = await blogData.save();
        res.status(200).json({savedBlog});
    } catch (error){
        res.status(500).json({error: "Internal server error!"});
    }
}