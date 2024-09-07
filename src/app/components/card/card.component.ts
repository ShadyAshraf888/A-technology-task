import { Component } from '@angular/core';

@Component({
  selector: 'A-tech-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent {
  copyText() {
    const textToCopy: any = document.getElementById(
      'textToCopy'
    ) as HTMLDivElement;
    console.log(textToCopy);

    navigator.clipboard
      .writeText(textToCopy?.textContent)
      .then(() => {
        alert('Text copied to clipboard!');
      })
      .catch((err) => {
        console.error('Failed to copy text: ', err);
      });
  }
}
