import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class FileService {
  api_url = environment.api + '/files';

  constructor(public http: HttpClient) { }

  uploadFileJSON(file: File): void {
    const formData = new FormData();
    formData.append('file', file);
    // formData to json
    this.http.post(this.api_url, formData).subscribe(
      (response) => {

      }
    )
  }
}
