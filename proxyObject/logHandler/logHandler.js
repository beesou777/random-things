const logHandler = {
    /**
     * Logs a message when a property is gotten from the proxy target and
     * returns the gotten value.
     *
     * @param {Object} target - The target object.
     * @param {string} prop - The property name.
     * @param {Object} receiver - The receiver of the property access.
     * @returns {any} The value of the gotten property.
     */
    get(target, prop,receiver) {
        console.log(`get ${prop} from receiver:`,receiver);
        return Reflect.get(...arguments);
    },
    set(target, prop, value) {
        console.log(`set ${prop} to ${value}`);
        return Reflect.set(...arguments);
    }
}

const obj = new Proxy({}, logHandler);
obj.a = 1 // set a to 1
obj.a // get a from receiver: { a: 1 }
obj.a = 2 // set a to 2
obj.a // get a from receiver: { a: 2 }
console.log(obj) // { a: 2 }




