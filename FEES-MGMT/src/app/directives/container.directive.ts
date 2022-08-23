import { Directive, ElementRef, HostBinding, HostListener, Input, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Directive({
  selector: '[appContainer]'
})
export class ContainerDirective implements OnInit{
  constructor( private el:ElementRef , private auth:AuthService) {   
  }

  @Input() display:string='flex'
  @Input() justifyContent:string='space-between'
  @Input() paddingRight:string='20px'
  @Input() paddingLeft:string='20px'
  @Input() backgroundColor:string="blueviolet"
  @Input() color:string="coral"
  @Input() padding:string="0px"
  @Input() cursor:string="arrow"
  
  @HostBinding ('style.display') displaytype!:string
  @HostBinding ('style.backgroundColor') background!:string
  @HostBinding ('style.justifyContent') justify!:string
  @HostBinding ('style.paddingRight') paddingR!:string;
  @HostBinding ('style.paddingLeft') paddingL!:string;
  @HostBinding ('style.color') color1!:string;
  @HostBinding ('style.padding') padding1!:string;
  @HostBinding ('style.cursor') cursor1!:string;

  ngOnInit(){
          this.displaytype = this.display
          this.background = this.backgroundColor
          this.paddingR=this.paddingRight
          this.paddingL=this.paddingLeft
          this.justify=this.justifyContent
          this.color1=this.color
          this.padding1=this.padding
          this.cursor1=this.cursor
  }

  
//   @HostListener ('mouseenter') mouseenter(eventData:Event){
//     this.displaytype = this.display
//     this.background = this.backgroundColor2
//     this.paddingR=this.paddingRight
//     this.justifyContent=this.justify
//   }
//   @HostListener ('mouseleave') mouseleave(eventData:Event){
//     this.displaytype = this.display
//     this.background = this.backgroundColor
//     this.paddingR=this.paddingRight
//     this.justifyContent=this.justify
// }

}
