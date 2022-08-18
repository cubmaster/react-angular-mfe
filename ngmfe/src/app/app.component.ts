import { AfterViewInit, Component, ElementRef } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit {

 

  props:IProps=<IProps>{};
  title:string = 'ngmfe';
  tagName:string;

  constructor(elem: ElementRef){
    //Get the components selector for use later
    //please be sure to properly namespace your selectors
    this.tagName = elem.nativeElement.tagName.toLowerCase();
  }
  
  ngAfterViewInit(): void {
    //you need the view made so you can get the elements so you are in ngAfterViewInit
    //Your getting this element based on the selector
    //You are just getting the first one that matches so if things are not namespaced properly it might not work right.
    const elem:Element = document.getElementsByTagName(this.tagName)[0];
    
    //this pulls the props from the key on the window dom.
    //You need to tweak the IProps interface so you get what you are expecting.
    this.props = window[elem.attributes['props']?.value]??<IProps>{};;


  }

} 
interface IProps{
  name:string
}