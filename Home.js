import {useState} from 'react';
import BlogList from './BlogList';

const Home  = () => {
 const [blogs, setBlogs] = useState([
    {title: 'My new website', body: 'bulabalu ....', author: 'meggie', id: 1},
    {title: 'Marriage ceremony', body: 'lorem ipsum...', author: 'favor', id: 2},
    {title: 'fashon trends', body:'lorem ipsum', author: 'courage', id: 3}
 ]);
    
    return ( 
        <div className="home">
            <BlogList blogs={blogs} title='Result Oriented engineer!' />
           
        </div>
     );
    
}
 
export default Home ;