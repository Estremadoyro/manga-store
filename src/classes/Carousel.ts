export class Carousel {
  offset: number;
  desired: number;
  active: number;
  constructor(offset: number, desired: number, active: number) {
    this.offset = offset;
    this.desired = desired;
    this.active = active;
  }
}
