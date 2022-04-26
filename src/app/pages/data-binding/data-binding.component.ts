import { Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})
export class DataBindingComponent implements OnInit {
  text = 'Paulo Santos';
  imageUrl = 'https://picsum.photos/300/300';
  imageDesc = "Descrição";
  buttonText = "Clique aqui";
  textRed = false;
  bgColor = "green";
  fontSize = '20px';
  widthImg = '600';
  textInput = '';
  number = 0;
  destroy = false;

  constructor() { }

  ngOnInit(): void {
  }

  retornaNome() {
    return this.text;
  }

  clicou(value: any) {
    console.log('clicou aqui', value);
    this.textRed = true;
  }

  clicou2(): void {
    console.log("textInput: ", this.textInput);
  }

  clicouNoFilho(text: any) {
    console.log(text);
  }

  incrementa() {
    this.number++;
  }

  destroiComponente() {
    this.destroy = true;
  }
}
