/**
 * TODO BN-701 - PriceTag
 * Props: price (number), mrp (number), size "sm" | "md"
 * Show the selling price; show the MRP struck through ONLY when mrp > price.
 * CSS: price-tag, price-<size>, price-now, price-mrp
 */

import { formatPrice } from "../../utils/format";
/** Selling price with the MRP struck through (MRP is hidden when there is no discount). */
function PriceTag({ price, mrp, size = "md" }) {
return (
<span className={`price-tag price-${size}`}>
<span className="price-now">{formatPrice(price)}</span>
{mrp > price && <s className="price-mrp">{formatPrice(mrp)}</s>}
</span>
);
}
export default PriceTag;
