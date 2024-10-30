import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class InsumosService {
  InsumosURL = 'http:'+window.location.href.toString().split(':')[1]+':3000/Insumos/'
  /* InsumosSaldoURL = 'http:'+window.location.href.toString().split(':')[1]+':3001/saldo/insumos' */
  InsumosSaldoURL = 'http://192.168.1.221:3001/saldo/insumos'
    
  
  constructor(private http: HttpClient) { }
  
  
    get(codigo:any,datas:any):Promise<any>{
      
      let params = new HttpParams();
          params = params.set('data_inicio',datas.data_inicio)
         params = params.set('data_fim',datas.data_fim)
        return this.http.get(this.InsumosURL+codigo,{params}).toPromise()
        }

    getSaldoget(datas:any):Promise<any>{
      
      let params = new HttpParams();
          params = params.set('dataInicio',datas.data_inicio)
         params = params.set('dataFim',datas.data_fim)
        return this.http.get(this.InsumosSaldoURL,{params}).toPromise()
        }

}
