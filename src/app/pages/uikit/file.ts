import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MessageService } from 'primeng/api';
import { ButtonModule } from 'primeng/button';
import { FileUploadModule } from 'primeng/fileupload';
import { ToastModule } from 'primeng/toast';
import { RouterModule } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'app-file',
    standalone: true,
    imports: [CommonModule, FileUploadModule, ToastModule, ButtonModule, RouterModule],
    template: `<p-toast />
        <div class="grid grid-cols-12 gap-8">
            <div class="col-span-full">
                <div class="card">
                    <div class="font-semibold text-xl mb-4">Submit your assignment below</div>
                    <p-fileupload name="demo[]" [files]="myfiles" uploadLabel="Submit" customUpload="true" (uploadHandler)="myUploader($event)"[multiple]="true" accept="image/*" maxFileSize="1000000" mode="advanced">
                        <ng-template #empty>
                            <div>Drag and drop files to here to upload.</div>
                        </ng-template>
                        <ng-template #content>
                            <ul *ngIf="uploadedFiles.length">
                                <li *ngFor="let file of uploadedFiles">{{ file.name }} - {{ file.size }} bytes</li>
                            </ul>
                        </ng-template>
                    </p-fileupload>
                    <div class="mb-4"> </div>
                    <p-button class="mt-4" label="Return to previous page" [routerLink]="idString"></p-button>
                </div>

            </div>
            <!-- <div class="col-span-full lg:col-span-6">
                <div class="card">
                    <div class="font-semibold text-xl mb-4">Basic</div>
                    <div class="flex flex-col gap-4 items-center justify-center">
                        <p-fileupload #fu mode="basic" chooseLabel="Choose" chooseIcon="pi pi-upload" name="demo[]" url="https://www.primefaces.org/cdn/api/upload.php" accept="image/*" maxFileSize="1000000" (onUpload)="onUpload($event)" />
                        <p-button label="Upload" (onClick)="fu.upload()" severity="secondary" />
                    </div>
                </div>
            </div> -->
        </div>`,
    providers: [MessageService]
})
export class File implements OnInit{
    
    uploadedFiles: any[] = [];
    myfiles: any[] = [];

    fileUpload: any;

    id : any = '';
    idString: string = '';


    constructor(private messageService: MessageService , private route: ActivatedRoute) {}


    ngOnInit() {
        this.id = '../' + this.route.snapshot.paramMap.get('id');
        this.idString = '../' + this.id;
    }

    onUpload(event: any) {
        for (const file of event.files) {
            this.uploadedFiles.push(file);
        }
        this.messageService.add({ severity: 'info', summary: 'Success', detail: 'File Uploaded' });
    }

    myUploader(event: any) {
        
        for(let file of event.files) {
          this.uploadedFiles.push(file);
        }
        this.myfiles = [];
        this.messageService.add({ severity: 'info', summary: 'Success', detail: 'File Uploaded' });
      }

    onBasicUpload() {
        this.messageService.add({ severity: 'info', summary: 'Success', detail: 'File Uploaded with Basic Mode' });
    }
    clearFiles() {
        this.fileUpload.clear();
    }
}


