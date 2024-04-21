import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { LOCALE_ID, NgModule } from "@angular/core";

// Material section
import { MatButtonModule } from "@angular/material/button";
import { MatIconModule } from "@angular/material/icon";
import { MatMenuModule } from "@angular/material/menu";
import { MatSidenavModule } from "@angular/material/sidenav";
import { MatToolbarModule } from "@angular/material/toolbar";

// Routing
import { AppRoutingModule } from "./app.routing.module";
import { AppComponent } from "./app.component";

// Localization
import { registerLocaleData } from "@angular/common";
import localePl from "@angular/common/locales/pl";

registerLocaleData(localePl);

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,

    //Material
    BrowserAnimationsModule,
    MatButtonModule,
    MatIconModule,
    MatMenuModule,
    MatSidenavModule,
    MatToolbarModule
  ],
  providers: [
    {
      provide: LOCALE_ID,
      useValue: 'pl',
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
