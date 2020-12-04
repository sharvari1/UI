import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dinojump',
  templateUrl: './dinojump.component.html',
  styleUrls: ['./dinojump.component.scss']
})
export class DinoJumpComponent implements OnInit {
  i:number=0;
  finalScore:number=0;
  constructor() { }

  ngOnInit() {
  }
jump()
{
  this.i=this.i+10;
  var character=document.getElementById("character");
  if(character != null)
  {
    character.classList.add("animate");
  }

  setTimeout(function(){
    if(character != null)
    {
      character.classList.remove("animate");
    }
   
  },500);
}
checkDead=setInterval(()=>{
  var character=document.getElementById("character");
  var block=document.getElementById("block");
  if(character != null && block != null)
  {
    var characterTop=parseInt(window.getComputedStyle(character).getPropertyValue("top"));
    var blockLeft=parseInt(window.getComputedStyle(block).getPropertyValue("left"));
    if(blockLeft<20 && blockLeft>0 && characterTop>=130){
      this.finalScore=this.i;
      this.i=0;
      block.style.animation="none";
      alert("losed");
  }
  }
},10);

}

