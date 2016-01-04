import {Component, ViewEncapsulation} from 'angular2/core';
import {MyHighlightDirective} from './myhighlight.directive';
import {CapitalizePipe} from './capitalize.pipe';

@Component({
  encapsulation: ViewEncapsulation.Native,
  selector: 'my-app',
  moduleId: module.id,
  templateUrl: 'app.tpl.html',
  directives: [MyHighlightDirective],
  pipes: [CapitalizePipe],
})
export class AppComponent {
  public title = 'Attribute Directive Demo';
  public color:string;
}
