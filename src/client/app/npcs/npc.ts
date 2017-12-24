export class Npc {
  constructor(image_url: string) {
    this.image_url = image_url;
  }
  _id: string;
  name: string;
  tags: string[] = [];
  appearance: string;
  portrayal: string;
  hook: string;
  image_url: string;
  campaign: string;
  pinterest_id: string;
}
