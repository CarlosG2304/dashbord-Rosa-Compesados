import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ChartService {

  constructor(private http: HttpClient) { }
almoxarifadoURL = 'http://localhost:3000/CUSTO/0100'
AdmURL = 'http://localhost:3000/CUSTO/0228'
MaoObraURL = 'http://localhost:3000/CUSTO/0229'


 
      
  
  getAlmo(datas:any):Promise<any>{
    
  let params = new HttpParams();
      params = params.set('data_inicio',datas.data_inicio)
     params = params.set('data_fim',datas.data_fim)
    return this.http.get(this.almoxarifadoURL,{params}).toPromise()
    }

     
  getADM(datas:any):Promise<any>{
    
    let params = new HttpParams();
        params = params.set('data_inicio',datas.data_inicio)
       params = params.set('data_fim',datas.data_fim)
      return this.http.get(this.AdmURL,{params}).toPromise()
      }

    getMO(datas:any):Promise<any>{
    
        let params = new HttpParams();
            params = params.set('data_inicio',datas.data_inicio)
           params = params.set('data_fim',datas.data_fim)
          return this.http.get(this.MaoObraURL,{params}).toPromise()
          }


 

        }