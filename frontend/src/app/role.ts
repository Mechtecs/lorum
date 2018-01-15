import {Permission} from "./permission";

export class Role {
  public id: number;
  public name: string;
  public order: number;
  public display_name: string;
  public format_style: string;
  public description: string;
  public default_group: boolean;
  public created_at: Date;
  public updated_at: Date;

  // Generated / Relationships
  public pivot: RolePivot;
  public perms: Permission
}

class RolePivot {
  public user_id: string;
  public role_id: number;
}
