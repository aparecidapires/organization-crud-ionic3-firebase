import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { Organization } from '../../models/organization.interface';


@Injectable()
export class OrganizationProvider {

  constructor(public firestore: AngularFirestore) { }

  getOrganizations(): AngularFirestoreCollection<Organization[]> {
    return this.firestore.collection(`organizations`);
  }

  createOrganization(name: string, description: string) {
    const id = this.firestore.createId();

    return this.firestore.doc(`organizations/${id}`).set({
      id,
      name,
      description
    })
  }

  deleteOrganization(id: string): Promise<void> {
    return this.firestore.doc(`organizations/${id}`).delete();
  }

}
