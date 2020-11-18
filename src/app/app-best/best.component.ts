import { NgModule } from '@angular/core';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-best',
  templateUrl: './best.component.html',
  styleUrls:['./best.component.css'],
});

var getHrefContent = require('href-content');
getHrefContent('path/to/css', 'file://path/to/html', function (err, css) {
  console.log(css);
});


export class bestComponent{

}