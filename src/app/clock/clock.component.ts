import { Component, Input, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-clock',
  templateUrl: './clock.component.html',
  styleUrls: ['./clock.component.css']
})
export class ClockComponent {

  private width: number;
  private height: number;

  @ViewChild('clock') clock: ElementRef;

  constructor() {
    this.width = 481;
    this.height = 481;
  }

  ngAfterViewInit() {
    let ctx: CanvasRenderingContext2D = this.clock.nativeElement.getContext("2d");


    let centerX: number = 241;
    let centerY: number = 241;
    let outerRadius: number = 240;
    let bigRadius: number = 6;
    let littleRadius: number = 3;
    let dotsRadius: number = outerRadius - 15;
    let circleKoef = 2 * Math.PI;
    let radKoef = Math.PI / 180;
    let rotate45 = Math.PI / 2;
    let secLength = dotsRadius;
    let minLength = secLength - 70;
    let hourLength = minLength - 50;


    function drawDial() {

      ctx.fillStyle = 'white';
      ctx.strokeStyle = 'black';
      ctx.lineWidth = 2;

      ctx.beginPath();
      ctx.moveTo(centerX + outerRadius, centerY);
      ctx.arc(centerX, centerY, outerRadius, 0, circleKoef);
      ctx.fill();

      ctx.closePath();

      ctx.beginPath();
      ctx.moveTo(centerX + outerRadius, centerY);
      ctx.arc(centerX, centerY, outerRadius, 0, circleKoef);
      // ctx.stroke();

      ctx.moveTo(centerX + bigRadius, centerY);
      ctx.arc(centerX, centerY, bigRadius, 0, circleKoef);
      ctx.stroke();

      ctx.closePath();

    }

    function drawDots() {


      for (let i = 0; i < 60; i++) {

        let radius;

        if ((i + 1) % 5) {
          radius = littleRadius;
        } else {
          radius = bigRadius;
        }

        let deg = 6 * (i + 1);
        let xCenter = centerX + dotsRadius * Math.cos(deg * radKoef);
        let yCenter = centerY + dotsRadius * -Math.sin(deg * radKoef);

        ctx.strokeStyle = 'black';
        ctx.lineWidth = 2;

        ctx.beginPath();
        ctx.moveTo(xCenter + radius, yCenter);
        ctx.arc(xCenter, yCenter, radius, 0, circleKoef);
        ctx.stroke();
        ctx.closePath();

      }
    }

    function drawDigits() {
      ctx.font = 'bold 30px sans-serif';

      for (let i = 0; i < 12; i++) {
        let deg = 360 / 12 * (i + 1);

        let radius = dotsRadius - 45;

        let xCenter = centerX + radius * Math.cos(-deg * radKoef + rotate45);
        let yCenter = centerY + radius * -Math.sin(-deg * radKoef + rotate45);

        // if (i > 3) {
        //   yCenter +=10;
        // }

        // if (i > 6 || i === 1) {
        //   xCenter -=20;
        // }

        ctx.strokeStyle = 'black';
        ctx.lineWidth = 2;

        ctx.beginPath();
        ctx.moveTo(xCenter, yCenter);

        if (i < 9) {
          ctx.strokeText(('' + (i + 1)), xCenter - 5, yCenter + 10);
        } else {
          ctx.strokeText(('' + (i + 1)), xCenter - 15, yCenter + 10);
        }

        ctx.stroke();
        ctx.closePath();
      }
    }

    function drawSecondsArrow(d: Date) {

      ctx.strokeStyle = 'red';
      ctx.lineWidth = 2;
      ctx.lineCap = 'round';

      // let d = new Date();
      let sec = d.getSeconds() + 1;
      let deg = 6 * sec;
      let endX = centerX + secLength * Math.cos(deg * radKoef - rotate45);
      let endY = centerY + secLength * Math.sin(deg * radKoef - rotate45);

      ctx.beginPath();
      ctx.moveTo(centerX, centerY);
      ctx.lineTo(endX, endY);
      ctx.stroke();
      ctx.closePath();

    }

    function drawMinutesArrow(d: Date) {

      ctx.lineWidth = 4;
      ctx.strokeStyle = 'black';
      ctx.lineCap = 'round';

      let sec = d.getSeconds() + 1;
      let min = d.getMinutes();
      let deg = min * 6 + sec * 0.1;
      let endX = centerX + minLength * Math.cos(deg * radKoef - rotate45);
      let endY = centerY + minLength * Math.sin(deg * radKoef - rotate45);

      ctx.beginPath();
      ctx.moveTo(centerX, centerY);
      ctx.lineTo(endX, endY);
      ctx.stroke();
      ctx.closePath();

    }

    function drawHoursArrow(d: Date) {

      ctx.lineWidth = 6;
      ctx.strokeStyle = 'black';
      ctx.lineCap = 'round';

      let sec = d.getSeconds() + 1;
      let min = d.getMinutes();
      let hour = d.getHours();
      let deg = hour * 30 + min * 0.5 + sec * 0.5 / 60;
      let endX = centerX + hourLength * Math.cos(deg * radKoef - rotate45);
      let endY = centerY + hourLength * Math.sin(deg * radKoef - rotate45);

      ctx.beginPath();
      ctx.moveTo(centerX, centerY);
      ctx.lineTo(endX, endY);
      ctx.stroke();
      ctx.closePath();

    }

    function drawClock() {

      drawDial();
      drawDots();
      drawDigits();

      let d = new Date();

      drawHoursArrow(d);
      drawMinutesArrow(d);
      drawSecondsArrow(d);

      setTimeout(drawClock, 1000);
    }

    setTimeout(drawClock, 1000);

  }

}