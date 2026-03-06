import { DOMAIN, PRODUCT_NAME } from "@site/src/constants";
import "./product-label.css";

const ProductLabel = () => (
  <a href={DOMAIN} target="_blank" className="product-label">
    {PRODUCT_NAME}
  </a>
);

export default ProductLabel;
