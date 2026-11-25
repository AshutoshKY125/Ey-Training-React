/**
 * TODO BN-304 - Coupon input + list of offers
 * Props: offers [{ coupon, result: { ok, discount, reason } }], appliedCode, onApply(code) -> { ok, reason }, onRemove
 * Local state: typed code, error message
 * - form submit (preventDefault): call onApply(code.trim().toUpperCase()); show result.reason on failure
 * - each offer shows code, title, and either "You save ₹N" or the reason it is unavailable
 * - Apply disabled when !result.ok; the applied coupon shows "Remove" instead
 * CSS: coupons, coupon-form, coupon-list, coupon, unavailable, ok-text, muted, field-error
 */

import { useState } from "react";
import Button from "../../components/ui/Button";
/**
* Enter a code or pick from the list. Each coupon shows whether it is usable right now and why not.
* offers: [{ coupon, result: { ok, discount, reason } }]
*/
function CouponPicker({ offers, appliedCode, onApply, onRemove }) {
const [code, setCode] = useState("");
const [error, setError] = useState("");
function handleSubmit(event) {
event.preventDefault();
const result = onApply(code.trim().toUpperCase());
if (result.ok) {
setCode("");
setError("");
} else {
setError(result.reason);
}
}
return (
<div className="coupons">
<h4>Coupons & offers</h4>
<form className="coupon-form" onSubmit={handleSubmit}>
<input
placeholder="Enter coupon code"
value={code}
onChange={(e) => { setCode(e.target.value); setError(""); }}
aria-label="Coupon code"
/>
<Button type="submit" variant="secondary" size="sm" disabled={!code.trim()}>Apply</Button>
</form>
{error && <p className="field-error">{error}</p>}
<ul className="coupon-list">
{offers.map(({ coupon, result }) => {
const isApplied = coupon.code === appliedCode;
return (
<li key={coupon.code} className={result.ok ? "coupon" : "coupon unavailable"}>
<div>
<code>{coupon.code}</code>
<p>{coupon.title}</p>
<small className={result.ok ? "ok-text" : "muted"}>
{result.ok ? `You save ₹${result.discount}` : result.reason}
</small>
</div>
{isApplied ? (
<Button variant="ghost" size="sm" onClick={onRemove}>Remove</Button>
) : (
<Button variant="ghost" size="sm" disabled={!result.ok} onClick={() => onApply(coupon.code)}>Apply</Button>
)}
</li>
);
})}
</ul>
</div>
);
}
export default CouponPicker;
