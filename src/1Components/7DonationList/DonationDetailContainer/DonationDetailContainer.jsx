import { useParams } from "react-router-dom";
import useProductById from "../../5CustomHoock/UseDonationsBy/UseDonationsByID";
import DonationDetail from "../DonationDetail/DonationDetail";
import "./DonationDetailContainer.scss"

export default function DonationDetailContainer() {
  const params = useParams();
  const { productId } = params;
  const { loading, product } = useProductById(productId);

  if (loading) {
    return <div className="LoadingLogo">
    <h1 className="Loading">HaloGive
    </h1> 
    {/* Se repiten por razones esteticas para que cuando hagas scroll siempre se vea la palabra HaloGive */}
    <h1 className="Loading">HaloGive
    </h1>
    <h1 className="Loading">HaloGive
    </h1>
    <h1 className="Loading">HaloGive
    </h1>
    <h1 className="Loading">HaloGive
    </h1>
    <h1 className="Loading">HaloGive
    </h1>
    <h1 className="Loading">HaloGive
    </h1>
    <h1 className="Loading">HaloGive
    </h1>
    <h1 className="Loading">HaloGive
    </h1>
    <h1 className="Loading">HaloGive
    </h1>
    <h1 className="Loading">HaloGive
    </h1> 
    {/* Se repiten por razones esteticas para que cuando hagas scroll siempre se vea la palabra HaloGive */}
    </div>
    ;
  }

  if (!product) {
    return <h1 className="NoFind">Producto no encontrado</h1>;
  }

  return (
    <div>
      <DonationDetail donation={product} />
    </div>
  );
}








