import {useState} from 'react';
import BlogList from './BlogList';

const Home  = () => {
 const [blogs, setBlogs] = useState([
    {title: 'My new website', body: 'bulabalu ....', author: 'joe', id: 1},
    {title: 'Marriage ceremony', body: 'lorem ipsum...', author: 'favor', id: 2},
    {title: 'fashon trends', body:'lorem ipsum', author: 'joe', id: 3}
 ]);
    
    return ( 
        <div className="home">
            <BlogList blogs={blogs} title='All blogs' />
            <BlogList blogs={blogs.filter((blog)=> blog.author === 'joe')} title='joe' />

           
        </div>
     );
    
}
 
export default Home ;