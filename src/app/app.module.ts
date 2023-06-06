import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { ChooseLetterComponent } from './choose-letter/choose-letter.component';
import { AppRoutingModule } from './app-routing.module';
import { BoardComponent } from './board/board.component';
import { PlayersComponent } from './players/players.component';
import { WinModalComponent } from './win-modal/win-modal.component';
import { RestartModalComponent } from './restart-modal/restart-modal.component';
import { TieModalComponent } from './tie-modal/tie-modal.component';

@NgModule({
  declarations: [
    AppComponent,
    ChooseLetterComponent,
    BoardComponent,
    PlayersComponent,
    WinModalComponent,
    RestartModalComponent,
    TieModalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
