/**
 * TODO BN-301 - useState that survives a page refresh
 * 1. Initial value: read localStorage.getItem(key) ONCE (pass a function to useState),
 *    JSON.parse it, fall back to initialValue if missing or invalid (try/catch).
 * 2. useEffect on [key, value]: localStorage.setItem(key, JSON.stringify(value)) inside try/catch.
 * 3. return [value, setValue]
 * Until this is done the app works, but nothing is saved.
 */

import { useEffect, useState } from "react";
/**
* useState that is saved to localStorage, so the value survives a page refresh.
* Usage: const [cart, setCart] = useLocalStorage("bn-cart", []);
*/
export function useLocalStorage(key, initialValue) {
const [value, setValue] = useState(() => {
try {
const saved = localStorage.getItem(key);
return saved !== null ? JSON.parse(saved) : initialValue;
} catch {
return initialValue;
}
});
useEffect(() => {
try {
localStorage.setItem(key, JSON.stringify(value));
} catch {
// storage full or blocked (private mode): the app keeps working in memory
}
}, [key, value]);
return [value, setValue];
}