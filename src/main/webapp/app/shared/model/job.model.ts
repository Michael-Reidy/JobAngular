export interface IJob {
  id?: number;
  source?: string;
  text?: string;
  url?: string;
}

export class Job implements IJob {
  constructor(public id?: number, public source?: string, public text?: string, public url?: string) {}
}
