export function domInjector(selector) {
    return function (target, propertyKey) {
        let elemento = null;
        const getter = function () {
            if (!elemento) {
                elemento = document.querySelector(selector);
                console.log(` injetando getter na propertie ${propertyKey}`);
            }
            return elemento;
        };
        Object.defineProperty(target, propertyKey, { get: getter });
    };
}
