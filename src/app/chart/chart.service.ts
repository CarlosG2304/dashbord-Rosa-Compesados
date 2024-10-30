import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ChartService {

  constructor(private http: HttpClient) { }
almoxarifadoURL = 'http:'+window.location.href.toString().split(':')[1]+':3000/CUSTO/0100'
AdmURL = 'http:'+window.location.href.toString().split(':')[1]+':3000/CUSTO/0228'
MaoObraURL = 'http:'+window.location.href.toString().split(':')[1]+':3000/CUSTO/0229'
InsumosURL = 'http:'+window.location.href.toString().split(':')[1]+':3000/CUSTO/0074'
EnergiaURL = 'http:'+window.location.href.toString().split(':')[1]+':3000/CUSTO/0080'
MateriaURL = 'http:'+window.location.href.toString().split(':')[1]+':3000/CUSTO/0204'
ImpostosURL = 'http:'+window.location.href.toString().split(':')[1]+':3000/CUSTO/0106'
ComissoesURL = 'http:'+window.location.href.toString().split(':')[1]+':3000/CUSTO/0230' 
  
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

          

     getInsumos(datas:any):Promise<any>{
    
       let params = new HttpParams();
       params = params.set('data_inicio',datas.data_inicio)
       params = params.set('data_fim',datas.data_fim)
              return this.http.get(this.InsumosURL,{params}).toPromise()
              }
 
     getEnergia(datas:any):Promise<any>{
    
                let params = new HttpParams();
                params = params.set('data_inicio',datas.data_inicio)
                params = params.set('data_fim',datas.data_fim)
                       return this.http.get(this.EnergiaURL,{params}).toPromise()
                       }

        getMateriaPrima(datas:any):Promise<any>{
    
                        let params = new HttpParams();
                        params = params.set('data_inicio',datas.data_inicio)
                        params = params.set('data_fim',datas.data_fim)
                               return this.http.get(this.MateriaURL,{params}).toPromise()
                               }
        getImpostos(datas:any):Promise<any>{
    
                                let params = new HttpParams();
                                params = params.set('data_inicio',datas.data_inicio)
                                params = params.set('data_fim',datas.data_fim)
                                       return this.http.get(this.ImpostosURL,{params}).toPromise()
                                       }
          
        getComissoes(datas:any):Promise<any>{
    
                                        let params = new HttpParams();
                                        params = params.set('data_inicio',datas.data_inicio)
                                        params = params.set('data_fim',datas.data_fim)
                                               return this.http.get(this.ComissoesURL,{params}).toPromise()
                                               }
                  
                 
                         }


        
                                     
        
        

