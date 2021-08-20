import { Directive, ElementRef, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Directive({
  selector: '[error-msg]'
})
export class ErrorMsgDirective implements OnInit, OnChanges{

  private _color:string = 'red';
  private _mensaje:string = 'Este campo es requerido';

  htmlElement:ElementRef<HTMLElement>;
  
  //@Input() color:string = 'red';
  @Input() set color(value:string) {
    //this.htmlElement.nativeElement.style.color = value;
    this._color = value;
    this.setColor();
  }
  
  //@Input() mensaje:string = 'Este campo es requerido';
  @Input() set mensaje(value:string) {
    //console.log(value);
    //this.htmlElement.nativeElement.innerHTML = value;
    this._mensaje = value;
    this.setMessage();
  }

  @Input() set valido(valor: boolean) {
    valor ? this.htmlElement.nativeElement.classList.add("hidden") : this.htmlElement.nativeElement.classList.remove("hidden");
  }

  constructor(  
    private el:ElementRef<HTMLElement>
  ) {
    console.log("constructor directive");
    // console.log(el);
    // el.nativeElement.style.color = 'red';
    this.htmlElement = el;
  }

  ngOnChanges(changes: SimpleChanges): void {
    //console.log(changes);
    // if (changes.mensaje) {
    //   const mensaje = changes.mensaje.currentValue;
    //   this.htmlElement.nativeElement.innerHTML = mensaje;
    // }
    //console.log(mensaje);
    // if (changes.color) {
    //   const color = changes.color.currentValue;
    //   this.htmlElement.nativeElement.style.color = color;
    // }
  }

  ngOnInit(): void {
    //console.log("ngOnInit directive");
    // console.log(this.color);
    // console.log(this.mensaje);
    this.setEstilo();
    
    this.setColor();
    this.setMessage();
  }

  setEstilo():void {
    this.htmlElement.nativeElement.classList.add('form-text');
  }

  setColor():void {
    this.htmlElement.nativeElement.style.color = this._color;
  }

  setMessage():void {
    this.htmlElement.nativeElement.innerHTML = this._mensaje;
  }

}
