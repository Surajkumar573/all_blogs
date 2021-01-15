import '../styles/allBlogs.css';
import Categories from '../components/Categories';
import Card from '../components/Card';
import SearchBar from '../components/SearchBar';
import Profile from '../components/Profile';
import Compose from '../components/Compose';
import {Blog_arr} from '../components/Data';


function fun1(item)
{
    return(
        <Card item = {item}/>
    )
}

function allblogs()
{
    return(
        <>

        <div className = "header"> 
        
            <Categories/>

            <Compose/>

            <SearchBar/>

            <Profile/>

        </div>
        
        
        <div className = "cards_container">
            {Blog_arr.map(fun1)}
        </div>
        
        </>
    )
}

export default allblogs;