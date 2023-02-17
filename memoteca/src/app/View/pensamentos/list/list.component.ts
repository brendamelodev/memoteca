import { Component, OnInit } from '@angular/core';
import { PensamentoService } from 'src/app/Controler/pensamento.service';
import { Pensamento } from 'src/app/Model/pensamento';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  listaPensamentos: Pensamento[] = [];

  constructor(private service: PensamentoService) { }

  ngOnInit(): void {
    this.listarPensamentos()
  }

  listarPensamentos() {
    this.service.listar().subscribe((listaPensamentos) => {
      this.listaPensamentos = listaPensamentos;
    })
  }
}
