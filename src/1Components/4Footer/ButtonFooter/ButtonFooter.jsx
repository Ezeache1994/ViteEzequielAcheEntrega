import { Button } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import{faPhoneVolume} from '@fortawesome/free-solid-svg-icons';
import "./ButtonFooter.css"
import { Link } from "react-router-dom";

export default function ButtonFooter(){
    return(
        <div className="ButtonsFooter">
            <Link to={"/contact"}>
            <Button variant="success" size="lg" className="" >
            <FontAwesomeIcon icon={faPhoneVolume} /> Ponte en Contacto
            </Button>
            </Link>
        </div>
    )
}



