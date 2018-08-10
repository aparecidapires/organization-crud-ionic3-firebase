import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { OrganizationProvider } from '../../providers/organization/organization';
import { HomePage } from '../home/home';


@IonicPage()
@Component({
  selector: 'page-create',
  templateUrl: 'create.html',
})
export class CreatePage {

  public createOrganizationForm: FormGroup;

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public organizationProvider: OrganizationProvider,
    formBuilder: FormBuilder
  ) {
    this.createOrganizationForm = formBuilder.group({
      name: ['', Validators.required],
      description: ['', Validators.required]
    })
  }

  ionViewDidLoad() { }

  createOrganization(): void {
    const name = this.createOrganizationForm.value.name
    const description = this.createOrganizationForm.value.description

    this.organizationProvider.createOrganization(name, description)

    this.navCtrl.pop();
  }

}
