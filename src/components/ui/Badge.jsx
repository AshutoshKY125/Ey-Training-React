/**
 * TODO BN-701 - Badge
 * Props: tone "green" | "yellow" | "red" | "blue" | "grey" (default "grey"), children
 * CSS: badge, badge-<tone>
 */

/** Small coloured label. tone: "green" | "yellow" | "red" | "blue" | "grey" */
function Badge({ tone = "grey", children }) {
return <span className={`badge badge-${tone}`}>{children}</span>;
}
export default Badge;
