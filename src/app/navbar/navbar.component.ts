import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  @Input()
  deviceXs: boolean=false;
  constructor() { }

  ngOnInit(): void {
  }

myFunction() {
  console.log("in function");
    var x = document.getElementById("myLinks");
    if(x!=null)
    {
      if (x.style.display === "block") {
        x.style.display = "none";
      } else {
        x.style.display = "block";
      }
    }

  }

}
