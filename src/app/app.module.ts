import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { SomethingInterestingComponent } from "./something-interesting.component";

@NgModule({
  declarations: [AppComponent, SomethingInterestingComponent],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
