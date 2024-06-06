import "./Contact.css"
import Form from 'react-bootstrap/Form';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Contact(){
    return(
        <div >
        <div className="BannerContact-Contact">
        <h1 className="TextBanner">
            Ponte En Contacto Con Nuestro Equipo
        </h1>
        </div>
        <div className="Bootsrap-Form_Contact"> 
        <Form>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Direccion de Correo</Form.Label>
        <Form.Control type="email" placeholder="Nombre@Yahoo.com" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label>Dejanos Tus Consultas</Form.Label>
        <Form.Control as="textarea" rows={3} />
      </Form.Group>
    </Form>
        </div>
    </div>
    )
}