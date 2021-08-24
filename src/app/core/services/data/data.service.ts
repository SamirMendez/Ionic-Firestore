import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private cloudFire: AngularFirestore) { }

  public getCollection(): Observable<any> {
    return this.cloudFire.collection('ServicioPersona').valueChanges();
  }
}
