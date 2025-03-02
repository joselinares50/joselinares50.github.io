import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AccordionModule } from 'primeng/accordion';
import { SelectModule } from 'primeng/select';
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
import { CardModule } from 'primeng/card';

@Component({
  selector: 'accountdemo',
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
      ProgressBarModule,
      CardModule,
      SelectModule
  ],
  template: `
    <div class="surface-section px-4 py-8 md:px-6 lg:px-8">
      <div class="grid justify-content-center">
        <div class="col-12 lg:col-8">
          <p-card header="Account Settings" class="shadow-2">


            <!-- Logout Button -->
            <div class="mt-5 text-center">
              <button pButton type="button" label="Logout" icon="pi pi-sign-out" routerLink="/auth/login" (click)="logout()" class="p-button-danger w-full"></button>
            </div>
          </p-card>
        </div>
      </div>
    </div>
  `,
  styles: []
})
export class AccountDemo {
  username: string = '';
  email: string = '';
  password: string = '';
  confirmPassword: string = '';
  
  notificationsEnabled: boolean = true; // State for toggle switch
  selectedNotificationOption!: string; // State for select component

  notificationOptions = [
    { label: 'Email', value: 'email' },
    { label: 'SMS', value: 'sms' },
    { label: 'Push Notifications', value: 'push' }
  ];

  saveSettings() {
    if (this.isFormValid()) {
      console.log('Account Settings Saved:', {
        username: this.username,
        email: this.email,
        password: this.password,
        notificationsEnabled: this.notificationsEnabled,
        selectedNotificationOption: this.selectedNotificationOption
      });
    } else {
      console.error('Form is invalid!');
    }
  }

  cancelChanges() {
    this.username = '';
    this.email = '';
    this.password = '';
    this.confirmPassword = '';
    this.notificationsEnabled = true;
    this.selectedNotificationOption = '';
  }

  logout() {
    console.log('User logged out');
  }

  isFormValid(): boolean {
    return (
      this.username.length >= 3 &&
      this.isValidEmail(this.email) &&
      this.password.length >= 6 &&
      this.password === this.confirmPassword
    );
  }

  isValidEmail(email: string): boolean {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }
}
