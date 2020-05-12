import {Component, ElementRef, OnInit, Renderer2, ViewChild} from '@angular/core'
import {element} from 'protractor'

@Component({
  selector: 'esb-zone-text',
  templateUrl: './zone-text.component.html',
  styleUrls: ['./zone-text.component.less']
})
export class ZoneTextComponent implements OnInit {

  @ViewChild('zoneText', {read: ElementRef}) zoneText: ElementRef

  constructor(private el: ElementRef,
              private render: Renderer2) { }

  ngOnInit(): void {
  }

  public addSubtitle() {
    console.log(this.el)
  }

  public addBold() {

  }

  public addItalic() {

  }

  public addQuote() {

  }

  public addCode() {

  }

  public addLink() {

  }
}
