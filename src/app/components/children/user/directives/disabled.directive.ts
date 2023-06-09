import { Directive, HostBinding, Input, OnChanges } from '@angular/core';

@Directive({
  selector: '[gameFieldDisabled]'
})
export class DisabledDirective implements OnChanges{
  @Input() public counts!: number | null;
  @Input() public position!: number;
  @HostBinding('style.pointer-events') private _pointerEvents!: string;

  public ngOnChanges(): void {
    if (<number>this.counts !== this.position) {
      this._pointerEvents = 'none';
    }
    else {
      this._pointerEvents = 'auto';
    }
  }
}
