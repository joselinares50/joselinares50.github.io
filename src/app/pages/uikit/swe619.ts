import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AccordionModule } from 'primeng/accordion';
import { MenuItem } from 'primeng/api';
import { ButtonModule } from 'primeng/button';
import { DividerModule } from 'primeng/divider';
import { FieldsetModule } from 'primeng/fieldset';
import { IconFieldModule } from 'primeng/iconfield';
import { InputIconModule } from 'primeng/inputicon';
import { InputTextModule } from 'primeng/inputtext';
import { MenuModule } from 'primeng/menu';
import { PanelModule } from 'primeng/panel';
import { RippleModule } from 'primeng/ripple';
import { SplitButtonModule } from 'primeng/splitbutton';
import { SplitterModule } from 'primeng/splitter';
import { TabsModule } from 'primeng/tabs';
import { ToolbarModule } from 'primeng/toolbar';
import { TableModule } from 'primeng/table';
import { RouterModule } from '@angular/router';
import { ProgressBarModule } from 'primeng/progressbar';
import { Router } from '@angular/router';



@Component({
    selector: 'swe-619',
    standalone: true,
    imports: [
        CommonModule,
        FormsModule,
        ToolbarModule,
        ButtonModule,
        RippleModule,
        SplitButtonModule,
        AccordionModule,
        FieldsetModule,
        MenuModule,
        InputTextModule,
        DividerModule,
        SplitterModule,
        PanelModule,
        TabsModule,
        IconFieldModule,
        InputIconModule,
        TableModule,
        RouterModule,
        ProgressBarModule
    ],
    template: `
        <div class="card">
            <div class="font-semibold text-xl mb-4">Course Progress</div>
            <div class="flex flex-col md:flex-row gap-4">
                <div class="md:w-full">
                    <a [routerLink]="['../timelinepage','swe619']">
                        <p-progressbar [value]="value" [showValue]="true"></p-progressbar>
                    </a>
                    <div class="flex flex-wrap gap-2 mt-6">
                        <p-button [routerLink]="['../timelinepage','swe619']" label="View Timeline" />
                    </div>
                </div>
            </div>
        </div>
        <div class="flex flex-col">
            <div class="flex flex-col md:flex-row gap-8">
                <div class="md:w-3/4 mt-6 md:mt-0">
                    <div class="card">
                        <div class="font-semibold text-xl mb-4">SWE 619: Object-Oriented Software Specification and Construction</div>
                        <p-panel header="Summary" [toggleable]="false">
                            <p class="m-0">
                            This graduate-level course provides an in-depth exploration of object-oriented software development, focusing on the principles and practices necessary for designing, 
                            specifying, and constructing robust software systems. Students will gain a solid understanding of modern object-oriented programming (OOP) languages and techniques, emphasizing abstraction, modularity, and information hiding.
                            </p>
                            <div class="font-semibold mt-4 mb-4">Key Topics Covered:</div>
                            <p>Object-Oriented Design Principles: Abstraction, encapsulation, inheritance, polymorphism, and the Liskov Substitution Principle.</p>

                            <p><b>Specifications and Testing:</b> Development of precise specifications for functions and data types, black-box testing techniques, debugging strategies, and formal methods (e.g., assertions, invariants, pre/post-conditions).</p>

                            <p><b>Design Patterns:</b> Application of common design patterns to enhance software structure and maintainability.</p>

                            <p><b>Concurrent Programming:</b> Introduction to multithreading, synchronization mechanisms, and locks for parallel computing.</p>

                            <p><b>Software Verification:</b> Use of formal verification techniques such as Hoare logic to ensure program correctness.</p>

                            <div class="font-semibold mt-4 mb-4">Learning Outcomes:</div>
                            By the end of the course, students will be able to:

                            Apply OOP principles to develop modular and maintainable software systems.

                            Write clear and precise specifications for software components.

                            Differentiate between mutable and immutable data types and make informed design decisions.

                            Test and debug software effectively using systematic approaches.

                            Reason about program correctness using formal methods.

                            Course Structure:
                            The course includes lectures, homework assignments, weekly quizzes, mid-term exam, and a final exam.
                        </p-panel>
                    </div>
                </div>
                <div class="md:w-1/3 mt-6 md:mt-0">
                    <div class="card">
                        <p-menu [model]="menuItems">
                        <ng-template #item let-item>
                            <ng-container *ngIf="item.route; else elseBlock">
                                <a [routerLink]="item.route" class="p-menu-item-link">
                                    <span [class]="item.icon"></span>
                                    <span class="ml-2">{{ item.label }}</span>
                                </a>
                            </ng-container>
                            <ng-template #elseBlock>
                                <a [href]="item.url" class="p-menu-item-link">
                                    <span [class]="item.icon"></span>
                                    <span class="ml-2">{{ item.label }}</span>
                                </a>
                            </ng-template>
                        </ng-template>
                        </p-menu>
                    </div>
                </div>
            </div>
            
            <div class="flex flex-col md:flex-row gap-8 mt-8">
                <div class="md:w-3/4 mt-6 md:mt-0">
                    <div class="card">
                    <div class="font-semibold text-xl mb-4">Current Module: Module 4 (02/18/2025-02/25/2025)</div>
                        <p-tabs value="0">
                            <p-tablist>
                                <p-tab value="0">Readings</p-tab>
                                <p-tab value="1">Assignment</p-tab>
                                <p-tab value="2">Discussion</p-tab>
                                <p-tab value="3">Quiz</p-tab>
                            </p-tablist>
                            <p-tabpanels>
                                <p-tabpanel value="0">
                                    <div class="font-semibold mt-4 mb-4">"Program Development in Java" by Barbara Liskov and John Guttag</div>
                                    <p class="m-0">
                                    <b>Chapter 2: Understanding Objects in Java</b>
This chapter introduces key object-oriented concepts such as program structure, mutability, type hierarchy, and method call semantics. It provides a foundation for understanding how objects and variables interact in Java, which is essential for designing modular and maintainable systems13.

Chapter 6: Iteration Abstraction
                                    <p-divider layout="horizontal" />
                                    <div class="font-semibold mt-4 mb-4">"Effective Java" by Joshua Bloch</div>
                                    <p class="m-0">
                                    <b>Chapter 2: Creating and Destroying Objects</b>
                                    This chapter provides best practices for object creation and destruction in Java, such as using static factory methods, avoiding unnecessary object creation, and managing resources with try-with-resources
                                    </p>
                                </p-tabpanel>
                                <p-tabpanel value="1">
                                    <p class="m-0 font-semibold">
                                        Module 4: Individal Assignment
                                    </p>
                                    <p class="m-0">
                                        Implement a class GrowList that behaves like a simplified mutable list. The GrowList should allow elements to be added but not removed, ensuring immutability of existing elements.
                                    </p>
                                    <p-button label="Go to Submission Page" rounded />
                                </p-tabpanel>
                                <p-tabpanel value="2">
                                    <p class="m-0">
                                    In this module, we explored how representation invariants (rep-invariants) and abstraction functions help ensure the correctness and maintainability of software systems. These concepts are particularly important when designing complex, mutable data structures.
                                    </p>
                                    <p-button label="Go to Discussion Board" rounded />
                                </p-tabpanel>
                                <p-tabpanel value="3">
                                <p class="m-0 font-semibold">Title: Quiz on Data Abstraction and Representation Invariants</p>
                                    <p class="font-semibold">
                                    Instructions:
                                    
                                    </p>
                                    <p>Answer the following questions based on the concepts covered in Module 2. Be sure to provide clear and concise explanations where required. This quiz is timed (30 minutes) and open notes.</p>
                                    <p-button label="Go to Quiz" rounded />
                                </p-tabpanel>
                            </p-tabpanels>
                        </p-tabs>
                    </div>
                </div>
                <div class="md:w-1/3 mt-6 md:mt-0">
                    <div class="card">
                        <div class="font-semibold text-xl mb-4">Grading Weight</div>
                        <p-table [value]="grading" [tableStyle]="{ 'min-width': '10rem' }">
                            <ng-template #header>
                                <tr>
                                    <th>Category</th>
                                    <th>Weight</th>
                                </tr>
                            </ng-template>
                            <ng-template #body let-grading>
                                <tr>
                                    <td>{{ grading.label }}</td>
                                    <td>{{ grading.value }}</td>
                                </tr>
                            </ng-template>
                        </p-table>
                    </div>
                </div>
            </div>

            <div class="flex flex-col md:flex-row gap-8 mt-8">
                <div class="md:w-1/2 mt-6 md:mt-0">
                    <div class="card">
                        <div class="font-semibold text-xl mb-4">Upcoming Assignments</div>
                        <p-table
                            [value]="assignment"
                            [paginator]="true"
                            [rows]="5"
                            [tableStyle]="{ 'min-width': '10rem' }"
                            [rowsPerPageOptions]="[5, 10, 20]"
                        >
                            <ng-template #header>
                                <tr>
                                    <th style="width:50%">Assignment</th>
                                    <th style="width:25%">Category</th>
                                    <th style="width:25%">Due Date</th>
                                </tr>
                            </ng-template>
                            <ng-template #body let-assignment>
                                <tr>
                                    <td>{{ assignment.name }}</td>
                                    <td>{{ assignment.category }}</td>
                                    <td>{{ assignment.duedate }}</td>
                                </tr>
                            </ng-template>
                        </p-table>
                    </div>
                </div>
                <div class="md:w-1/2 mt-6 md:mt-0">
                    <div class="card">
                        <div class="font-semibold text-xl mb-4">Completed Assignments</div>
                        <p-table
                            [value]="completed"
                            [paginator]="true"
                            [rows]="5"
                            [tableStyle]="{ 'min-width': '10rem' }"
                            [rowsPerPageOptions]="[5, 10, 20]"
                        >
                            <ng-template #header>
                                <tr>
                                    <th style="width:50%">Assignment</th>
                                    <th style="width:25%">Category</th>
                                    <th style="width:25%">Completed Date</th>
                                </tr>
                            </ng-template>
                            <ng-template #body let-assignment>
                                <tr>
                                    <td>{{ assignment.name }}</td>
                                    <td>{{ assignment.category }}</td>
                                    <td>{{ assignment.completed }}</td>
                                </tr>
                            </ng-template>
                        </p-table>
                    </div>
                </div>
            </div>

        </div>
    `
})
export class Swe619 {

    constructor( private router: Router ) { }

    items: MenuItem[] = [
        {
            label: 'Save',
            icon: 'pi pi-check',
        },
        {
            label: 'Update',
            icon: 'pi pi-upload'
        },
        {
            label: 'Delete',
            icon: 'pi pi-trash'
        },
        {
            label: 'Home Page',
            icon: 'pi pi-home'
        }
    ];
    menuItems = [
        {
            label: 'Academic Resources',
            items: [
                {
                    label: 'Contact Instructor',
                    icon: 'pi pi-fw pi-plus',
                    disabled: true
                },
                {
                    label: 'Syllabus',
                    icon: 'pi pi-fw pi-user-edit',
                    disabled: true
                },
                {
                    label: 'Schedule',
                    icon: 'pi pi-fw pi-user-edit',
                    route: ['../schedule', 'swe619']
                },
                {
                    label: 'Grades',
                    icon: 'pi pi-fw pi-user-edit',
                    route: ['../grade', 'swe619']
                }
            ]
        }
    ];
    grading = [
        { label: 'Homework', value: '20%' },
        { label: 'Discussions', value: '10%' },
        { label: 'Quizzes', value: '30%' },
        { label: 'Mid-Term', value: '20%' },
        { label: 'Final', value: '20%' }
    ];

    assignment = [
        { name: 'Module 4', category: 'Assignment', duedate: '02/25/2025' },
        { name: 'Quiz 4', category: 'Quiz', duedate: '02/27/2025' },
        { name: 'Module 5', category: 'Assignment', duedate: '03/04/2025' },
        { name: 'Discussion 5', category: 'Discussion', duedate: '03/12/2025' },
        { name: 'Module 6', category: 'Assignment', duedate: '03/14/2025' },
        { name: 'Quiz 6', category: 'Quiz', duedate: '03/18/2025' },
        { name: 'Mid-Term', category: 'Exam', duedate: '03/25/2025' },
        { name: 'Module 7', category: 'Assignment', duedate: '03/27/2025' },
        { name: 'Module 7', category: 'Discussion', duedate: '04/01/2025' },
        { name: 'Quiz 7', category: 'Quiz', duedate: '04/05/2025' },
        { name: 'Final', category: 'Exam', duedate: '04/10/2025' },
    ];

    completed = [
        { name: 'Module 1', category: 'Assignment', completed: '01/21/2025' },
        { name: 'Quiz 1', category: 'Quiz', completed: '01/28/2025' },
        { name: 'Module 2', category: 'Assignment', completed: '02/05/2025' },
        { name: 'Discussion 2', category: 'Discussion', completed: '02/05/2025' },
        { name: 'Module 3', category: 'Assignment', completed: '02/12/2025' },
        { name: 'Quiz 3', category: 'Quiz', completed: '02/19/2025' }
    ];

    value = 0;

    interval: any;

    ngOnInit() {
        this.interval = setInterval(() => {
            this.value = this.value + Math.floor(Math.random() * 10) + 1;
            if (this.value >= 39) {
                this.value = 39;
                clearInterval(this.interval);
            }
        }, 500);
    }

    ngOnDestroy() {
        clearInterval(this.interval);
    }
}
