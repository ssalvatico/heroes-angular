import { Component, inject, input } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Hero } from '../../interfaces/hero.interface';

@Component({
  selector: 'app-confirm-dialog',
  standalone: false,
  template: `
  <h2 mat-dialog-title>Eliminar héroe</h2>
  <mat-dialog-content>
    <span>Esta seguro que quiere eliminar a {{ data.superhero }}?</span>
    <br>
    <small>Este proceso NO es reversible.</small>
  </mat-dialog-content>
  <mat-dialog-actions>
    <button mat-flat-button mat-dialog-close (click)="onNoClick()">No</button>
    <span class="spacer"></span>
    <button matButton mat-dialog-close (click)="onConfirm()" cdkFocusInitial>Sí</button>
  </mat-dialog-actions>
  `,
  styles: `
    :host {
      display: block;
    }
  `,
})
export class ConfirmDialogComponent {

  public hero = input<string>();
  readonly dialogRef = inject(MatDialogRef<ConfirmDialogComponent>);
  protected readonly data:Hero = inject(MAT_DIALOG_DATA);

  onNoClick(): void {
    this.dialogRef.close(false);
  }

  onConfirm(): void {
    this.dialogRef.close(true);
  }
  
}