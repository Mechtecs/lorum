import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Setting} from "./setting";
import {Observable} from "rxjs/Observable";
import {MzToastService} from "ng2-materialize";

class SettingFlat {
  public page_title: string = "loading . . .";
  public ban_plugin: string = "none";
}

@Injectable()
export class SettingService {
  public settings: Setting[];
  public settingsFlat: SettingFlat = new SettingFlat();

  constructor(private http: HttpClient, private toaster: MzToastService) {
    this.fetchSettings();
  }

  public updateSetting(setting: Setting): Observable<Setting> {
    return this.http.put<Setting>('/api/setting/' + setting.id, setting);
  }

  public persistSettings(): void {
    let cnt = 0;
    this.settings.map((setting) => {
      this.updateSetting(setting).subscribe((response) => {
        this.toaster.show("Successfully updated setting '" + response.key + "'", 2000, "green");

        cnt++;
        if (cnt === this.settings.length) {
          this.fetchSettings();
        }
      })
    });
  }

  private fetchSettings(): void {
    this.http.get<Setting[]>('/api/setting').subscribe((settings: Setting[]) => {
      this.settings = settings;
      this.settings.map((setting) => {
        this.settingsFlat[setting.key] = setting.value;
      });
    });
  }

}
