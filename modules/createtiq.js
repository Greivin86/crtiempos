//create TIQ string
export function tiq(length) {
    const result = Math.random().toString(16).substring(2, 8) + Math.random().toString(16).substring(2, 8);
    const tiq = "TIQ-" + result;
    return tiq;
}