import {IModule} from '@rain/bot';
import {WelcomeModule} from './WelcomeModule';
import {AutoRoleModule} from './AutoRoleModule';
import {scheduledMessagesModule} from './ScheduledMessagesModule';

export const modules: IModule[] = [
    new WelcomeModule(),
    new AutoRoleModule(),
    scheduledMessagesModule,
];