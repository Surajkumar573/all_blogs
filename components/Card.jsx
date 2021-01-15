import './Card.css';
import {Blog_arr} from './Data';

function Card(props)
{
    
    let date = 5, month = 1, year = 2020;

    return(
        <>
        <div className="card">
            <div className="image_box">
                <img src={props.item.image} alt="F"/>
            </div>
            <div className="content">
                <div className="title">
                    {props.item.title}
                </div>
  
                <div className="author">
                    <div className="profile_pic">
                        N
                    </div>
                    <div className="author_name">
                        {props.item.author_name}
                    </div>
                    <div className="date">
                        {date} / {month} / {year}
                    </div>
                </div>




            </div>
        </div>
        </>
    )
}

export default Card;