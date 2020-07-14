import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { ToastrModule } from "ngx-toastr";
import { HttpClientModule } from "@angular/common/http";

import { SidebarModule } from "./sidebar/sidebar.module";
import { FooterModule } from "./shared/footer/footer.module";
import { NavbarModule } from "./shared/navbar/navbar.module";
import { FixedPluginModule } from "./shared/fixedplugin/fixedplugin.module";
import { AppComponent } from "./app.component";
import { AppRoutingModule } from "../app/app-routing.module";
import { AdminLayoutComponent } from "./layouts/admin-layout/admin-layout.component";
import { FormsModule } from "@angular/forms";
import { CartComponent } from "./pages/cart/cart.component";
import { ResponsePayUComponent } from "./pages/response-pay-u/response-pay-u.component";

@NgModule({
  declarations: [
    AppComponent,
    AdminLayoutComponent,
    CartComponent,
    ResponsePayUComponent,
  ],
  imports: [
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    SidebarModule,
    NavbarModule,
    FormsModule,
    ToastrModule.forRoot(),
    FooterModule,
    FixedPluginModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
