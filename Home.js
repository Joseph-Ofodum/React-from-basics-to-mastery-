import {useState} from 'react';

const Home  = () => {

   // let name = 'ekene';
   const [name, setNAme] = useState('Ekene');
   const [age, setAge] = useState(25);

    const handleClick = () => {
      setNAme('Greatest Java/React dev of all times')
      setAge('30')  
    }

    const clickMeAgain = (sayName)=> {
        console.log('hello ' + sayName);
    }
    return ( 
        <div className="home">
         <h2>Homepage</h2>
         <p> {name} is {age} </p>
         <button onClick={handleClick}>Click me</button>
        </div>
     );
}
 
export default Home ;