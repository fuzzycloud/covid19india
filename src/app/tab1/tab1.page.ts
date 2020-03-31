import { Component } from '@angular/core';
import {DataService} from '../api/data.service';
import {LoadingController} from '@ionic/angular';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  constructor(private dataService: DataService, private loadingController: LoadingController) {
  this.initialize().then();
  }

  async initialize() {
    const loading = await this.loadingController.create({
      message: 'Please wait...',
    });
    await loading.present();
    const data = await this.dataService.getData().toPromise();
    console.log(data);
    await loading.dismiss();
  }


}
