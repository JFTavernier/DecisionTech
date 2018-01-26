import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './components/app/app.component';
import { DealsGridComponent } from './components/deals_grid/deals_grid.component';
import { DealsFiltersComponent } from './components/deals_filters/deals_filters.component';


@NgModule({
    declarations: [
        AppComponent,
        DealsGridComponent,
        DealsFiltersComponent
    ],
    imports: [
        CommonModule,
        HttpModule,
        FormsModule,
        RouterModule.forRoot([
            { path: '', redirectTo: 'home', pathMatch: 'full' },
            { path: '**', redirectTo: 'home' }
        ])
    ]
})
export class AppModuleShared {
}
