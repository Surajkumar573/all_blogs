import  './Categories.css';
import Options from './Options';
function Categories() {
    return (

        <>

        <div className="location">
            <div className="hover wrapper1">

                <div className="location_name">HOME</div>
                
                <div className = "triangle"> 
                    <svg width="21" height="11" viewBox="0 0 21 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10.3923 18L20.7846 0H3.00407e-05L10.3923 18Z" fill="#0DA6C8"/></svg> 
                </div>
            </div>


            <div className="location_menu">
                <ul>
                    <li>
                        <Options/>
                    </li>
                    <li>
                        <Options/>
                    </li>
                    <li>
                        <Options/>
                    </li>
                </ul>
            </div>


        </div>

        </>
    )
}

export default Categories;