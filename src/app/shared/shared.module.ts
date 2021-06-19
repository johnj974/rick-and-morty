import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LinkPipe } from './pipes/link.pipe';

@NgModule({
  declarations: [LinkPipe],
  imports: [CommonModule],
  exports: [LinkPipe],
})
export class SharedModule {}
