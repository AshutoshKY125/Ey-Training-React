/**
 * TODO BN-701 - Reusable Button
 * Props:
 *   variant   "primary" | "secondary" | "ghost" | "danger"   (default "primary")
 *   size      "sm" | "md" | "lg"                              (default "md")
 *   fullWidth boolean   -> adds class "btn-block"
 *   isLoading boolean   -> shows <span className="spinner" /> and disables the button
 *   children, ...rest   -> rest (onClick, type, disabled, aria-label...) goes onto <button>
 * CSS classes available: btn, btn-primary, btn-secondary, btn-ghost, btn-danger, btn-sm, btn-md, btn-lg, btn-block, spinner
 */
function Button({ variant = "primary", size = "md", fullWidth = false, isLoading = false, disabled, children, ...rest }) {
const className = ["btn", `btn-${variant}`, `btn-${size}`, fullWidth ? "btn-block" : ""].join(" ").trim();
return (
<button className={className} disabled={disabled || isLoading} aria-busy={isLoading} {...rest}>
{isLoading && <span className="spinner" aria-hidden="true" />}
{children}
</button>
);
}
export default Button;
