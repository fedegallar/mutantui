import { Component, OnInit } from '@angular/core';
import { MutantService } from 'src/app/servicios/mutant/mutant.service';
import { Pageable } from 'src/app/entidades/Pageable';
import { Mutant } from 'src/app/entidades/Mutant';
@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

  constructor(private servicio:MutantService) { }
  page:Number=0;
  pageable:Pageable;
  mutants: Mutant[];
  ngOnInit() {
    this.getPersonas(this.page);
  }

  getPersonas(page:Number){
    this.servicio.getPeople(page).subscribe((data)=>{
      this.pageable=data;
      this.mutants = this.pageable.content;
    });
  }

}
