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
import { Product, ProductService } from '../service/product.service';
import { ActivatedRoute } from '@angular/router';

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
    template: `

        <div class="card">
            <div class="font-semibold text-xl mb-4">Grades</div>
            <p-table [value]="grouping" sortField="category" sortMode="single" [scrollable]="true" scrollHeight="1000px" rowGroupMode="subheader" groupRowsBy="category" [tableStyle]="{ 'min-width': '60rem' , 'min-height': '30rem'}">
                <ng-template #header>
                    <tr>
                        <th>Category</th>
                        <th>Name</th>
                        <th>Score</th>
                        <th>Pass</th>
                        <th>Completion Date</th>
                    </tr>
                </ng-template>
                <ng-template #groupheader let-grouping>
                    <tr pRowGroupHeader>
                        <td colspan="5">
                            <div class="flex items-center gap-2">
                                <span class="font-bold">{{ grouping.category }}</span>
                            </div>
                        </td>
                    </tr>
                </ng-template>
                <ng-template #groupfooter let-grouping>
                    <tr>
                        <td colspan="5" class="text-right font-bold pr-12">Overall Score: {{ calculateGrade(grouping.category) }}</td>
                    </tr>
                </ng-template>
                <ng-template #body let-grouping let-rowIndex="rowIndex">
                    <tr>
                        <td>
                            
                        </td>
                        <td>
                            {{ grouping.name }}
                        </td>
                        <td>
                            {{ grouping.score }}
                        </td>
                        <td>
                            <p-tag [value]="getPassFail(grouping.score)" [severity]="getSeverity(grouping.score)" />
                        </td>
                        <td>
                            {{ grouping.date }}
                        </td>
                    </tr>
                </ng-template>
            </p-table>
        </div>`,
    styles: `
        .p-datatable-frozen-tbody {
            font-weight: bold;
        }

        .p-datatable-scrollable .p-frozen-column {
            font-weight: bold;
        }
    `,
    providers: [ConfirmationService, MessageService, ProductService]
})
export class Grade implements OnInit {

    id: any = '';
    
    customers1: any[] = [];

    customers2: any[] = [];

    customers3: any[] = [];

    selectedCustomers1: any[] = [];

    selectedCustomer: any = {};

    category: any = [];

    statuses: any[] = [];

    products: Product[] = [];

    rowGroupMetadata: any;

    expandedRows: expandedRows = {};

    activityValues: number[] = [0, 100];

    isExpanded: boolean = false;

    balanceFrozen: boolean = false;

    loading: boolean = true;

    grouping: any = []

    @ViewChild('filter') filter!: ElementRef;

    constructor(
        private productService: ProductService,
        private route: ActivatedRoute
    ) {}

    ngOnInit() {
        this.productService.getProductsWithOrdersSmall().then((data) => (this.products = data));

        this.id = this.route.snapshot.paramMap.get('id');

        this.statuses = [
            { label: 'Unqualified', value: 'unqualified' },
            { label: 'Qualified', value: 'qualified' },
            { label: 'New', value: 'new' },
            { label: 'Negotiation', value: 'negotiation' },
            { label: 'Renewal', value: 'renewal' },
            { label: 'Proposal', value: 'proposal' }
        ];

        if(this.id == 'swe619') {
            this.grouping = [
                { category: 'Assignment', name: 'Module 1', score: 93.00, date: '01/21/2025'},
                { category: 'Quiz', name: 'Quiz 1', score: 100.00, date: '01/28/2025'},
                { category: 'Assignment', name: 'Module 2', score: 100.00, date: '02/05/2025'},
                { category: 'Discussion', name: 'Discussion 2', score: 93.00, date: '02/05/2025'},
                { category: 'Assignment', name: 'Module 3', score: 59.00, date: '02/12/2025'},
                { category: 'Quiz', name: 'Quiz 3', score: 93.00, date: '02/19/2025'}
        
            ]
        } else {
            this.grouping = [
                { category: 'Assignment', name: 'Module 1', score: 93.00, date: '01/21/2025'},
                { category: 'Quiz', name: 'Quiz 1', score: 100.00, date: '01/28/2025'},
                { category: 'Assignment', name: 'Module 2', score: 100.00, date: '02/05/2025'},
                { category: 'Quiz', name: 'Quiz 3', score: '93.00', date: '02/19/2025'}
        
            ]
        }

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

    getSeverity(score: number) {
        if(score < 60) {
            return 'danger';
        } else {
            return 'success'
        }
    }

    getPassFail(score: number) {
        if(score < 60) {
            return 'Fail';
        } else {
            return 'Pass'
        }
    }

    calculateGrade(category: string) {
        let total = 0;
        let count = 0;

        this.grouping.forEach((group: any) => {
            if(group.category == category){
                total = group.score + total;
                count++;
            }
        });

        return total/count;
    }
}
