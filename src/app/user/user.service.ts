import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class UserService {

  constructor(
  ) { }

  create (data: any): void {
    console.log('mock implementation')
  }
}