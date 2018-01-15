export class Permission {
  public id: number;
  public name: string;
  public display_name: string;
  public description: string;
  public created_at: Date;
  public updated_at: Date;

  // Generated / Relationships
  public pivot: PermissionPivot;
}

class PermissionPivot {
  public role_id: number;
  public permission_id: number;
}
