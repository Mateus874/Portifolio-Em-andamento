import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ResumoComponent } from './resumo/resumo.component';
import { HttpClientModule } from '@angular/common/http';
import { PortifolioComponent } from './portifolio/portifolio.component'
 
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ResumoComponent,
    PortifolioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

