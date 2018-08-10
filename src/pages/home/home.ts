import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { OrganizationProvider } from '../../providers/organization/organization';
import { Organization } from '../../models/organization.interface';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  public organizationList;

  constructor(public navCtrl: NavController, 
              public organizationProvider: OrganizationProvider) {

  }

  ionViewDidLoad() {
    this.getOrganizations()
  }

  getOrganizations() {
    this.organizationList = this.organizationProvider.getOrganizations().valueChanges();
    console.log(this.organizationList)
  }

  goToCreatePage(): void {
    this.navCtrl.push('CreatePage');
  }

  goToDetailPage(organization: Organization): void {
    this.navCtrl.push('DetailPage', { organization: organization });
  }

}
