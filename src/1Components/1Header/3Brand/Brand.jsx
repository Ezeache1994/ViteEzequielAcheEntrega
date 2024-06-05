import { Link } from "react-router-dom";
import "./Brand.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faLeaf} from '@fortawesome/free-solid-svg-icons';
export default function Brand(){
    return(
        <Link to={"./"}>
        <h1 className="Brand">
        <FontAwesomeIcon icon={faLeaf} /> HaloGive
        </h1>
        </Link>
    )
}





