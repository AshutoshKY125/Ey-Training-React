/**
 * TODO BN-402 - OptionCards: radio-button group rendered as cards (used for slots AND payment)
 * Props: name, options [{ id, label, detail, meta }], value, onChange(id), disabledIds { [id]: "reason" }
 * - each card is a <label> containing <input type="radio">
 * - selected card gets class "selected"; disabled card gets "disabled" and shows the reason instead of detail
 * CSS: option-cards, option-card, selected, disabled, option-text, option-meta
 */


/**
* A group of selectable cards that behaves like radio buttons.
* Used for delivery slots AND payment methods (one component, two uses).
* options: [{ id, label, detail, meta }] disabledIds: { [id]: "reason" }
*/
function OptionCards({ name, options, value, onChange, disabledIds = {} }) {
return (
<div className="option-cards" role="radiogroup" aria-label={name}>
{options.map((option) => {
const reason = disabledIds[option.id];
const selected = option.id === value;
return (
<label key={option.id} className={["option-card", selected ? "selected" : "", reason ? "disabled" : ""].join(" ")}>
<input
type="radio"
name={name}
value={option.id}
checked={selected}
disabled={Boolean(reason)}
onChange={() => onChange(option.id)}
/>
<span className="option-text">
<b>{option.label}</b>
<small>{reason || option.detail}</small>
</span>
{option.meta && <span className="option-meta">{option.meta}</span>}
</label>
);
})}
</div>
);
}
export default OptionCards;

