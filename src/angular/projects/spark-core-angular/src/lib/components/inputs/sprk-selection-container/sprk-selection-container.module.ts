import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { SparkSelectionContainerComponent } from './sprk-selection-container.component';

@NgModule({
  imports: [CommonModule, RouterModule, FormsModule, ReactiveFormsModule],
  declarations: [SparkSelectionContainerComponent],
  exports: [SparkSelectionContainerComponent]
})
export class SparkSelectionContainerModule {}
