import {Component, ContentChildren, QueryList, OnInit, ContentChild} from '@angular/core';
import { PaneDirective } from '../directives/pane.directive';



@Component({
  selector: 'app-tab',
  templateUrl: './tab.component.html',
  styleUrls: ['./tab.component.less']
})
export class TabComponent implements OnInit {

  // @ContentChildren(PaneDirective) topLevelPanes : QueryList<PaneDirective>;
  // @ContentChildren(PaneDirective, {descendants: true}) arbitraryNestedPanes : QueryList<PaneDirective>;
  @ContentChild(PaneDirective) pane !: PaneDirective;


  // get serializedPanes(): string {
  //   return this.topLevelPanes ? this.topLevelPanes.map(p => p.id).join(', ') : '';
  // }
  // get serializedNestedPanes(): string {
  //   return this.arbitraryNestedPanes ? this.arbitraryNestedPanes.map(p => p.id).join(', ') : '';
  // }

  constructor() { }

  ngOnInit() {
  }

}
