export class Task {
  _id!: string;
  title!: string;
  date!: string;
  checked: boolean = false;

  constructor(title: string) {
    this.title = title;
  }
}
