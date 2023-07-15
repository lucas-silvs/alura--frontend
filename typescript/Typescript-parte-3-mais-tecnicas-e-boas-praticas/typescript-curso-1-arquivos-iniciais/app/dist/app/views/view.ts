export abstract class View<T> {

    
    protected elemento: HTMLElement;

    private escape = false;

    constructor(selector: string, escape?: boolean){
        const elemento = document.querySelector(selector);

        if(elemento){
            this.elemento = elemento as HTMLElement;
        }
        else{
            throw new Error(`Selector ${selector} não existe no DOM`);
            
        }
        if(escape){
            this.escape = escape;
        }
    }

    protected abstract template(model: T): string;


    update(model: T): void {
        let template = this.template(model);
        
        if(this.escape){
            template = template
            .replace("/<script>[\s\S]*?<\/script>/", '');
        }

        this.elemento.innerHTML = template;
    }


}