import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './View/header/header.component';
import { FooterComponent } from './View/footer/footer.component';
import { CreateComponent } from './View/pensamentos/create/create.component';
import { FormsModule } from '@angular/forms';
import { ListComponent } from './View/pensamentos/list/list.component';
import { ThinkComponent } from './View/pensamentos/think/think.component';
import { HttpClientModule } from '@angular/common/http';
import { DeleteComponent } from './View/pensamentos/delete/delete.component';
import { UpdateComponent } from './View/pensamentos/update/update.component'

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    CreateComponent,
    ListComponent,
    ThinkComponent,
    DeleteComponent,
    UpdateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
