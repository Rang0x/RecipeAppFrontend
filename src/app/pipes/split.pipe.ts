import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'split',
})
export class SplitPipe implements PipeTransform {
  transform(value: any, separator: string = ','): string[] {
    return value.split(separator);
  }
}