import { Component } from '@angular/core';

@Component({
    standalone: true,
    selector: 'app-footer',
    template: `<div class="layout-footer">
        BrightPath LMS by
        <a class="text-primary font-bold hover:underline">Jose Linares</a>
    </div>`
})
export class AppFooter {}
