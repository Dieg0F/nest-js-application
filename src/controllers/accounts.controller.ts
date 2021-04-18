import { Controller, Get, HostParam } from '@nestjs/common';

@Controller({ host: ':account.example.com' })
export class AccountsController {

    @Get()
    getInfo(@HostParam('account') account: string) {
        return account;
    }
}
