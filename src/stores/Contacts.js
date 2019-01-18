import { observable, action } from 'mobx';

class Contacts {
  @observable all = [
        {id: 0, name: 'Daniel', email: 'dan.justin.ang@gmail.com'},
        {id: 1, name: 'Molly', email: 'm.weimolly@gmail.com'}
      ];
  @action add(data) {
    const existing = this.all
    this.all = existing.concat(data);
  }

  @action find(contact) {
    return (
      this.all[contact]
    );
  }

  @action remove(contact) {
    const existing = this.all
    this.all = existing.filter( c => c.id !== contact)
  };
}

export default new Contacts();
