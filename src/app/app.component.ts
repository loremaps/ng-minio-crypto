import { Component, OnInit } from '@angular/core';
import * as minio from "minio";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'ng-minio-crypto';
  buckets = [];

  async ngOnInit() {
    const mc = new minio.Client({
      endPoint: "play.min.io",
      port: 9000,
      useSSL: true,
      accessKey: "Q3AM3UQ867SPQQA43P2F",
      secretKey: "zuf+tfteSlswRu7BJ86wekitnifILbZam1KYY3TG"
    });
    // list buckets
    this.buckets = await mc.listBuckets();
  }
}
