import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  imageObject: Array<object> = [
    {
      image: 'assets/images/clients/1.png',
      thumbImage: 'assets/images/clients/1.png',
      alt: 'alt of image',
    },
    {
      image: 'assets/images/clients/2.png',
      thumbImage: 'assets/images/clients/2.png'
    },
    {
      image: 'assets/images/clients/3.png',
      thumbImage: 'assets/images/clients/3.png'
    },
    {
      image: 'assets/images/clients/4.png',
      thumbImage: 'assets/images/clients/4.png'
    },
    {
      image: 'assets/images/clients/5.png',
      thumbImage: 'assets/images/clients/5.png'
    },
    {
      image: 'assets/images/clients/6.png',
      thumbImage: 'assets/images/clients/6.png'
    },
  ];


  img: any[] =[
    {
      image: 'assets/images/Dr/vijitha.png',
      name: 'Dr.Vijetha B V',
      post: 'Nutritionist',
    },
    {
      image: 'assets/images/Dr/kouser.png',
      name: 'Dr.Kouser Fathima',
      post: 'Dental Surgeon',
    },
    {
      image: 'assets/images/Dr/rangoli.png',
      name: 'Dr.Rangoli Tripathi',
      post: 'Physiotherapy',
    },
    {
      image: 'assets/images/Dr/pariksha.png',
      name: 'Dr.ParikshaRao',
      post: 'Health & Wellness',
    },
    {
      image: 'assets/images/Dr/Ragvendrachikkatur.png',
      name: 'Dr.Ragvendra Chikkatur',
      post: 'CVTS(Cardio Vascular Thoracic Surgeon)',
    },
    {
      image: 'assets/images/Dr/RitieshRajColluru.jpeg',
      name: 'Dr.Ritiesh Raj Colluru',
      post: 'Physiotherapy',
    },
    {
      image: 'assets/images/Dr/anantharaman.JPG',
      name: 'Dr. Anantharaman.R',
      post: 'Endocrinologist',
    },
  ]

  banner:any[] =[
    {
      class: 'slide-1',
    },
    {
      class: 'slide-3',
    },
    // {
    //   class: 'slide-4',
    // },
  ]
  responsiveOptions:any;

  constructor() {
    this.responsiveOptions = [
      {
        breakpoint: '1024px',
        numVisible: 3,
        numScroll: 3
      },
      {
        breakpoint: '768px',
        numVisible: 2,
        numScroll: 2
      },
      {
        breakpoint: '560px',
        numVisible: 1,
        numScroll: 1
      }
    ];
  }
  ngOnInit(): void {
  }

}
