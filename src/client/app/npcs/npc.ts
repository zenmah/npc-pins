export class Npc {
  constructor(image_url: string) {
    this.image_url = image_url;
  }
  _id: String;
  name: string;
  tags: [String];
  appearance: String;
  portrayal: String;
  hook: String;
  image_url: string;
  campaign: string;
  pinterest_id: string;
}
