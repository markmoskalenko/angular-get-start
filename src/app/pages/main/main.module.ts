import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MainComponent} from './main.component';
import {MainRoutingModule} from './main-routing.module';
import {FilterModule} from '../../ui/filter/filter.module';
import {LogoModule} from '../../ui/logo/logo.module';
import {HeaderModule} from '../../ui/header/header.module';
import {FooterModule} from '../../ui/footer/footer.module';

@NgModule({
  declarations: [MainComponent],
  imports: [
    CommonModule,
    MainRoutingModule,
    FilterModule,
    HeaderModule,
    FooterModule,
  ]
})
export class MainModule {
}
