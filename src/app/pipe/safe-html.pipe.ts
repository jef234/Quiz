import { Pipe, PipeTransform } from '@angular/core';

const element = document.createElement('div');

@Pipe({ name: 'safeHtml' })
export class SafeHtmlPipe implements PipeTransform {
  transform(str: any) {
    element.innerHTML = str;
    return element.textContent;
  }
}
