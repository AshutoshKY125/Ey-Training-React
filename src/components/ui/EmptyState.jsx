/**
 * TODO BN-701 - EmptyState (empty cart, no search results, no orders, load errors)
 * Props: icon (emoji), title, message, action (any JSX, e.g. a Button), tone "neutral" | "error"
 * CSS: empty-state, empty-<tone>, empty-icon
 */
/** Friendly placeholder for empty lists, no results and errors. */

function EmptyState({ icon = "🛒", title, message, action, tone = "neutral" }) {
return (
<div className={`empty-state empty-${tone}`}>
<div className="empty-icon" aria-hidden="true">{icon}</div>
<h3>{title}</h3>
{message && <p>{message}</p>}
{action}
</div>
);
}
export default EmptyState;