import { Injectable } from '@angular/core';
import { LoggerService } from './logger.service';

@Injectable()
export class UserService {
  constructor(private logger: LoggerService) {}
  users = [
    { name: 'john', status: 'active' },
    { name: 'mick', status: 'active' },
    { name: 'ed', status: 'active' },
  ];

  AddNewUser(name: string, status: string) {
    this.users.push({ name: name, status: status });
    this.logger.logMessage(name, status);
  }
}
