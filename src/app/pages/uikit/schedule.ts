import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ConfirmationService, MessageService } from 'primeng/api';
import { InputTextModule } from 'primeng/inputtext';
import { MultiSelectModule } from 'primeng/multiselect';
import { SelectModule } from 'primeng/select';
import { SliderModule } from 'primeng/slider';
import { Table, TableModule } from 'primeng/table';
import { ProgressBarModule } from 'primeng/progressbar';
import { ToggleButtonModule } from 'primeng/togglebutton';
import { ToastModule } from 'primeng/toast';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { RatingModule } from 'primeng/rating';
import { RippleModule } from 'primeng/ripple';
import { InputIconModule } from 'primeng/inputicon';
import { IconFieldModule } from 'primeng/iconfield';
import { TagModule } from 'primeng/tag';
import { Customer, CustomerService, Representative } from '../service/customer.service';
import { Product, ProductService } from '../service/product.service';

interface expandedRows {
    [key: string]: boolean;
}

@Component({
    selector: 'app-table-demo',
    standalone: true,
    imports: [
        TableModule,
        MultiSelectModule,
        SelectModule,
        InputIconModule,
        TagModule,
        InputTextModule,
        SliderModule,
        ProgressBarModule,
        ToggleButtonModule,
        ToastModule,
        CommonModule,
        FormsModule,
        ButtonModule,
        RatingModule,
        RippleModule,
        IconFieldModule
    ],
    template: ` <div class="card">
        <div class="card">
            <div class="font-semibold text-xl mb-4">Schedule</div>
            <p-select [options]="category" [(ngModel)]="selectedCategory" optionLabel="name" placeholder="Select a Category" class="w-full md:w-56" />
            <p-table [value]="filteredAssignments" [tableStyle]="{ 'min-width': '50rem' }">
                <ng-template #header>
                    <tr>
                        <th>Name</th>
                        <th>Category</th>
                        <th>Due Date</th>
                    </tr>
                </ng-template>
                <ng-template #body let-assignment>
                    <tr>
                        <td>{{ assignment.name }}</td>
                        <td>{{ assignment.category }}</td>
                        <td>{{ assignment.dueDate }}</td>
                    </tr>
                </ng-template>
            </p-table>



            <!-- Message when no assignments are found -->
            <div *ngIf="filteredAssignments.length === 0" style="margin-top:20px;">
                No assignments found for the selected category.
            </div>
        </div>`,
    styles: `
        .p-datatable-frozen-tbody {
            font-weight: bold;
        }

        .p-datatable-scrollable .p-frozen-column {
            font-weight: bold;
        }
    `,
    providers: [ConfirmationService, MessageService, CustomerService, ProductService]
})
export class Schedule implements OnInit {
    customers1: Customer[] = [];

    customers2: Customer[] = [];

    customers3: Customer[] = [];

    selectedCustomers1: Customer[] = [];

    selectedCustomer: Customer = {};

    representatives: Representative[] = [];

    statuses: any[] = [];

    products: Product[] = [];

    rowGroupMetadata: any;

    expandedRows: expandedRows = {};

    activityValues: number[] = [0, 100];

    isExpanded: boolean = false;

    balanceFrozen: boolean = false;

    loading: boolean = true;

    @ViewChild('filter') filter!: ElementRef;

    constructor(
        private customerService: CustomerService,
        private productService: ProductService
    ) {}

    ngOnInit() {
        this.customerService.getCustomersLarge().then((customers) => {
            this.customers1 = customers;
            this.loading = false;

            // @ts-ignore
            this.customers1.forEach((customer) => (customer.date = new Date(customer.date)));
        });
        this.customerService.getCustomersMedium().then((customers) => (this.customers2 = customers));
        this.customerService.getCustomersLarge().then((customers) => (this.customers3 = customers));
        this.productService.getProductsWithOrdersSmall().then((data) => (this.products = data));

        this.representatives = [
            { name: 'Amy Elsner', image: 'amyelsner.png' },
            { name: 'Anna Fali', image: 'annafali.png' },
            { name: 'Asiya Javayant', image: 'asiyajavayant.png' },
            { name: 'Bernardo Dominic', image: 'bernardodominic.png' },
            { name: 'Elwin Sharvill', image: 'elwinsharvill.png' },
            { name: 'Ioni Bowcher', image: 'ionibowcher.png' },
            { name: 'Ivan Magalhaes', image: 'ivanmagalhaes.png' },
            { name: 'Onyama Limba', image: 'onyamalimba.png' },
            { name: 'Stephen Shaw', image: 'stephenshaw.png' },
            { name: 'XuXue Feng', image: 'xuxuefeng.png' }
        ];

        this.statuses = [
            { label: 'Unqualified', value: 'unqualified' },
            { label: 'Qualified', value: 'qualified' },
            { label: 'New', value: 'new' },
            { label: 'Negotiation', value: 'negotiation' },
            { label: 'Renewal', value: 'renewal' },
            { label: 'Proposal', value: 'proposal' }
        ];
    }

    onSort() {
        this.updateRowGroupMetaData();
    }

    updateRowGroupMetaData() {
        this.rowGroupMetadata = {};

        if (this.customers3) {
            for (let i = 0; i < this.customers3.length; i++) {
                const rowData = this.customers3[i];
                const representativeName = rowData?.representative?.name || '';

                if (i === 0) {
                    this.rowGroupMetadata[representativeName] = { index: 0, size: 1 };
                } else {
                    const previousRowData = this.customers3[i - 1];
                    const previousRowGroup = previousRowData?.representative?.name;
                    if (representativeName === previousRowGroup) {
                        this.rowGroupMetadata[representativeName].size++;
                    } else {
                        this.rowGroupMetadata[representativeName] = { index: i, size: 1 };
                    }
                }
            }
        }
    }

    expandAll() {
        if (!this.isExpanded) {
            this.products.forEach((product) => (product && product.name ? (this.expandedRows[product.name] = true) : ''));
        } else {
            this.expandedRows = {};
        }
        this.isExpanded = !this.isExpanded;
    }

    formatCurrency(value: number) {
        return value.toLocaleString('en-US', { style: 'currency', currency: 'USD' });
    }

    onGlobalFilter(table: Table, event: Event) {
        table.filterGlobal((event.target as HTMLInputElement).value, 'contains');
    }

    clear(table: Table) {
        table.clear();
        this.filter.nativeElement.value = '';
    }

    getSeverity(status: string) {
        switch (status) {
            case 'qualified':
            case 'instock':
            case 'INSTOCK':
            case 'DELIVERED':
            case 'delivered':
                return 'success';

            case 'negotiation':
            case 'lowstock':
            case 'LOWSTOCK':
            case 'PENDING':
            case 'pending':
                return 'warn';

            case 'unqualified':
            case 'outofstock':
            case 'OUTOFSTOCK':
            case 'CANCELLED':
            case 'cancelled':
                return 'danger';

            default:
                return 'info';
        }
    }

    calculateCustomerTotal(name: string) {
        let total = 0;

        if (this.customers2) {
            for (let customer of this.customers2) {
                if (customer.representative?.name === name) {
                    total++;
                }
            }
        }

        return total;
    }

    // List of assignments with their categories
  assignments = [
    { name: 'Module 1', category: 'Assignment', dueDate: '01/21/2025' },
    { name: 'Quiz 1', category: 'Quiz', dueDate: '01/28/2025' },
    { name: 'Module 2', category: 'Assignment', dueDate: '02/05/2025' },
    { name: 'Discussion 2', category: 'Discussion', dueDate: '02/05/2025' },
    { name: 'Module 3', category: 'Assignment', dueDate: '02/12/2025' },
    { name: 'Quiz 3', category: 'Quiz', dueDate: '02/19/2025' },
    { name: 'Module 4', category: 'Assignment', dueDate: '02/25/2025' },
    { name: 'Quiz 4', category: 'Quiz', dueDate: '02/27/2025' },
    { name: 'Module 5', category: 'Assignment', dueDate: '03/04/2025' },
    { name: 'Discussion 5', category: 'Discussion', dueDate: '03/12/2025' },
    { name: 'Module 6', category: 'Assignment', dueDate: '03/14/2025' },
    { name: 'Quiz 6', category: 'Quiz', dueDate: '03/18/2025' },
    { name: 'Mid-Term', category: 'Exam', dueDate: '03/25/2025' },
    { name: 'Module 7', category: 'Assignment', dueDate: '03/27/2025' },
    { name: 'Module 7', category: 'Discussion', dueDate: '04/01/2025' },
    { name: 'Quiz 7', category: 'Quiz', dueDate: '04/05/2025' },
    { name: 'Final', category: 'Exam', dueDate: '04/10/2025' },
  ];

  category = [
    { name: 'Assignment'},
    { name: 'Discussion'},
    { name: 'Quiz'},
    { name: 'Exam'},

  ]

  // Selected filter for assignment category
  selectedCategory: any = '';

  // Filtered assignments based on the selected category
  get filteredAssignments() {
    if (!this.selectedCategory) return this.assignments;
    return this.assignments.filter(
      (assignment) => assignment.category === this.selectedCategory.name
    );
  }
}
