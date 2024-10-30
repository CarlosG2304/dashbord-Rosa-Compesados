import { Component, OnInit } from '@angular/core';
import { MessageService } from 'primeng/api';
import { InsumosService } from './insumos.service';

@Component({
  selector: 'app-insumos',
  templateUrl: './insumos.component.html',
  styleUrls: ['./insumos.component.css']
})
export class InsumosComponent implements OnInit {
  basicData: any;

  basicOptions: any;
  
  carregando:boolean = true 

  sidebarVisible = true

  nomeInsumos:any = []

  valoresInsumos:any = []

  constructor(
    private insumosService:InsumosService,
    private messageService:MessageService
  ){}
  datasSelect =  [{
    "nome": 'Janeiro',
    "data_inicio": "2024-01-01",
    "data_fim": "2024-01-31"
    },{
    "nome": 'Fevereiro',
    "data_inicio": "2024-02-01",
    "data_fim": "2024-02-29"
    },{
        "nome": 'Março',
        "data_inicio": "2024-03-01",
        "data_fim": "2024-03-31"
        },{
    "nome": 'Abril',
    "data_inicio": "2024-04-01",
    "data_fim": "2024-04-30"
    },{
       "nome": 'Maio',
    "data_inicio": "2024-05-01",
    "data_fim": "2024-05-31"
     },{
        "nome": 'Junho',
    "data_inicio": "2024-06-01",
    "data_fim": "2024-06-30"
     },{
        "nome": 'Julho',
    "data_inicio": "2024-07-01",
    "data_fim": "2024-07-31"
     },{
        "nome": 'Agosto',
    "data_inicio": "2024-08-01",
    "data_fim": "2024-08-31"
     }, {
        "nome": 'Setembro',
    "data_inicio": "2024-09-01",
    "data_fim": "2024-09-30"
     },{
        "nome": 'Outubro',
    "data_inicio": "2024-10-01",
    "data_fim": "2024-10-30"
     }, {
        "nome": 'Novembro',
    "data_inicio": "2024-11-01",
    "data_fim": "2024-11-30"
     }, {
        "nome": 'Dezembro',
    "data_inicio": "2024-12-01",
    "data_fim": "2024-12-31"
     }]

     datas = {
        "nome": 'Setembro',
    "data_inicio": "2024-09-01",
    "data_fim": "2024-09-30"
     }
     
 valores ={
    "mr":0,
    "wbp":0,
    "trigo": 0,
    "cupinicida":0,
    "catalizador":0,
    "calcario":0
 }
 data:any = []
 dataset  = {
    type: 'bar',
    label: 'Dataset 1',
    backgroundColor: 'rgba(255, 159, 64, 1)',
    data: []
}

datasets:any = []
datasets2:any = []
 Isdashboard = true
  ngOnInit() {
 
    this.atualizar()

    
}

  atualizar(){
   this.carregando = true
   this.nomeInsumos = []
   this.valoresInsumos = []

    this.insumosService.get('000774',this.datas).then(data => {
      this.valores.mr = data[0].SUM 
   
    }).then(() => {
      this.insumosService.get('000776',this.datas).then(data => {
        this.valores.wbp = data[0].SUM 
      
      }).then(() => {
        this.insumosService.get('000778',this.datas).then(data => {
          this.valores.trigo = data[0].SUM 
    
        }).then(() => {
          this.insumosService.get('001515',this.datas).then(data => {
            this.valores.cupinicida = data[0].SUM 
         
          }).then(() => {
            this.insumosService.get('000780',this.datas).then(data => {
              this.valores.catalizador = data[0].SUM 
          
          }).then(() => {
            this.insumosService.get('000772',this.datas).then(data => {
              this.valores.calcario = data[0].SUM 
            }).then(() => {
              this.dashboard()
              this.carregando = false
            }).catch(error => {
              this.messageService.add({
                severity: "error",
                detail: "Erro Calcario! Message: " + error.message,
              });
          })
          }).catch(error => {
            this.messageService.add({
              severity: "error",
              detail: "Erro Catalizador! Message: " + error.message,
            })})
        }).catch(error => {
          this.messageService.add({
            severity: "error",
            detail: "Erro Cupinicida! Message: " + error.message,
          })})
    
      }).catch(error => {
        this.messageService.add({
          severity: "error",
          detail: "Erro Trigo! Message: " + error.message,
        })})
    }).catch(error => {
      this.messageService.add({
        severity: "error",
        detail: "Erro WBP! Message: " + error.message,
      })})
  }).catch(error => {
    this.messageService.add({
      severity: "error",
      detail: "Erro MR! Message: " + error.message,
    })})

    
    this.insumosService.getSaldoget(this.datas).then(data => {
          for(let saldo of data){
            console.log(data)
            if(saldo.nome == 'CUPINICIDA EM PÓ P/ COLA DE COMPENSADO'){
              this.nomeInsumos.push('CUPINICIDA')
              this.valoresInsumos.push(saldo.total)
            }else{
             this.nomeInsumos.push(saldo.nome)
             this.valoresInsumos.push(saldo.total)
            }
          }
    })
  



}
dashboard(){

    this.basicData = {
        labels: ['Resina MR', 'Resina WBP', 'Trigo','Calcario','Catalizador','Cupinicida'],
        datasets: [
            {
                label: 'Valor Total',
                data: [this.valores.mr,this.valores.wbp, this.valores.trigo,this.valores.calcario,this.valores.catalizador,this.valores.cupinicida],
                backgroundColor: 'rgba(255, 159, 64, 1)',
                borderColor: 'rgb(255, 159, 64)',
                borderWidth: 1
            }
           
        ]
    };

    this.basicOptions = {
        plugins: {
            legend: {
                labels: {
                    color: 'white'
                }
            }
        },
        scales: {
            y: {
                beginAtZero: true,
                ticks: {
                    color: 'white'
                },
                grid: {
                    color: 'white',
                    drawBorder: false
                }
            },
            x: {
                ticks: {
                    color: 'white'
                },
                grid: {
                    color: "white",
                    drawBorder: false
                }
            }
        }
    };
}

dashboard2(){
    const documentStyle = getComputedStyle(document.documentElement);
    const textColor = documentStyle.getPropertyValue('--text-color');
    const textColorSecondary = documentStyle.getPropertyValue('--text-color-secondary');
    const surfaceBorder = documentStyle.getPropertyValue('--surface-border');

    this.basicData = {
        labels: this.nomeInsumos,
        datasets: [
            {
                label: 'Valor Total',
                data: this.valoresInsumos,
                backgroundColor: 'rgba(255, 159, 64, 1)',
                borderColor: 'rgb(255, 159, 64)',
                borderWidth: 1
            }
           
        ]
    };

    this.basicOptions = {
        plugins: {
            legend: {
                labels: {
                    color: 'white'
                }
            }
        },
        scales: {
            y: {
                beginAtZero: true,
                ticks: {
                    color: 'white'
                },
                grid: {
                    color: 'white',
                    drawBorder: false
                }
            },
            x: {
                ticks: {
                    color: 'white'
                },
                grid: {
                    color: "white",
                    drawBorder: false
                }
            }
        }
    };
}

    trocar(){
        this.Isdashboard?  this.dashboard2() : this.dashboard()
        this.Isdashboard?  this.Isdashboard = false: this.Isdashboard = true
    } 
}
