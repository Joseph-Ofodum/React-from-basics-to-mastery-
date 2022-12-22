import {useState} from 'react';
import BlogList from './BlogList';

const Home  = () => {
 const [blogs, setBlogs] = useState([
    {title: 'My new website', body: 'bulabalu ....', author: 'joe', id: 1},
    {title: 'Marriage ceremony', body: 'lorem ipsum...', author: 'favor', id: 2},
    {title: 'fashon trends', body:'lorem ipsum', author: 'joe', id: 3}
 ]);
        const deletehandler = (id) => {
            const newBlogs = blogs.filter(blog => blog.id !== id);
            setBlogs(newBlogs);
        }
    
    return ( 
        <div className="home">
            <BlogList blogs={blogs} title='All blogs'  deletehandler={deletehandler}/>
        </div>
     );
    
}
 
export default Home ;