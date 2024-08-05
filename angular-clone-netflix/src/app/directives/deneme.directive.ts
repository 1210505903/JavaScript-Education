import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appDeneme]',
  standalone: true
})
export class DenemeDirective {

  constructor(private templateRef: TemplateRef<any>,
              private viewContainerRef: ViewContainerRef
  ) { }
  @Input() set appDeneme(value: boolean){
    if(value==true)
      this.viewContainerRef.createEmbeddedView(this.templateRef)
    else
      this.viewContainerRef.clear();
  }

}
