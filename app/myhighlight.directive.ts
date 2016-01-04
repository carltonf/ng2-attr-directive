import {Directive, ElementRef, Renderer, Input, OnInit} from 'angular2/core';
@Directive({
  // NOTE: brackets can NOT be omitted
  selector: '[myHighlight]',
  host: {
    '(mouseenter)': 'onMouseEnter()',
    '(mouseleave)': 'onMouseLeave()'
  },
  inputs: ['_setHLColor:myHighlight', '_defaultHLColor:defaultColor']
})
export class MyHighlightDirective{
  private _setHLColor:string;
  private _defaultHLColor:string;
  private FALLBACK_COLOR = 'yellow';
  private SUPPORTED_COLORS = ['green', 'yellow', 'cyan', 'steelblue'];
  // `highlightColor` is the color for highlighting, i.e. the data behind the
  // view.
  public get _highlightColor(){
    return (this.SUPPORTED_COLORS.indexOf(this._setHLColor) > -1)
      ? this._setHLColor
      : (this.SUPPORTED_COLORS.indexOf(this._defaultHLColor) > -1)
      ? this._defaultHLColor
      : this.FALLBACK_COLOR;
  }

  constructor(private el: ElementRef, private renderer: Renderer) {
  }

  private _highlight(color: string) {
    this.renderer.setElementStyle(this.el, 'backgroundColor', color);
  }
  onMouseEnter() {
    this._highlight(this._highlightColor);
  }

  onMouseLeave() {
    this._highlight(null);
  }
}


