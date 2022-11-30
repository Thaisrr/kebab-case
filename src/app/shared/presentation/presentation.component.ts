import {Component, ElementRef, OnInit, Renderer2, ViewChild} from '@angular/core';

@Component({
  selector: 'app-presentation',
  templateUrl: './presentation.component.html',
  styleUrls: ['./presentation.component.css']
})
export class PresentationComponent implements OnInit {
  @ViewChild('image') image?: ElementRef;
  @ViewChild('text') text?: ElementRef;

  constructor(private renderer: Renderer2) { }

  ngOnInit(): void {
    this.onScroll();
  }

  // Method to listen to the scroll event
  onScroll(): void {
    this.renderer.listen('window', 'scroll', (e) => {
      this.animateImage();
    });
  }

  // Method to animate the image when the user scrolls
  animateImage(): void {
    console.log('in animateImage');
    [this.image?.nativeElement, this.text?.nativeElement].forEach((element) => {
      if (element) {
        const elPosition = element.getBoundingClientRect().top;
        const screenPosition = window.innerHeight  - 100;
        if (elPosition < screenPosition) {
          element.classList.add('animate');
        } else {
          element.classList.remove('animate');
        }
      }
    });
  }

}
