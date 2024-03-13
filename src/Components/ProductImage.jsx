const ProductImage = ({ imagenData, altText }) => {
  const [firstImage] = product.imagenData
    .replace(/[{""}]/g, "")
    .split(",")
    .map((img) => img.trim());
  return (
    <div className="product-images">
      {firstImage && (
        <img src={firstImage} alt={product.nombre} className="card-image" />
      )}
    </div>
  );
};

export default ProductImage;
