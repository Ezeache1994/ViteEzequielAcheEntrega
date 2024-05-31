export const logDonationDetails = (donation) => {
    console.log("Datos del elemento añadido al carrito:", donation);
    console.log(donation.product.description);
    console.log("Cantidad:", donation.quantity);
    console.log("Monto donado:", donation.quantity);
  };