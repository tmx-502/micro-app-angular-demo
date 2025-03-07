import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.less'
})
export class AppComponent {
  title = 'sub-angular17';

  expression: number = 100

  ngOnInit(): void {
    const targetNode = document.getElementById("some-id");

    const config = { attributes: true, childList: true, subtree: true };

    const callback = function (mutationsList: any, observer: any) {
     console.log(mutationsList,observer);
    };

    const observer = new MutationObserver(callback);

    if (targetNode) {
      observer.observe(targetNode, config);
    }
  }
}
