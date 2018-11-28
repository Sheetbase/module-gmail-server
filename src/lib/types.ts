import { RouterService, AddonRoutesOptions } from '@sheetbase/core-server';

export interface AddonRoutesOptions extends AddonRoutesOptions {
    router: RouterService;
    disabledRoutes?: string | string[];
}

export interface MailingData {
    recipient: string;
    subject?: string;
    body?: string;
    options?: {
        attachments?: any[];
        bcc?: string;
        cc?: string;
        from?: string;
        htmlBody?: string;
        inlineImages?: {};
        name?: string;
        noReply?: boolean;
        replyTo?: string;
    };
}