import {Server} from "./server";

export class ServerGroup {
  public id: number = -1;
  public active: boolean = false;
  public order: number = 255;
  public spoilers: boolean = false;
  public name: string = "";
  public created_at: Date;
  public updated_at: Date;

  // Relationships
  public servers: Server[];
}
