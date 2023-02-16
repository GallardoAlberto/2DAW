import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appLakers]'
})
export class EstilosDirectiveLakers {

  constructor(private el:ElementRef, private renderer:Renderer2) {
    renderer.setStyle(el.nativeElement, 'max-width', '600px');
    renderer.setStyle(el.nativeElement, 'height', '120px');
    renderer.setStyle(el.nativeElement, 'background-position-x','10px');
    renderer.setStyle(el.nativeElement, 'background-position-y','10px');
    renderer.setStyle(el.nativeElement, 'background-repeat','no-repeat');
    renderer.setStyle(el.nativeElement, 'border-style','solid');
    renderer.setStyle(el.nativeElement, 'border-width','5px');
    renderer.setStyle(el.nativeElement, 'border-color','#552582');
    renderer.setStyle(el.nativeElement, 'margin-top','30px');
    renderer.setStyle(el.nativeElement, 'box-shadow','0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)');
  }
    
}

@Directive({
  selector: '[appCeltics]'
})
export class EstilosDirectiveCeltics {

  constructor(private el:ElementRef, private renderer:Renderer2) {
    renderer.setStyle(el.nativeElement, 'max-width', '600px');
    renderer.setStyle(el.nativeElement, 'height', '120px');
    renderer.setStyle(el.nativeElement, 'background-position-x','10px');
    renderer.setStyle(el.nativeElement, 'background-position-y','10px');
    renderer.setStyle(el.nativeElement, 'background-repeat','no-repeat');
    renderer.setStyle(el.nativeElement, 'border-style','solid');
    renderer.setStyle(el.nativeElement, 'border-width','5px');
    renderer.setStyle(el.nativeElement, 'border-color','#008348');
    renderer.setStyle(el.nativeElement, 'margin-top','30px');
    renderer.setStyle(el.nativeElement, 'box-shadow','0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)');
  }
    
}

@Directive({
  selector: '[appBulls]'
})
export class EstilosDirectiveBulls {

  constructor(private el:ElementRef, private renderer:Renderer2) {
    renderer.setStyle(el.nativeElement, 'max-width', '600px');
    renderer.setStyle(el.nativeElement, 'height', '120px');
    renderer.setStyle(el.nativeElement, 'background-position-x','10px');
    renderer.setStyle(el.nativeElement, 'background-position-y','10px');
    renderer.setStyle(el.nativeElement, 'background-repeat','no-repeat');
    renderer.setStyle(el.nativeElement, 'border-style','solid');
    renderer.setStyle(el.nativeElement, 'border-width','5px');
    renderer.setStyle(el.nativeElement, 'border-color','#CE1141');
    renderer.setStyle(el.nativeElement, 'margin-top','30px');
    renderer.setStyle(el.nativeElement, 'box-shadow','0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)');
  }
    
}
