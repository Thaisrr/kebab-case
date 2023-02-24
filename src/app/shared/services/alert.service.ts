import { Injectable } from '@angular/core';

type State = 'success' | 'error' | 'info' | 'warning';
interface Config {
  time?: number;
  color?: string;
  icon?: string;
  background: string;

}
@Injectable({
  providedIn: 'root'
})
export class AlertService {
  configs: Config = {
    time: 3000,
    icon: undefined,
    color: 'inherit',
    background: 'inherit'
  }

  is_open = false;
  text?: string;
  state?: State;

  constructor() { }

  open(text: string, state: State = "info", configs?: Config ) {
      this.configs = {...this.configs, ...configs};
      this.state = state;
      this.text = text;
      setTimeout(() => {
        this.is_open = true;
      }, this.configs?.time || 3000)
  }

  handleErrors(error: any) {
    let text;
    if (error instanceof ErrorEvent) {
      text = error.error.message || error.error;
    } else {
      text =  `Quelque chose s'est mal passé. Veuillez réessayer plus tard.`;
    }
    this.open(text, 'error');
  }

  handleSuccess(text: string) {
    this.open(text, 'success');
  }
}
