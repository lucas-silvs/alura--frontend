export function domInjector (selector: string) {

    return function(target: any,propertyKey: string) {

        let elemento: HTMLElement | null = null;
        const getter = function() {
            if(!elemento) {
                elemento = <HTMLElement>document.querySelector(selector)
                console.log(` injetando getter na propertie ${propertyKey}`)

            }
            return elemento;
            /*
            const elemento = document.querySelector(selector);
            console.log(`chamando getter na propertie ${propertyKey}`)
            return elemento;
            */
        }

        Object.defineProperty(
            target, 
            propertyKey, 
            { get: getter }
            );
    }
}