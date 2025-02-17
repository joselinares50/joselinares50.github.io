import { Component } from '@angular/core';
import { MessageService, ToastMessageOptions } from 'primeng/api';
import { FluidModule } from 'primeng/fluid';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { SelectModule } from 'primeng/select';
import { FormsModule } from '@angular/forms';
import { TextareaModule } from 'primeng/textarea';
import { CommonModule } from '@angular/common';
import { AutoCompleteCompleteEvent, AutoCompleteModule } from 'primeng/autocomplete';
import { MessageModule } from 'primeng/message';
import { ToastModule } from 'primeng/toast';

@Component({
    selector: 'message',
    standalone: true,
    imports: [InputTextModule, FluidModule, ButtonModule, SelectModule, FormsModule, TextareaModule, AutoCompleteModule, CommonModule, MessageModule, ToastModule],
    template: `<p-fluid>
        <div class="flex mt-8">
            <div class="card flex flex-col gap-6 w-full">
                <div class="font-semibold text-xl">Message a User</div>
                <div class="font-semibold text-xl">Select</div>
                <p-select [(ngModel)]="dropdownValue" [options]="dropdownValues" optionLabel="name" placeholder="Select a Course" (change)="onSelected(dropdownValue.value)"/>
                <div *ngIf="dropdownValue?.code == 'swe619'">
                    <label for="multiple-ac-1" class="font-bold mb-2 block">User</label>
                    <p-autocomplete [(ngModel)]="selectedAutoValue" [suggestions]="autoFilteredValue" optionLabel="name" placeholder="Search" dropdown multiple display="chip" (completeMethod)="filterName($event)" />
                </div>
                <div *ngIf="dropdownValue?.code == 'swe620'">
                    <label for="multiple-ac-1" class="font-bold mb-2 block">User</label>
                    <p-autocomplete [(ngModel)]="selectedAutoValue" [suggestions]="autoFilteredValue" optionLabel="name" placeholder="Search" dropdown multiple display="chip" (completeMethod)="filterName($event)" />
                </div>
                <div *ngIf="dropdownValue?.code == 'swe625'">
                    <label for="multiple-ac-1" class="font-bold mb-2 block">User</label>
                    <p-autocomplete [(ngModel)]="selectedAutoValue" [suggestions]="autoFilteredValue" optionLabel="name" placeholder="Search" dropdown multiple display="chip" (completeMethod)="filterName($event)" />
                </div>
                <div *ngIf="dropdownValue?.code == 'swe637'">
                    <label for="multiple-ac-1" class="font-bold mb-2 block">User</label>
                    <p-autocomplete [(ngModel)]="selectedAutoValue" [suggestions]="autoFilteredValue" optionLabel="name" placeholder="Search" dropdown multiple display="chip" (completeMethod)="filterName($event)" />
                </div>
                <div *ngIf="autoFilteredValue.length" class="flex flex-wrap">
                    <label for="message">Message</label>
                    <textarea pTextarea id="message" rows="4"></textarea>
                </div>

                <div class="flex flex-wrap gap-2">
                    <p-button (click)="showSuccessViaToast()" label="Send" severity="success" />
                    <p-toast />
                </div>
            </div>
        </div>
    </p-fluid>`,
    providers: [MessageService]
})
export class Message {

    msgs: ToastMessageOptions[] | null = [];

    constructor(private service: MessageService) { }

    floatValue: any = null;

    autoValue: any[] | undefined;

    autoFilteredValue: any[] = [];

    selectedAutoValue: any = null;

    calendarValue: any = null;

    inputNumberValue: any = null;

    sliderValue: number = 50;

    ratingValue: any = null;

    colorValue: string = '#1976D2';

    radioValue: any = null;

    checkboxValue: any[] = [];

    switchValue: boolean = false;

    listboxValues: any[] = [
        { name: 'New York', code: 'NY' },
        { name: 'Rome', code: 'RM' },
        { name: 'London', code: 'LDN' },
        { name: 'Istanbul', code: 'IST' },
        { name: 'Paris', code: 'PRS' }
    ];
    listboxValue: any = null;

    // Array 1
array1 = [
    { name: "Jasmine Jones" },
    { name: "Alice Wilson" },
    { name: "Eva Smith" },
    { name: "Bob Brown" },
    { name: "Charlie Taylor" },
    { name: "Charlie Miller" },
    { name: "Ian Moore" },
    { name: "Ian Wilson" },
    { name: "Jasmine Smith" },
    { name: "Eva Taylor" }
  ];
  
  // Array 2
  array2 = [
    { name: "Hannah Jones" },
    { name: "David Moore" },
    { name: "Alice Moore" },
    { name: "Hannah Davis" },
    { name: "Ian Jones" },
    { name: "Grace Wilson" },
    { name: "Jasmine Smith" },
    { name: "Hannah Williams" },
    { name: "Grace Johnson" },
    { name: "Ian Williams" }
  ];
  
  // Array 3
  array3 = [
    { name: "Jasmine Miller" },
    { name: "Alice Taylor" },
    { name: "Ian Moore" },
    { name: "Ian Taylor" },
    { name: "Hannah Williams" },
    { name: "Ian Miller" },
    { name: "Hannah Williams" },
    { name: "Alice Moore" },
    { name: "David Brown" },
    { name: "Grace Johnson" }
  ];
  
  // Array 4
  array4 = [
    { name: "Frank Miller" },
    { name: "Bob Jones" },
    { name: "David Johnson" },
    { name: "Frank Jones" },
    { name: "Frank Brown" },
    { name: "Eva Moore" },
    { name: "Hannah Wilson" },
    { name: "Hannah Davis" },
    { name: "Frank Moore" },
    { name: "Grace Taylor" }
  ];
  

    dropdownValues = [
        { name: 'SWE 619: Object-Oriented Software Specification and Construction', code: 'swe619' },
        { name: 'SWE 620: Software Requirements Analysis and Specification', code: 'swe620' },
        // { name: 'SWE 625: Software Project Management', code: 'swe625' },
        // { name: 'SWE 637: Software Testing', code: 'swe637' }
    ];


    dropdownValue: any = null;

    // multiselectCountries: Country[] = [
    //     { name: 'Australia', code: 'AU' },
    //     { name: 'Brazil', code: 'BR' },
    //     { name: 'China', code: 'CN' },
    //     { name: 'Egypt', code: 'EG' },
    //     { name: 'France', code: 'FR' },
    //     { name: 'Germany', code: 'DE' },
    //     { name: 'India', code: 'IN' },
    //     { name: 'Japan', code: 'JP' },
    //     { name: 'Spain', code: 'ES' },
    //     { name: 'United States', code: 'US' }
    // ];

    // multiselectSelectedCountries!: Country[];

    toggleValue: boolean = false;

    selectButtonValue: any = null;

    selectButtonValues: any = [{ name: 'Option 1' }, { name: 'Option 2' }, { name: 'Option 3' }];

    knobValue: number = 50;

    inputGroupValue: boolean = false;

    //treeSelectNodes!: TreeNode[];

    selectedNode: any = null;

    filterName(event: AutoCompleteCompleteEvent) {
        const filtered: any[] = [];
        const query = event.query;
        let values: any = [];

        switch (this.dropdownValue.code) {
            case 'swe619':
                values = this.array1;
                break;
            case 'swe620':
                values = this.array2;
                break;
            case 'swe625':
                values = this.array3;
                break;
            case 'swe637':
                values = this.array4;
                break;

            default:
                break;
        }

        for (let i = 0; i < (values as any[]).length; i++) {
            const name = (values as any[])[i];
            if (name.name.toLowerCase().indexOf(query.toLowerCase()) == 0) {
                filtered.push(name);
            }
        }

        this.autoFilteredValue = filtered;
    }

    selectedTeam: any = null;

    onSelected(value: string): void {
        this.selectedTeam = value;
    }

    showInfoViaToast() {
        this.service.add({ severity: 'info', summary: 'Info Message', detail: 'PrimeNG rocks' });
    }

    showWarnViaToast() {
        this.service.add({ severity: 'warn', summary: 'Warn Message', detail: 'There are unsaved changes' });
    }

    showErrorViaToast() {
        this.service.add({ severity: 'error', summary: 'Error Message', detail: 'Validation failed' });
    }

    showSuccessViaToast() {
        this.service.add({ severity: 'success', summary: 'Success Message', detail: 'Message sent' });
    }
}
