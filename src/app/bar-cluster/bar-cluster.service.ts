import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BarClusterService {

  constructor(private http: HttpClient) { }

almoxarifadoURL = 'http:'+window.location.href.toString().split(':')[1]+':3000/CUSTO/CLUSTER/0100'
AdmURL = 'http:'+window.location.href.toString().split(':')[1]+':3000/CUSTO/CLUSTER/0228'
MaoObraURL = 'http:'+window.location.href.toString().split(':')[1]+':3000/CUSTO/CLUSTER/0229'
almoxarifadoFAURL = 'http:'+window.location.href.toString().split(':')[1]+':3000/CUSTO/CLUSTER/FABRICA/0100'
AdmFAURL = 'http:'+window.location.href.toString().split(':')[1]+':3000/CUSTO/CLUSTER/FABRICA/0228'
MaoObraFAURL = 'http:'+window.location.href.toString().split(':')[1]+':3000/CUSTO/CLUSTER/FABRICA/0229'
InsumosURL = 'http:'+window.location.href.toString().split(':')[1]+':3000/CUSTO/CLUSTER/0074'
EnergiaURL = 'http:'+window.location.href.toString().split(':')[1]+':3000/CUSTO/CLUSTER/0080'
MateriaURL = 'http:'+window.location.href.toString().split(':')[1]+':3000/CUSTO/CLUSTER/0204'
ImpostosURL = 'http:'+window.location.href.toString().split(':')[1]+':3000/CUSTO/CLUSTER/0106'
ComissoesURL = 'http:'+window.location.href.toString().split(':')[1]+':3000/CUSTO/CLUSTER/0230' 
  
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

          getAlmoFabrica(datas:any):Promise<any>{
    
            let params = new HttpParams();
                params = params.set('data_inicio',datas.data_inicio)
               params = params.set('data_fim',datas.data_fim)
              return this.http.get(this.almoxarifadoFAURL,{params}).toPromise()
              }
          
               
            getADMFabrica(datas:any):Promise<any>{
              
              let params = new HttpParams();
                  params = params.set('data_inicio',datas.data_inicio)
                 params = params.set('data_fim',datas.data_fim)
                return this.http.get(this.AdmFAURL,{params}).toPromise()
                }
          
              getMOFabrica(datas:any):Promise<any>{
              
                  let params = new HttpParams();
                      params = params.set('data_inicio',datas.data_inicio)
                     params = params.set('data_fim',datas.data_fim)
                    return this.http.get(this.MaoObraFAURL,{params}).toPromise()
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