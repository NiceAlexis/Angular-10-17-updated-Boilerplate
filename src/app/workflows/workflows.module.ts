import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { WorkflowListComponent } from './list.component';

const routes: Routes = [
    { path: '', component: WorkflowListComponent },

];

@NgModule({
    declarations: [
        WorkflowListComponent,
    ],
    imports: [
        CommonModule,
        FormsModule,
        RouterModule.forChild(routes)
    ]
})
export class WorkflowsModule { }
