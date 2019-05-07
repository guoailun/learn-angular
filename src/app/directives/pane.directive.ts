import { Directive, Input, NgModule } from '@angular/core';

@Directive({
  selector: 'appPane'
})

export class PaneDirective {
  @Input() id !: string;
  constructor() { }
}


@NgModule({
  imports: [],
  exports: [PaneDirective],
  declarations: [PaneDirective]
})
export class PaneDirectiveModule {}

