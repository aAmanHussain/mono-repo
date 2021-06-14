import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { WkClassesLibComponent } from './wk-classes-lib.component';
import { ClassListComponent } from './components/class-list/class-list.component';
import { ClassListItemComponent } from './components/class-list-item/class-list-item.component';



@NgModule({
  declarations: [WkClassesLibComponent, ClassListComponent, ClassListItemComponent],
  imports: [
    CommonModule
  ],
  exports: [WkClassesLibComponent, ClassListComponent, ClassListItemComponent]
})
export class WkClassesLibModule { }
