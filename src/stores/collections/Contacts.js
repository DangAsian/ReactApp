import { observable, action } from 'mobx';

import Api from '../../lib/helpers/api/index';

class Contacts {
  @observable all = [];
  @observable isLoading = false;

  @action async fetchAll(){
    this.isLoading = false;
    const response = await Api.get('/contacts');
    const status = await response.status;

    if (status === 200) {
      this.all = await response.json();
    }
  }

  @action async add(data) {
    // const headers = new Headers();
    // headers.append('Content-Type', 'application/json');


    const options = {
      method: 'POST',
      headers: {  'Content-Type': 'application/json'},
      body: JSON.stringify(data)
    };
    //
    // let response = await fetch('http://localhost:3000/v1/contacts', options).then(response => console.log('Success:', JSON.stringify(response)))
    // .catch(error => console.error('Error:', error));
    // console.log(response);

    // console.log(status);

    // const request = new Request('http://localhost:3000/v1/contacts', options)
    const response = await Api.post('/contacts', data)

    const status = await response.status;
    console.log(response);


    if (status === 201) {
      this.fetchAll()
    }
  }

  @action find(contact) {
    return (
      this.all[contact]
    );
  }

  @action async remove(contact) {
    this.isLoading = true;
    const response = await Api.delete(`/contacts/${contact}`);
    const status = await response.status
    // const existing = this.all
    // this.all = existing.filter( c => c.id !== contact)
    if (status === 200){
      this.isLoading = false;
      this.fetchAll();
    }
  }
}

export default new Contacts();
