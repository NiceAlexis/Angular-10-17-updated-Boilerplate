import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'app-employee-transfer',
    templateUrl: './transfer.component.html',
})
export class TransferComponent {
    @Input() showModal: boolean = false;
    @Input() selectedEmployee: any = null;
    @Input() departments: any[] = [];

    @Output() cancelEvent = new EventEmitter<void>();
    @Output() transferEvent = new EventEmitter<{ accountId: number, departmentId: number }>();

    departmentId: number = 0;

    ngOnChanges(): void {
        if (this.selectedEmployee) {
            this.departmentId = this.selectedEmployee.departmentId;
        }
    }

    transfer(): void {
        if (this.selectedEmployee?.accountId && this.departmentId) {
            this.transferEvent.emit({ accountId: this.selectedEmployee.accountId, departmentId: this.departmentId });
        }
    }

    cancel(): void {
        this.cancelEvent.emit();
    }
}
