import { AfterViewInit, Component, ElementRef, Input } from '@angular/core';
import { HostContext } from './HostContext';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit {

 

  props:IProps=<IProps>{};
  title:string = 'ngmfe';

  constructor(){}
  
  ngAfterViewInit(): void {
    const elem:Element = document.getElementsByTagName('app-root')[0];
  
    this.props = window[elem.attributes['props']?.value]??<IProps>{};;


  }

} 
interface IProps{
  name:string
}