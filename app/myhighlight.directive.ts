import {Directive, ElementRef, Renderer, Input, OnInit} from 'angular2/core';
@Directive({
  // NOTE: brackets can NOT be omitted
  selector: '[myHighlight]',
  host: {
    '(mouseenter)': 'onMouseEnter()',
    '(mouseleave)': 'onMouseLeave()'
  },
  inputs: ['highlightColor:myHighlight']
})
export class MyHighlightDirective implements OnInit {
  public highlightColor:string;

  // another way to have a default value, note an internal variable
  // `_defaultHLColor` is needed.
  private _defaultHLColor:string = 'yellow';
  @Input() set defaultColor(colorName:string) {
    this._defaultHLColor = colorName || this._defaultHLColor;
  }
  constructor(private el: ElementRef, private renderer: Renderer) {
  }
  ngOnInit(){
    // NOTE: have to be here after defaultColor has been set.
    this.highlightColor = this.highlightColor || this._defaultHLColor;
  }
  private _highlight(color: string) {
    this.renderer.setElementStyle(this.el, 'backgroundColor', color);
  }
  onMouseEnter() {
    this._highlight(this.highlightColor);
  }

  onMouseLeave() {
    this._highlight(null);
  }
}


