import { Component } from '@angular/core';
import { ChartService } from './chart.service';
import { MessageService } from 'primeng/api';


@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls:[ './chart.component.css']
})
export class ChartComponent {
  basicData: any;

  basicOptions: any;
  

  sidebarVisible = true
  constructor(private chartService:ChartService,
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
    this.chartService.getAlmo(this.datas).then(dados => {
        this.valores.Almoxarifado = dados.valorTotal 
        this.valores.AlmoFabrica = dados.fabrica
       
    } ).then(() => {
        this.dashboard()
     this.messageService.add({ severity: 'success', detail: 'Almoxarifado carregado com sucesso' });
    }) .catch(erro => {
        this.messageService.add({ severity: 'error', detail: 'Erro Almoxarifado! Message: '+erro.message });
        console.log(erro)
      });
    this.chartService.getADM(this.datas).then(dados => {
        this.valores.Adm = dados.valorTotal
        this.valores.AdmFabrica = dados.fabrica
     
    } ).then(() => {
        this.dashboard()
     this.messageService.add({ severity: 'success', detail: 'Administrativo carregado com sucesso' });
    }) .catch(erro => {
        this.messageService.add({ severity: 'error', detail: 'Erro Administrativo! Message: '+erro.message });
        console.log(erro)
      });
    this.chartService.getMO(this.datas).then(dados => {
        this.valores.MO = dados.valorTotal
        this.valores.MOFabrica = dados.fabrica 
        this.messageService.add({ severity: 'success', detail: 'Mão de Obra carregado com sucesso' });
      
    } ).then(() =>{
        
        this.dashboard()
    }) .catch(erro => {
        this.messageService.add({ severity: 'error', detail: 'Erro Mão de Obra! Message: '+erro.message });
        console.log(erro)
      });

      this.chartService.getInsumos(this.datas).then(dados => {
        this.valores.Insumos = dados.valorTotal
        this.messageService.add({ severity: 'success', detail: 'Insumos carregado com sucesso' });
      
    } ) .catch(erro => {
        this.messageService.add({ severity: 'error', detail: 'Erro Insumos! Message: '+erro.message });
        console.log(erro)
      });
      this.chartService.getEnergia(this.datas).then(dados => {
        this.valores.Energia = dados.valorTotal
        this.messageService.add({ severity: 'success', detail: 'Energia carregada com sucesso' });
      
    } ) .catch(erro => {
        this.messageService.add({ severity: 'error', detail: 'Erro Energia! Message: '+erro.message });
        console.log(erro)
      });

      this.chartService.getMateriaPrima(this.datas).then(dados => {
        this.valores.MateriaPrima = dados.valorTotal
        this.messageService.add({ severity: 'success', detail: 'Materia Prima carregada com sucesso' });
      
    } ).catch(erro => {
        this.messageService.add({ severity: 'error', detail: 'Erro Materia Prima! Message: '+erro.message });
        console.log(erro)
      })

      this.chartService.getImpostos(this.datas).then(dados => {
        this.valores.Impostos = dados.valorTotal
        this.messageService.add({ severity: 'success', detail: 'Impostos carregada com sucesso' });
      
    } ) .catch(erro => {
        this.messageService.add({ severity: 'error', detail: 'Erro Impostos! Message: '+erro.message });
        console.log(erro)
      })
    
      this.chartService.getComissoes(this.datas).then(dados => {
        this.valores.Comissoes = dados.valorTotal
        this.messageService.add({ severity: 'success', detail: 'Comissoes carregada com sucesso' });
      
    } ) .catch(erro => {
        this.messageService.add({ severity: 'error', detail: 'Erro Comissoes! Message: '+erro.message });
        console.log(erro)
      })
    

}
dashboard(){
    const documentStyle = getComputedStyle(document.documentElement);
    const textColor = documentStyle.getPropertyValue('--text-color');
    const textColorSecondary = documentStyle.getPropertyValue('--text-color-secondary');
    const surfaceBorder = documentStyle.getPropertyValue('--surface-border');

    this.basicData = {
        labels: ['Almoxarifado', 'Mao de Obra', 'Administração'],
        datasets: [
            {
                label: 'Valor Total',
                data: [this.valores.Almoxarifado,this.valores.MO, this.valores.Adm],
                backgroundColor: 'rgba(255, 159, 64, 1)',
                borderColor: 'rgb(255, 159, 64)',
                borderWidth: 1
            },
            {
                label: 'Fabrica',
                backgroundColor: 'rgba(55, 62, 255,0.8)',
                borderColor: documentStyle.getPropertyValue('--blue-500'),
                data: [this.valores.AlmoFabrica,this.valores.MOFabrica, this.valores.AdmFabrica]
            },
           
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
        labels: ['Insumos','Energia','Materia Prima', 'Impostos','Comissoes'],
        datasets: [
            {
                label: 'Valor Total',
                data: [this.valores.Insumos,this.valores.Energia, this.valores.MateriaPrima, this.valores.Impostos,this.valores.Comissoes],
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

