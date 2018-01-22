import {Server} from "./server";

export class ServerGroup {
  private static counter: number = -1;
  public id: number = ServerGroup.counter--;
  public active: boolean = false;
  public order: number = 255;
  public spoilers: boolean = false;
  public name: string = "";
  public created_at: Date;
  public updated_at: Date;

  // Relationships
  public servers: Server[] = [];
}
