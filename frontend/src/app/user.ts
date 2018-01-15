export class User {
  public steamid: string;

  public personaname: string;

  public profileurl: string;

  // 32 x 32 JPG
  public avatar: string;
  // 64 x 64 JPG
  public avatarmedium: string;
  // 184 x 184 JPG
  public avatarfull: string;

  // Current user status
  // 0 - Offline
  // 1 - Online
  // 2 - Busy
  // 3 - Away
  // 4 - Snooze
  // 5 - Looking to trade
  // 6 - Looking to play
  public personastate: number;

  public communityvisibilitystate: number;

  public profilestate: number;

  // TODO: Date
  public lastlogoff: string;

  public commentpermission: number;

  public realname: string;

  public primaryclanid: string;

  // TODO: Date
  public timecreated: string;

  // Steam app id
  public gameid: number;

  // Server ip
  public gameserverip: string;

  // Server extra info
  public gameextrainfo: string;

  public personastateflags: number;

  public loccountrycode: string;
  public locstatecode: string;
  public loccityid: string;

  // TODO: Date
  public created_at: string;

  // TODO: Date
  public updated_at: string;
}
