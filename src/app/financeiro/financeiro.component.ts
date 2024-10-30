import { Component, OnInit } from "@angular/core";
import { MessageService } from "primeng/api";
import { ChartService } from "../chart/chart.service";
import { FinanceiroService } from "./financeiro.service";
@Component({
  selector: "app-financeiro",
  templateUrl: "./financeiro.component.html",
  styleUrls: ["./financeiro.component.css"],
})
export class FinanceiroComponent implements OnInit {
  basicData: any;

  basicOptions: any;

  sidebarVisible = true;
  constructor(
    private chartService: ChartService,
    private financeiroService: FinanceiroService,
    private messageService: MessageService
  ) {}
  datasSelect = [
    {
      nome: "Janeiro",
      data_inicio: "2024-01-01",
      data_fim: "2024-01-31",
    },
    {
      nome: "Fevereiro",
      data_inicio: "2024-02-01",
      data_fim: "2024-02-29",
    },
    {
      nome: "Março",
      data_inicio: "2024-03-01",
      data_fim: "2024-03-31",
    },
    {
      nome: "Abril",
      data_inicio: "2024-04-01",
      data_fim: "2024-04-30",
    },
    {
      nome: "Maio",
      data_inicio: "2024-05-01",
      data_fim: "2024-05-31",
    },
    {
      nome: "Junho",
      data_inicio: "2024-06-01",
      data_fim: "2024-06-30",
    },
    {
      nome: "Julho",
      data_inicio: "2024-07-01",
      data_fim: "2024-07-31",
    },
    {
      nome: "Agosto",
      data_inicio: "2024-08-01",
      data_fim: "2024-08-31",
    },
    {
      nome: "Setembro",
      data_inicio: "2024-09-01",
      data_fim: "2024-09-30",
    },
    {
      nome: "Outubro",
      data_inicio: "2024-10-01",
      data_fim: "2024-10-30",
    },
    {
      nome: "Novembro",
      data_inicio: "2024-11-01",
      data_fim: "2024-11-30",
    },
    {
      nome: "Dezembro",
      data_inicio: "2024-12-01",
      data_fim: "2024-12-31",
    },
  ];

  datas =  {
    "nome": 'Setembro',
"data_inicio": "2024-09-01",
"data_fim": "2024-09-30"
 };
  
  valores = {
    Almoxarifado: 0,
    Adm: 0,
    MO: 0,
    AlmoFINANCEIRO: 0,
    MOFinanceiro: 0,
    AdmFinanceiro: 0,
    Insumos: 0,
    InsumosFinanceiro: 0,
    Energia: 0,
    EnergiaFinanceiro: 0,
    MateriaPrima: 0,
    MateriaPrimaFinanceiro: 0,
    Impostos: 0,
    ImpostosFinanceiro: 0,
    Comissoes: 0,
    ComissoesFinanceiro: 0,
  };
  Isdashboard = true;
  ngOnInit() {
    this.atualizar();
  }

  atualizar() {
    this.chartService
      .getAlmo(this.datas)
      .then((dados) => {
        this.valores.Almoxarifado = dados.valorTotal;
      })
      .then(() => {
        this.dashboard();
      })
      .catch((erro) => {
        this.messageService.add({
          severity: "error",
          detail: "Erro Almoxarifado! Message: " + erro.message,
        });
        console.log(erro);
      });

    this.financeiroService
      .getAlmo(this.datas)
      .then((dados) => {
        this.valores.AlmoFINANCEIRO = dados[0].TOTAL;
        console.log(dados);
      })
      .then(() => {
        this.dashboard();
      })
      .catch((erro) => {
        this.messageService.add({
          severity: "error",
          detail: "Erro Almoxarifado! Message: " + erro.message,
        });
        console.log(erro);
      });
    this.chartService
      .getADM(this.datas)
      .then((dados) => {
        this.valores.Adm = dados.valorTotal;
      })
      .then(() => {
        this.dashboard();
      })
      .catch((erro) => {
        this.messageService.add({
          severity: "error",
          detail: "Erro Administrativo! Message: " + erro.message,
        });
        console.log(erro);
      });

    this.financeiroService
      .getADM(this.datas)
      .then((dados) => {
        this.valores.AdmFinanceiro = dados[0].TOTAL;
      })
      .then(() => {
        this.dashboard();
      })
      .catch((erro) => {
        this.messageService.add({
          severity: "error",
          detail: "Erro Administrativo! Message: " + erro.message,
        });
        console.log(erro);
      });
    this.chartService
      .getMO(this.datas)
      .then((dados) => {
        this.valores.MO = dados.valorTotal;
      })
      .then(() => {
        this.dashboard();
      })
      .catch((erro) => {
        this.messageService.add({
          severity: "error",
          detail: "Erro Mão de Obra! Message: " + erro.message,
        });
        console.log(erro);
      });

    this.financeiroService
      .getMO(this.datas)
      .then((dados) => {
        this.valores.MOFinanceiro = dados[0].TOTAL;
      })
      .then(() => {
        this.dashboard();
      })
      .catch((erro) => {
        this.messageService.add({
          severity: "error",
          detail: "Erro Mão de Obra! Message: " + erro.message,
        });
        console.log(erro);
      });

    this.chartService
      .getInsumos(this.datas)
      .then((dados) => {
        this.valores.Insumos = dados.valorTotal;
      })
      .catch((erro) => {
        this.messageService.add({
          severity: "error",
          detail: "Erro Insumos! Message: " + erro.message,
        });
        console.log(erro);
      });

    this.financeiroService
      .getInsumos(this.datas)
      .then((dados) => {
        this.valores.InsumosFinanceiro = dados[0].TOTAL;
      })
      .catch((erro) => {
        this.messageService.add({
          severity: "error",
          detail: "Erro Insumos Financeiro! Message: " + erro.message,
        });
        console.log(erro);
      });
    this.chartService
      .getEnergia(this.datas)
      .then((dados) => {
        this.valores.Energia = dados.valorTotal;
      })
      .catch((erro) => {
        this.messageService.add({
          severity: "error",
          detail: "Erro Energia! Message: " + erro.message,
        });
        console.log(erro);
      });

    this.financeiroService
      .getEnergia(this.datas)
      .then((dados) => {
        this.valores.EnergiaFinanceiro = dados[0].TOTAL;
      })
      .catch((erro) => {
        this.messageService.add({
          severity: "error",
          detail: "Erro Financeiro Energia! Message: " + erro.message,
        });
        console.log(erro);
      });

    this.chartService
      .getMateriaPrima(this.datas)
      .then((dados) => {
        this.valores.MateriaPrima = dados.valorTotal;
      })
      .catch((erro) => {
        this.messageService.add({
          severity: "error",
          detail: "Erro Materia Prima! Message: " + erro.message,
        });
        console.log(erro);
      });

    this.financeiroService
      .getMateriaPrima(this.datas)
      .then((dados) => {
        this.valores.MateriaPrimaFinanceiro = dados[0].TOTAL;
      })
      .catch((erro) => {
        this.messageService.add({
          severity: "error",
          detail: "Erro Financeiro Materia Prima! Message: " + erro.message,
        });
        console.log(erro);
      });
    this.chartService
      .getImpostos(this.datas)
      .then((dados) => {
        this.valores.Impostos = dados.valorTotal;
      })
      .catch((erro) => {
        this.messageService.add({
          severity: "error",
          detail: "Erro Impostos! Message: " + erro.message,
        });
        console.log(erro);
      });

    this.financeiroService
      .getImpostos(this.datas)
      .then((dados) => {
        this.valores.ImpostosFinanceiro = dados[0].TOTAL;
      })
      .catch((erro) => {
        this.messageService.add({
          severity: "error",
          detail: "Erro Financeiro Impostos! Message: " + erro.message,
        });
        console.log(erro);
      });

    this.chartService
      .getComissoes(this.datas)
      .then((dados) => {
        this.valores.Comissoes = dados.valorTotal;
      })
      .catch((erro) => {
        this.messageService.add({
          severity: "error",
          detail: "Erro Comissoes! Message: " + erro.message,
        });
        console.log(erro);
      });

    this.financeiroService
      .getComissoes(this.datas)
      .then((dados) => {
        this.valores.ComissoesFinanceiro = dados[0].TOTAL;
      })
      .catch((erro) => {
        this.messageService.add({
          severity: "error",
          detail: "Erro Comissoes! Message: " + erro.message,
        });
        console.log(erro);
      });
  }
  dashboard() {
    const documentStyle = getComputedStyle(document.documentElement);
    const textColor = documentStyle.getPropertyValue("--text-color");
    const textColorSecondary = documentStyle.getPropertyValue(
      "--text-color-secondary"
    );
    const surfaceBorder = documentStyle.getPropertyValue("--surface-border");

    this.basicData = {
      labels: ["Almoxarifado", "Mao de Obra", "Administração"],
      datasets: [
        {
          label: "Estoque",
          data: [this.valores.Almoxarifado, this.valores.MO, this.valores.Adm],
          backgroundColor: "rgba(255, 159, 64, 1)",
          borderColor: "rgb(255, 159, 64)",
          borderWidth: 1,
        },
        {
          label: "Financeiro",
          backgroundColor: "rgba(73, 255, 82, 0.8)",
          borderColor: "rgb(55, 255, 16)",
          data: [
            this.valores.AlmoFINANCEIRO,
            this.valores.MOFinanceiro,
            this.valores.AdmFinanceiro,
          ],
        },
      ],
    };

    this.basicOptions = {
      plugins: {
        legend: {
          labels: {
            color: "white",
          },
        },
      },
      scales: {
        y: {
          beginAtZero: true,
          ticks: {
            color: "white",
          },
          grid: {
            color: "white",
            drawBorder: false,
          },
        },
        x: {
          ticks: {
            color: "white",
          },
          grid: {
            color: "white",
            drawBorder: false,
          },
        },
      },
    };
  }

  dashboard2() {
    const documentStyle = getComputedStyle(document.documentElement);
    const textColor = documentStyle.getPropertyValue("--text-color");
    const textColorSecondary = documentStyle.getPropertyValue(
      "--text-color-secondary"
    );
    const surfaceBorder = documentStyle.getPropertyValue("--surface-border");

    this.basicData = {
      labels: ["Insumos", "Energia", "Materia Prima", "Impostos", "Comissoes"],
      datasets: [
        {
          label: "Valor Total",
          data: [
            this.valores.Insumos,
            this.valores.Energia,
            this.valores.MateriaPrima,
            this.valores.Impostos,
            this.valores.Comissoes,
          ],
          backgroundColor: "rgba(255, 159, 64, 1)",
          borderColor: "rgb(255, 159, 64)",
          borderWidth: 1,
        },
        {
          label: "Financeiro",
          backgroundColor: "rgba(73, 255, 82, 0.8)",
          borderColor: documentStyle.getPropertyValue("--blue-500"),
          data: [
            this.valores.InsumosFinanceiro,
            this.valores.EnergiaFinanceiro,
            this.valores.MateriaPrimaFinanceiro,
            this.valores.ImpostosFinanceiro,
            this.valores.ComissoesFinanceiro,
          ],
        },
      ],
    };

    this.basicOptions = {
      plugins: {
        legend: {
          labels: {
            color: "white",
          },
        },
      },
      scales: {
        y: {
          beginAtZero: true,
          ticks: {
            color: "white",
          },
          grid: {
            color: "white",
            drawBorder: false,
          },
        },
        x: {
          ticks: {
            color: "white",
          },
          grid: {
            color: "white",
            drawBorder: false,
          },
        },
      },
    };
  }

  trocar() {
    this.Isdashboard ? this.dashboard2() : this.dashboard();
    this.Isdashboard ? (this.Isdashboard = false) : (this.Isdashboard = true);
  }
}
