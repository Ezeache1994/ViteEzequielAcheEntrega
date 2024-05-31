import { useParams } from "react-router-dom";
import useProductById from "../../5CustomHoock/UseDonationsBy/UseDonationsByID";
import DonationDetail from "../DonationDetail/DonationDetail";

export default function DonationDetailContainer() {
  const params = useParams();
  const { productId } = params;
  const { loading, product } = useProductById(productId);

  if (loading) {
    return <h1>Cargando...</h1>;
  }

  if (!product) {
    return <h1>Producto no encontrado</h1>;
  }

  return (
    <div>
      <DonationDetail donation={product} />
    </div>
  );
}








