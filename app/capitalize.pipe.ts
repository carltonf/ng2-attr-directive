import {Pipe} from 'angular2/core';

@Pipe({name: 'capitalize'})
export class CapitalizePipe {
  capitalize(value) {
    return value.charAt(0).toUpperCase() + value.slice(1);
  }

  transform(value):string {
    return this.capitalize(value);
  }
}