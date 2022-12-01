import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TitleComponent } from './title/title.component';
import { DataBidingComponent } from './data-biding/data-biding.component';
import { DiretivasEstruturaisComponent } from './diretivas-estruturais/diretivas-estruturais.component';
import { DiretivasAtributosComponent } from './diretivas-atributos/diretivas-atributos.component';
import { SharedModule } from "./shared/shared.module";
import { FormComponent } from './form/form.component';
import { RotasComponent } from './rotas/rotas.component';
import { RoteamentoComponent } from './roteamento/roteamento.component';

@NgModule({
    declarations: [
        AppComponent,
        TitleComponent,
        DataBidingComponent,
        DiretivasEstruturaisComponent,
        DiretivasAtributosComponent,
        FormComponent,
        RotasComponent,
        RoteamentoComponent
    ],
    providers: [],
    bootstrap: [AppComponent],
    imports: [
        BrowserModule,
        AppRoutingModule,
        SharedModule
    ]
})
export class AppModule { }
