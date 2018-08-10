import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Alert, AlertController } from 'ionic-angular';
import { Organization } from '../../models/organization.interface';
import { OrganizationProvider } from '../../providers/organization/organization';
import { identifierModuleUrl } from '@angular/compiler';


@IonicPage()
@Component({
  selector: 'page-detail',
  templateUrl: 'detail.html',
})
export class DetailPage {

  public organization: Organization;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public alertCtrl: AlertController,
    public organizationProvider: OrganizationProvider
  ) {
    this.organization = this.navParams.get('organization')
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DetailPage');
  }

  deleteOrganization(idOrganization: string, nameOrganization: string): void {
    const alert: Alert = this.alertCtrl.create({
      message: `Are you sure you want to delete "${nameOrganization}" from your list?`,
      buttons: [
        {
          text: 'Cancel',
          handler: () => {
            console.log('Clicked Cancel');
          },
        },
        {
          text: 'OK',
          handler: () => {
            this.organizationProvider.deleteOrganization(idOrganization).then(() => {
              this.navCtrl.pop();
            });
          },
        },
      ],
    });
    alert.present();
  }

}
