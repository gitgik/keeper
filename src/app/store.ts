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
  notes: Note[]
}


const defaultState: State = {
  notes: []
}

/* Create a Behavior subject.
We use it because it's a subject that must always return a value on subscription
even if it hasn't received a next()
*/
const _store = new BehaviorSubject<State>(defaultState);

@Injectable()
export class Store {
  private store = _store;
  changes = this.store.asObservable().distinctUntilChanged()

  setState(state: State) {
    this.store.next(state)
  }

  getState(): State {
    return this.store.value;
  }

  purge() {
    // For things like logging out
    this.store.next(defaultState);
  }

}
