import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Pipe({name: 'capitalize'})
export class CapitalizePipe implements PipeTransform {
  constructor(private sanitizer: DomSanitizer){}

  transform(html: any) {
    if (!html) {
      return html;
    } else {
      return html[0].toUpperCase() + html.slice(1).toLowerCase();
    }
  }
}