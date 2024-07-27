import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FinanceiroService {
almoxarifadoURL = 'http:'+window.location.href.toString().split(':')[1]+':3000/FINANCEIRO/ALMOXARIFADO'
MaoObraURL = 'http:'+window.location.href.toString().split(':')[1]+':3000/FINANCEIRO/MAOOBRA'
AdmURL = 'http:'+window.location.href.toString().split(':')[1]+':3000/FINANCEIRO/ADM'
InsumosURL = 'http:'+window.location.href.toString().split(':')[1]+':3000/FINANCEIRO/INSUMOS'
EnergiaURL = 'http:'+window.location.href.toString().split(':')[1]+':3000/FINANCEIRO/ENERGIA'
MateriaURL = 'http:'+window.location.href.toString().split(':')[1]+':3000/FINANCEIRO/MATERIAPRIMA'
ImpostosURL = 'http:'+window.location.href.toString().split(':')[1]+':3000/FINANCEIRO/IMPOSTOS'
ComissoesURL = 'http:'+window.location.href.toString().split(':')[1]+':3000/FINANCEIRO/COMISSOES' 
  

constructor(private http: HttpClient) { }


  getAlmo(datas:any):Promise<any>{
    
    let params = new HttpParams();
        params = params.set('data_inicio',datas.data_inicio)
       params = params.set('data_fim',datas.data_fim)
      return this.http.get(this.almoxarifadoURL,{params}).toPromise()
      }
    getMO(datas:any):Promise<any>{
    
        let params = new HttpParams();
            params = params.set('data_inicio',datas.data_inicio)
           params = params.set('data_fim',datas.data_fim)
          return this.http.get(this.MaoObraURL,{params}).toPromise()
          }

    getADM(datas:any):Promise<any>{
    
            let params = new HttpParams();
                params = params.set('data_inicio',datas.data_inicio)
               params = params.set('data_fim',datas.data_fim)
              return this.http.get(this.AdmURL,{params}).toPromise()
              }
    getMateriaPrima(datas:any):Promise<any>{
    
        let params = new HttpParams();
        params = params.set('data_inicio',datas.data_inicio)
        params = params.set('data_fim',datas.data_fim)
       return this.http.get(this.MateriaURL,{params}).toPromise()
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
