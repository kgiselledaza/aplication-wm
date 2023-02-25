import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Config } from '@core/models/config.model';
import { firstValueFrom } from 'rxjs';
import { environment } from '@environments/environment';

@Injectable()
export class ConfigService {
  static settings: Config;
  static settingsPromise: Promise<Config>;

  constructor(private readonly http: HttpClient) {}

  async init(pathDeployJson: string, jsonConfig = false): Promise<void> {
    if (!ConfigService.settingsPromise) {
      await this.loadConfig(pathDeployJson, jsonConfig);
    }
  }

  public async loadConfig(
    pathConfigData: string,
    jsonConfig = false
  ): Promise<void> {
    if (!jsonConfig) {
      ConfigService.settingsPromise = this.obtenerJSON(pathConfigData);
      ConfigService.settings = await ConfigService.settingsPromise;
    } else {
      ConfigService.settings = JSON.parse(pathConfigData);
    }
  }

  private async obtenerJSON<T>(pathConfigData: string): Promise<T> {
    const jsonFile = `${pathConfigData}/config.${environment.config}.json`;
    return firstValueFrom(this.http.get(jsonFile))
      .then((json) => json as T)
      .catch((err) => {
        throw new Error(
          `No se pudo cargar el archivo '${jsonFile}': ${JSON.stringify(err)}`
        );
      });
  }
}
