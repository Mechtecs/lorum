import {ServerGroup} from "./server-group";

export class Server {
  private static counter: number = -1;
  public id: number = Server.counter--;
  public order: number = 255;
  public name: string = "";
  public group: ServerGroup;
  public server_group_id: number;
  public ip: string = "";
  public port: number = 0;
  public active: boolean = false;
  public created_at: Date;
  public updated_at: Date;
}
