import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest } from '@angular/common/http';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  apiUrl = environment.apiUrl;
  imgUrl = environment.imageURL;
  constructor(private http: HttpClient) { }


  CreateDoctor(data) {
    return this.http.post(this.apiUrl + 'user/register', data);
  }

  CreateDoctor1(data) {
    return this.http.post(this.apiUrl + 'doctor/edit', data);
  }




  DoctorList() {
    return this.http.get(this.apiUrl + 'doctor/getlist');
  }

  CreateLiveDoctor(data) {
    return this.http.post(this.apiUrl + 'livedoctors/signup', data);
  }

  EditLiveDoctor(data) {
    return this.http.post(this.apiUrl + 'livedoctors/edit', data);
  }

  LiveDoctorList() {
    return this.http.get(this.apiUrl + 'livedoctors/getlist');
  }

  LiveDeleteDoctor(data) {
    return this.http.delete(this.apiUrl + 'livedoctors/delete/' + data);
  }

  DeleteDoctor(data) {
    return this.http.delete(this.apiUrl + 'doctor/delete/' + data);
  }


  UserList() {
    return this.http.get(this.apiUrl + 'user/getlist');
  }

  DeleteUser(data) {
    return this.http.delete(this.apiUrl + 'user/delete/' + data);
  }



  PatientList() {
    return this.http.get(this.apiUrl + 'getlist');
  }

  DeletePatient(data) {
    return this.http.delete(this.apiUrl + 'delete/' + data);
  }



  GetFamilyList(data) {
    return this.http.post(this.apiUrl + 'family/getlist', data);
  }



  DeleteMembers(data) {
    return this.http.post(this.apiUrl + 'family/delete', data);
  }






  specializationList() {
    return this.http.get<any>(this.apiUrl + 'specialization/getlist');
  }

  Createspecialization(data) {
    return this.http.post(this.apiUrl + 'specialization/create', data);
  }
  Editspecialization(data) {
    return this.http.post(this.apiUrl + 'specialization/edit', data);
  }
  DeleteSpecialisation(data) {
    return this.http.post(this.apiUrl + 'specialization/delete', data);
  }




  Banner_List() {
    return this.http.get(this.apiUrl + 'homebanner/getlist');
  }


  CreateBanner(data) {
    return this.http.post(this.apiUrl + 'homebanner/create', data);
  }


  DeleteBanner(data) {
    return this.http.delete(this.apiUrl + 'homebanner/delete/' + data);
  }


  Symptoms_list() {
    return this.http.get(this.apiUrl + 'symptoms/getlist');
  }


  CreateSymptoms(data) {
    return this.http.post(this.apiUrl + 'symptoms/create', data);
  }
  EditSymptoms(data) {
    return this.http.post(this.apiUrl + 'symptoms/edit', data);
  }
  deleteSymptoms(data) {
    return this.http.post(this.apiUrl + 'symptoms/delete', data);
  }



  editSymptoms(data) {
    return this.http.post(this.apiUrl + 'symptoms/edit', data);
  }

  languageList() {
    return this.http.get<any>(this.apiUrl + 'languages/getlist');
  }
  createcompany(data) {
    return this.http.post(this.apiUrl + 'company/create', data);
  }
  companylist() {
    return this.http.get<any>(this.apiUrl + 'company/getlist');
  }
  Deletecompany(data) {
    return this.http.post(this.apiUrl + 'company/delete', data);
  }

  Editcompany(data) {
    return this.http.post(this.apiUrl + 'company/edit', data);
  }
}