import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SquareComponent } from './components/square/square.component';
import { BoardComponent } from './components/board/board.component';
import { GridAddBtnComponent } from './components/grid-add-btn/grid-add-btn.component';
import { ToolboxComponent } from './components/toolbox/toolbox.component';
import { ToolboxOptionComponent } from './components/toolbox-option/toolbox-option.component';

import { StoreModule } from '@ngrx/store';
import { toolReducer } from './shared/tools.reducer';
import { pipeReducer } from './shared/pipes.reducer';

@NgModule({
  declarations: [
    AppComponent,
    SquareComponent,
    BoardComponent,
    GridAddBtnComponent,
    ToolboxComponent,
    ToolboxOptionComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot({
      tools: toolReducer,
      pipes: pipeReducer,
    }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
