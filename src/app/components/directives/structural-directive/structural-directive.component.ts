import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-structural-directive',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './structural-directive.component.html',
  styleUrl: './structural-directive.component.css'
})
export class StructuralDirectiveComponent {
  isDiv1Visible = true;
  isDiv2Visible=true;

  hide() {
    this.isDiv1Visible = false;
  }

  show() {
    this.isDiv1Visible = true;
  }

  toggle() {
    this.isDiv2Visible = !this.isDiv2Visible
  }

  str1="";
  str2="";

  test="";

  isActive = true;

  cars=["audi","bmw","mercedes","volvo","thar"]

  comments=[
    {
      "id": 1,
      "postId": 1,
      "userId": 1,
      "comment": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut hendrerit ipsum ac velit sollicitudin, id fringilla sapien dapibus. Nulla condimentum ullamcorper tellus vel tristique. Donec nec sagittis ante. Proin semper, nunc et bibendum eleifend, odio justo facilisis nunc, vel ullamcorper tortor sapien at eros. Etiam euismod felis vel elit lobortis laoreet. Maecenas ac lobortis diam. Proin vitae neque sit amet ante pretium consectetur. Nulla facilisi."
    },
    {
      "id": 2,
      "postId": 1,
      "userId": 1,
      "comment": "Nulla quis libero vel orci rutrum suscipit. Proin pretium ligula et dapibus interdum. Sed commodo, dui vel feugiat hendrerit, enim nibh commodo nisi, quis mollis nunc lectus ut nisi. Sed ut lectus ac nisi vulputate consequat nec ac nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Fusce vulputate magna vitae nibh tincidunt vestibulum. Duis suscipit nulla sit amet neque varius, ut efficitur lorem bibendum. Maecenas euismod euismod velit sit amet faucibus."
    },
    {
      "id": 3,
      "postId": 3,
      "userId": 2,
      "comment": "Cras ac elit sit amet mi placerat bibendum. Sed eleifend turpis vitae enim commodo, a lacinia ipsum ornare. Curabitur cursus pharetra ante, at malesuada erat. Suspendisse potenti. Aliquam erat volutpat. Praesent aliquet risus vitae arcu aliquet porttitor. Donec vestibulum malesuada libero quis feugiat. Integer efficitur ullamcorper sapien, at auctor mi tincidunt vel. Fusce sit amet turpis nec quam ullamcorper molestie. Vestibulum varius augue a semper malesuada. Donec sollicitudin, magna vitae semper euismod, arcu velit tristique massa, in pretium tellus odio eget nisl."
    }
  ]

  selectedCar="";
}
