import {useState} from 'react';

const Home  = () => {
 const [blogs, setBlogs] = useState([
    {title: 'My new website', body: 'bulabalu ....', author: 'meggie', id: 1},
    {title: 'Marriage ceremony', body: 'lorem ipsum...', author: 'favor', id: 2},
    {title: 'fashon trends', body:'lorem ipsum', author: 'courage', id: 3}
 ]);
    
    return ( 
        <div className="home">
            {blogs.map((blog) => (
                <div className= "blog-preview" key={blog.id}>
                    <h2> {blog.title} </h2>
                    <p>Written by {blog.author} </p>
                </div>
             ))}
    
        </div>
     );
    
}
 
export default Home ;