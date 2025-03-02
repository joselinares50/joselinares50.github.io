import { Routes } from '@angular/router';
import { ButtonDemo } from './buttondemo';
import { ChartDemo } from './chartdemo';
import { FileDemo } from './filedemo';
import { FormLayoutDemo } from './formlayoutdemo';
import { InputDemo } from './inputdemo';
import { ListDemo } from './listdemo';
import { MediaDemo } from './mediademo';
import { MessagesDemo } from './messagesdemo';
import { MiscDemo } from './miscdemo';
import { PanelsDemo } from './panelsdemo';
import { TimelineDemo } from './timelinedemo';
import { TableDemo } from './tabledemo';
import { OverlayDemo } from './overlaydemo';
import { TreeDemo } from './treedemo';
import { MenuDemo } from './menudemo';
import { Swe619 } from './swe619';
import { Swe620 } from './swe620';
import { Message } from './message';
import { Grade } from './grade'
import { Schedule } from './schedule'
import { Timeline } from './timeline'
import { AccountDemo } from './accountdemo';



export default [
    { path: 'button', data: { breadcrumb: 'Button' }, component: ButtonDemo },
    { path: 'charts', data: { breadcrumb: 'Charts' }, component: ChartDemo },
    { path: 'file', data: { breadcrumb: 'File' }, component: FileDemo },
    { path: 'formlayout', data: { breadcrumb: 'Form Layout' }, component: FormLayoutDemo },
    { path: 'input', data: { breadcrumb: 'Input' }, component: InputDemo },
    { path: 'list', data: { breadcrumb: 'List' }, component: ListDemo },
    { path: 'media', data: { breadcrumb: 'Media' }, component: MediaDemo },
    { path: 'message', data: { breadcrumb: 'Message' }, component: MessagesDemo },
    { path: 'misc', data: { breadcrumb: 'Misc' }, component: MiscDemo },
    { path: 'panel', data: { breadcrumb: 'Panel' }, component: PanelsDemo },
    { path: 'timeline', data: { breadcrumb: 'Timeline' }, component: TimelineDemo },
    { path: 'table', data: { breadcrumb: 'Table' }, component: TableDemo },
    { path: 'overlay', data: { breadcrumb: 'Overlay' }, component: OverlayDemo },
    { path: 'tree', data: { breadcrumb: 'Tree' }, component: TreeDemo },
    { path: 'menu', data: { breadcrumb: 'Menu' }, component: MenuDemo },
    { path: 'swe619', data: { breadcrumb: 'SWE619' }, component: Swe619 },
    { path: 'swe620', data: { breadcrumb: 'SWE620' }, component: Swe620 },
    { path: 'messagepage', data: { breadcrumb: 'Message' }, component: Message },
    { path: 'grade/:id', data: { breadcrumb: 'Grade' }, component: Grade },
    { path: 'schedule/:id', data: { breadcrumb: 'Schedule' }, component: Schedule },
    { path: 'timelinepage/:id', data: { breadcrumb: 'Timeline' }, component: Timeline },
    { path: 'account', data: { breadcrumb: 'Account' }, component: AccountDemo },
    { path: '**', redirectTo: '/notfound' }
] as Routes;
