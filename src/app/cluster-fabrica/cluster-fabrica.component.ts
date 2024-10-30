import { Component, OnInit } from '@angular/core';
import { BarClusterService } from '../bar-cluster/bar-cluster.service';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-cluster-fabrica',
  templateUrl: './cluster-fabrica.component.html',
  styleUrls: ['./cluster-fabrica.component.css']
})
export class ClusterFabricaComponent implements OnInit {
  basicData: any;

  basicOptions: any;
  
  carregando:boolean = true 

  dataset  = {
    type: 'bar',
    label: 'Dataset 1',
    backgroundColor: 'rgba(255, 159, 64, 1)',
    data: []
}

  sidebarVisible = true
  constructor(private chartService:BarClusterService,
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
    "Almoxarifado":0,
    "Adm":0,
    "MO": 0,
    "AlmoFabrica":0,
    "MOFabrica":0,
    "AdmFabrica":0,
    "Insumos":0,
    "Energia":0,
    "MateriaPrima":0,
    "Impostos":0,
    "Comissoes":0,
 }
 data:any = []
/*  dataset  = {
    type: 'bar',
    label: 'Dataset 1',
    backgroundColor: 'rgba(255, 159, 64, 1)',
    data: []
}
 */
datasets:any = []
datasets2:any = []
 Isdashboard = true
  ngOnInit() {
 
    this.atualizar()

    
}

generateColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    
    return color;
    
  }

atualizar(){
  this.carregando = true
  this.valores ={
    "Almoxarifado":0,
    "Adm":0,
    "MO": 0,
    "AlmoFabrica":0,
    "MOFabrica":0,
    "AdmFabrica":0,
    "Insumos":0,
    "Energia":0,
    "MateriaPrima":0,
    "Impostos":0,
    "Comissoes":0,
 }; 

this.data = [];
this.dataset  = {
  type: 'bar',
  label: 'Dataset 1',
  backgroundColor: 'rgba(255, 159, 64, 1)',
  data: []
}

this.datasets = []
this.datasets2 = []

 
    this.chartService.getAlmoFabrica(this.datas).then(dados => {
      for(let dado of dados){
        let dataset = {
            type: 'bar',
            label:  dado.CUSTONOME,
            backgroundColor:this.generateColor(),
            data: [dado.Soma]
        }
        this.valores.Almoxarifado += dado.Soma
        this.datasets.push(dataset)
        
    }
           
           
      
        console.log(dados)
    } ).then(() => {
      let i = 0
      this.chartService.getMOFabrica(this.datas).then(dados => {
        for(let dataset of this.datasets){
          dataset.data.push(dados[i].Soma)
          this.valores.MO += dados[i].Soma
          i++
        }
        /* this.messageService.add({ severity: 'success', detail: 'Mão de Obra carregado com sucesso' }); */
      
    } ).then(() =>{
      let i = 0
      this.chartService.getADMFabrica(this.datas).then(dados => {
        for(let dataset of this.datasets){
          dataset.data.push(dados[i].Soma)
          this.valores.Adm += dados[i].Soma
          console.log(this.valores.Adm)
          i++
          if(i == 9){
            break
          }
        }
        this.datasets.push({
          type: 'line',
          label: 'Total',
          borderColor: 'rgb(72, 113, 232)',
          borderWidth: 2,
          fill: false,
          tension: 0.4,
          data: [this.valores.Almoxarifado,this.valores.MO,this.valores.Adm]
      },)
     
    }).then(() => { this.dashboard()})})
})
    
/*     this.messageService.add({ severity: 'success', detail: 'Administrativo carregado com sucesso' }); */
 /* .catch(erro => {
     this.messageService.add({ severity: 'error', detail: 'Erro Administrativo! Message: '+erro.message });
     console.log(erro)
   }); */ /* .then(() => {
        let i = 0
        this.chartService.getMOFabrica(this.datas).then(dados => {
          console.log(dados)
         for(let dataset of this.datasets){
            dataset.data.push(dados[i].Soma)
            this.valores.MO += dados[i].Soma
            i++
          }
          this.messageService.add({ severity: 'success', detail: 'Mão de Obra carregado com sucesso' }); 
        
      } ) *//* .then(() =>{
        let i = 0
        this.chartService.getADMfabrica(this.datas).then(dados => {
          
          for(let dataset of this.datasets){
            dataset.data.push(dados[i].Soma)
            this.valores.Adm += dados[i].Soma
            console.log(this.valores.Adm)
            i++
            if(i == 9){
              break
            }
          }
          this.datasets.push({
            type: 'line',
            label: 'Total',
            borderColor: 'rgb(72, 113, 232)',
            borderWidth: 2,
            fill: false,
            tension: 0.4,
            data: [this.valores.Almoxarifado,this.valores.MO,this.valores.Adm]
        },)
      } ) */
       
/*     })  }) */ 
   

}
dashboard(){
    const documentStyle = getComputedStyle(document.documentElement);
    const textColor = documentStyle.getPropertyValue('--text-color');
    const textColorSecondary = documentStyle.getPropertyValue('--text-color-secondary');
    const surfaceBorder = documentStyle.getPropertyValue('--surface-border');
  
    this.carregando = false
    
    this.basicData = {
        labels: ['Almoxarifado', 'Mão de Obra','Administrativo'],
        datasets: this.datasets
        
    };

    this.basicOptions = {
        
            maintainAspectRatio: false,
            aspectRatio: 0.8,
            plugins: {
              tooltip: {
                mode: 'index',
                intersect: false,
              },
              legend: {
                labels: {
                  color: textColor,
                },
              },
            },
            scales: {
              x: {
                stacked: true,
                ticks: {
                  color: textColorSecondary,
                },
                grid: {
                  color: surfaceBorder,
                  drawBorder: false,
                },
              },
              y: {
                stacked: true,
                ticks: {
                  color: textColorSecondary,
                },
                grid: {
                  color: surfaceBorder,
                  drawBorder: false,
                },
              },
            },
          }
        
}


}
