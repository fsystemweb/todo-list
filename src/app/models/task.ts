export class Task {
  _id!: string;
  title!: string;
  date!: string;

  constructor(title: string) {
    this.title = title;
  }
}
