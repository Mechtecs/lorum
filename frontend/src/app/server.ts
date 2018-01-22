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
  public data: ServerData = new ServerData();
  public created_at: Date;
  public updated_at: Date;
}

export class ServerData {
  public success: boolean = false;
  public info: ServerDataInfo = null;
  public players: ServerDataPlayer[] = null;
}

export class ServerDataInfo {
  public Protocol: number;
  public HostName: string;
  public Map: string;
  public ModDir: string;
  public ModDesc: string;
  public AppID: number;
  public Players: number;
  public MaxPlayers: number;
  public Bots: number;
  public Dedicated: string;
  public Os: string;
  public Password: boolean;
  public Secure: boolean;
  public Version: string;
  public ExtraDataFlags: number;
  public GamePort: number;
  public SteamID: string;
  public GameTags: string;
  public GameID: number;
}

export class ServerDataPlayer {
  public Id: number;
  public Name: string;
  public Frags: number;
  public Time: number;
  public TimeF: string;
}
