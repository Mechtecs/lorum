import {ServerGroup} from "./server-group";

export class Server {
  public id: number;
  public order: number;
  public name: string;
  public group: ServerGroup;
  public ip: string;
  public port: number;
  public active: boolean;
  public created_at: Date;
  public updated_at: Date;
}
