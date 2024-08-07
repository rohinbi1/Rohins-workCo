import { Injectable } from '@angular/core';

@Injectable()
export class LoggerService {
  logMessage(name: string, status: string) {
    console.log('new user "' + name + '" and "' + status + '" has been added ');
  }
}
