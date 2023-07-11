import { inspect } from "../decorators/inspect.js";
import { logarTempoDeExecucao } from "../decorators/logar-tempo-de-execucao.js";

export abstract class View<T> {

    
    protected elemento: HTMLElement;


    constructor(selector: string, ){
        const elemento = document.querySelector(selector);

        if(elemento){
            this.elemento = elemento as HTMLElement;
        }
        else{
            throw new Error(`Selector ${selector} não existe no DOM`);
            
        }
    }

    protected abstract template(model: T): string;


    @inspect
    @logarTempoDeExecucao(true)
    update(model: T): void {
        
        let template = this.template(model);
        
        this.elemento.innerHTML = template;
    }


}