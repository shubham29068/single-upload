import { Component } from '@angular/core';
import { never } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'files';
  url = "https://pluspng.com/img-png/website-png--600.png"
  onSelect(event: any) {
    let fileType = event.target.files[0].type
    if (fileType.match(/image\/*/)) {
      let reader = new FileReader();
      reader.readAsDataURL(event.target.files[0])
      reader.onload = (event: any) => {
        this.url = event.target.result;
      }
    }
    else {
      alert("please select correct image")
    }
  }
}
