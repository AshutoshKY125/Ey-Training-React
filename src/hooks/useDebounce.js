/**
 * TODO BN-204 - Return `value` only after it has not changed for `delay` ms.
 * useState for the debounced value + useEffect with setTimeout, and clearTimeout in the cleanup.
 * Until this is done, search filters on every key press.
 */
import { useEffect, useState } from "react";
/**
* Returns `value` only after it has stopped changing for `delay` ms.
* Used by search so filtering runs once after typing pauses, not on every key press.
*/
export function useDebounce(value, delay = 300) {
const [debounced, setDebounced] = useState(value);
useEffect(() => {
const id = setTimeout(() => setDebounced(value), delay);
return () => clearTimeout(id);
}, [value, delay]);
return debounced;
}

