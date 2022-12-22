// const BlogList = (props) => {
//     const blogs = props.blogs;
//     const title = props.title;

//we can as well use destructuring to achieve thesame aim above
const BlogList = ({blogs, title}) => {
    return ( 
        <div className="blog-list"> 
        <h2>{title} </h2>
         {blogs.map((blog) => (
                <div className= "blog-preview" key={blog.id}>
                    <h2> {blog.title} </h2>
                    <p>Written by {blog.author} </p>
                </div>
             ))}
    
        </div>
     );
}
 
export default BlogList;