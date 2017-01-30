import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Injectable } from '@angular/core';
import 'rxjs/Rx';


export interface Note {
  title: string
  value: string
  color: string
  id?: string | number
  createdAt?: string
  updatedAt?: string
  userId?: string | number
}

export interface State {
  notes: Note()
}


const defaultState: State = {
  notes: []
}

const _store = new BehaviorSubject<State>(defaultState);

@Injectable
export class Store {

}
