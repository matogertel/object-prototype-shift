 /*
 * Similar to Array.shift but for objects.
 * Basicaly, delete the first property of the object and return its value.
 * 
 */
if (!Object.prototype.shift) {
    Object.prototype.shift = function() {
        for (prop in this) {
            if (typeof(prop) !== 'function') {
                val = this[prop];
                break;
            }
        }
        delete(this[prop]);
        return val;
    }
}