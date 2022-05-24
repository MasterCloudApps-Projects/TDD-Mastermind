import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { BusService } from './common/bus';
import { CapitalizePipe } from './common/capitalize-pipe';
import { UIMaterialModule } from './ui-material.module';
import { AppComponent } from './ui/app/app.component';
import { BoardComponent, FinishElementsDialog } from './ui/board/board.component';
import { HomeComponent } from './ui/home/home.component';
import { MainMenuComponent } from './ui/home/menu/menu.component';
import { ProposalCombination } from './ui/ProposalCombination/proposalCombination.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    BoardComponent,
    ProposalCombination,
    FinishElementsDialog,
    MainMenuComponent,
    CapitalizePipe,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule, ReactiveFormsModule,
    FlexLayoutModule,
    AppRoutingModule,
    UIMaterialModule,
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
