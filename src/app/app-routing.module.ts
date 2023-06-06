import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule,Routes } from '@angular/router';
import { ChooseLetterComponent } from './choose-letter/choose-letter.component';
import { BoardComponent } from './board/board.component';
const routes: Routes = [
 
]
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
