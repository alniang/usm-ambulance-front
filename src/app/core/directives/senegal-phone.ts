import { Directive, ElementRef, HostListener, inject } from '@angular/core';

@Directive({
  selector: '[appSenegalPhone]'
})
export class SenegalPhone {

  private validPrefixes = '+221';
  private el = inject(ElementRef);

  @HostListener('focus')
  onFocus(): void {
    const input = this.el.nativeElement as HTMLInputElement;

    if (!input) return;

    if (!input.value.startsWith(this.validPrefixes)) {
      input.value = this.validPrefixes + input.value.replace(/^0+/, '');
    }
  }

  @HostListener('input', ['$event'])
  onInput(event: Event): void {
    const input = this.el.nativeElement;
    if (!input) return;

    let value = input.value;

    // INTERDIRE LES "+" APRÈS LE DÉBUT
    value = value.replace(/(?!^)\+/g, '');

    // Nettoyer les chiffres après le préfixe
    let numberPart = value.replace(this.validPrefixes, '').replace(/\D/g, '');

    // Limiter à 9 chiffres
    numberPart = numberPart.slice(0, 9);

    // Reformater
    let formatted = this.validPrefixes;

    if (numberPart.length > 0) {
      formatted += ' ' + numberPart.slice(0, 2);
    }
    if (numberPart.length > 2) {
      formatted += ' ' + numberPart.slice(2, 5);
    }
    if (numberPart.length > 5) {
      formatted += ' ' + numberPart.slice(5, 7);
    }
    if (numberPart.length > 7) {
      formatted += ' ' + numberPart.slice(7, 9);
    }

    input.value = formatted;
    this.placeCaretAtEnd(input);
  }


  // Facultatif : place le curseur à la fin
  private placeCaretAtEnd(input: HTMLInputElement) {
    setTimeout(() => {
      input.selectionStart = input.value.length;
      input.selectionEnd = input.value.length;
    });
  }

}
