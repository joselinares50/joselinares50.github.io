import { Component } from '@angular/core';
import { TimelineModule } from 'primeng/timeline';
import { CardModule } from 'primeng/card';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';

@Component({
    selector: 'app-timeline-demo',
    standalone: true,
    imports: [CommonModule, TimelineModule, ButtonModule, CardModule],
    template: ` <div class="grid grid-cols-12 gap-8">
        <div class="col-span-full">
            <div class="card">
                <div class="font-semibold text-xl mb-4">Timeline</div>
                <p-timeline [value]="events1" align="alternate" styleClass="customized-timeline">
                    <ng-template #marker let-event>
                        <span class="flex w-8 h-8 items-center justify-center text-white rounded-full z-10 shadow-sm" [style]="{ 'background-color': event.color }">
                            <i [class]="event.icon"></i>
                        </span>
                    </ng-template>
                    <ng-template #content let-event>
                        <p-card [header]="event.status" [subheader]="event.date">
                            <img *ngIf="event.image" [src]="'https://primefaces.org/cdn/primeng/images/demo/product/' + event.image" [alt]="event.name" width="200" class="shadow" />
                            <p>
                                {{event.message}}
                            </p>
                            <!-- <p-button label="Read more" [text]="true" /> -->
                        </p-card>
                    </ng-template>
                </p-timeline>
            </div>
        </div>
    </div>`
})
export class Timeline {
    id: any = '';
    events1: any[] = [];

    events2: any[] = [];

    ngOnInit() {
        this.events1 = [
            {
                status: 'Course Start',
                date: '01/15/2025',
                icon: 'pi pi-check',
                color: 'green',
                message: ''
            },
            {
                status: 'Module 1: Assigned Reading',
                date: '01/21/2025',
                icon: 'pi pi-check',
                color: 'green',
                message: ''
            },
            {
                status: 'Module 1: Assignment',
                date: '01/21/2025',
                icon: 'pi pi-check',
                color: 'green'
            },
            {
                status: 'Module 1: Quiz',
                date: '01/28/2025',
                icon: 'pi pi-check',
                color: 'green'
            },
            {
                status: 'Module 2: Assigned Reading',
                date: '02/05/2025',
                icon: 'pi pi-check',
                color: 'green'
            },
            {
                status: 'Module 2: Assignment',
                date: '02/05/2025',
                icon: 'pi pi-check',
                color: 'green'
            },
            {
                status: 'Module 2: Discussion',
                date: '02/05/2025',
                icon: 'pi pi-check',
                color: 'green'
            },
            {
                status: 'Module 3: Assigned Reading',
                date: '02/12/2025',
                icon: 'pi pi-check',
                color: 'green'
            },
            {
                status: 'Module 3: Module',
                date: '02/12/2025',
                icon: 'pi pi-check',
                color: 'green'
            },
            {
                status: 'Module 3: Quiz',
                date: '02/19/2025',
                icon: 'pi pi-check',
                color: 'green'
            },
            {
                status: 'Module 4: Assigned Reading',
                date: '02/25/2025',
                icon: 'pi pi-check',
                color: 'green'
            },
            {
                status: 'Module 4: Assignment',
                date: '02/25/2025',
                icon: 'pi pi-check',
                color: 'green'
            },
            {
                status: 'Module 4: Quiz',
                date: '02/27/2025',
                icon: 'pi pi-spin pi-spinner',
                color: '#673AB7'
            },
            {
                status: 'Module 5: Assigned Reading',
                date: '03/05/2025',
                icon: 'pi pi-minus',
                color: '#607D8B'
            },
            {
                status: 'Module 5: Discussion',
                date: '03/12/2025',
                icon: 'pi pi-minus',
                color: '#607D8B'
            },
            {
                status: 'Module 6: Assignment',
                date: '03/14/2025',
                icon: 'pi pi-minus',
                color: '#607D8B'
            },
            {
                status: 'Module 6: Quiz',
                date: '03/18/2025',
                icon: 'pi pi-minus',
                color: '#607D8B'
            },
            {
                status: 'Mid-Term',
                date: '03/25/2025',
                icon: 'pi pi-minus',
                color: '#607D8B'
            },
            {
                status: 'Module 7: Discussion',
                date: '03/27/2025',
                icon: 'pi pi-minus',
                color: '#607D8B'
            },
            {
                status: 'Module 7: Assignment',
                date: '03/27/2025',
                icon: 'pi pi-minus',
                color: '#607D8B'
            },
            {
                status: 'Module 7: Quiz',
                date: '04/01/2025',
                icon: 'pi pi-minus',
                color: '#607D8B'
            },
            {
                status: 'Final',
                date: '04/10/2025',
                icon: 'pi pi-minus',
                color: '#607D8B'
            },
            {
                status: 'Course End',
                date: '04/15/2025',
                icon: 'pi pi-minus',
                color: '#607D8B',
                message: ''
            }
        ];

        this.events2 = ['2020', '2021', '2022', '2023'];
    }
}
