import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appEstiloPersonalizado1]'
})
export class EstiloPersonalizado1 {

  constructor(private el:ElementRef, private renderer:Renderer2) {
    renderer.setStyle(el.nativeElement, 'border', '1px solid black');
    renderer.setStyle(el.nativeElement, 'border-radius', '10px');
    renderer.setStyle(el.nativeElement, 'padding', '10px');
    renderer.setStyle(el.nativeElement, 'background-color', '#f3fbff');
  }
    
}

@Directive({
  selector: '[appEstiloPersonalizado2]'
})
export class EstiloPersonalizado2 {

  constructor(private el:ElementRef, private renderer:Renderer2) {
    renderer.setStyle(el.nativeElement, 'background-color', 'yellow');
  }
    
}