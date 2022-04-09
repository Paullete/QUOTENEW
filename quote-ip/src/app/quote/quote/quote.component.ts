import { Component, OnInit } from '@angular/core';
import { Quote } from 'src/app/quote'; 

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
  quotes: Quote[] = [
    new Quote(1, 'Love', '"Being deeply loved by someone gives you strength, while loving someone deeply gives you courage."', 'Pinocchio', 'Woodey', new Date(2022, 1, 17), 0, 0),

    new Quote(2, 'Courage', '"It takes a great deal of bravery to stand up to our enemies, but just as much to stand up to our friends."', 'Pote', 'Walden Schaefer', new Date(2022, 1, 23), 0, 0),

    new Quote(3, 'Strenght', ' “You never know how strong you are, until being strong is your only choice”', '-Westermann Volker', '-Milka Makanda>', new Date(2022, 3, 29), 0, 0),

    new Quote(4, 'Success', '“To succeed in life, you need two things: ignorance and confidence.”', '-Mark Twain', 'Michael Yotto', new Date(2022, 3, 11), 0, 0),

    new Quote(5, 'Pain', '“The more we diminish our own pain, or rank it compared to what others have survived, the less empathetic we are to everyone.”', '-Brene Brown', 'Michelle', new Date(2022, 3, 27), 0, 0),

    new Quote(6, 'Happiness', ' “Happiness quite unshared can scarcely be called happiness; it has no taste.”', 'Charlotte Bronte`', 'Brenda', new Date(2022, 4, 2), 0, 0),
  ];

  toggleDetails(index: any) {
    this.quotes[index].showDetails = !this.quotes[index].showDetails;
  }
  addNewQuote(quote: any) {
    let quoteLength = this.quotes.length;
    quote.id = quoteLength + 1;
    this.quotes.push(quote);
  }

  deleteQuote(isSeen: any, index: any) {
    if (isSeen) {
      let toDelete = confirm(`Are you sure you want to delete Quote about  ${this.quotes[index].quote} ? `)

      if (toDelete) {
        this.quotes.splice(index, 1);
      }
    }
  }



  constructor() { }

  ngOnInit(): void {
  }

}
