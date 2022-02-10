import {Porsche} from "./porsche";
export const PORSCHES:Porsche[]=[

      {
        id: '0',
        name: '718 Cayman',
        image:'/assets/images/porsche_718 Cayman.png',
        featured: true,
        label: 'New',
        price: '70.000',
        yearofrelease: '2011',
        body:'coupe',
        color:'red',
        engine:'petrol',
        description: 'Porsche 718 Cayman',
        comments:[
          {
            rating: 3,
            comment: 'Мало мощности и дизайн старый',
            author: 'Алекс',
            date: '2021-11-10'
          },
          {
            rating: 5,
            comment: 'Топ за свои деньги',
            author: 'Павел',
            date: '2020-09-05'
          },
          {
            rating: 5,
            comment: 'Лучший среди конкурентов',
            author: 'Леша',
            date: '2021-12-14'
          },
        ]
      },
  {
    id: '1',
    name: '718 Boxster',
    image:'/assets/images/porsche_718_Boxster.png',
    featured: true,
    label: 'Cabriolet',
    price: '72.000',
    yearofrelease: '2012',
    body:'cabriolet',
    color:'black',
    engine:'petrol',
    description: '718 Boxster 2012',
    comments:[
      {
        rating: 2,
        comment: 'Мало мощности и дизайн старый',
        author: 'Алекс',
        date: '2021-11-10'
      },
      {
        rating: 4,
        comment: 'Недостаточно мощности, нужно было брать Turbo S',
        author: 'Павел',
        date: '2020-09-05'
      },
    ]
  },
  {
    id: '2',
    name: '911 Carrera 4 Cabriolet',
    image:'/assets/images/porsche_ 911_Carrera_4_Cabriolet.png',
    featured: true,
    label: '911',
    price: '150.000',
    yearofrelease: '2012',
    body:'coupe',
    color:'white',
    engine:'petrol',
    description: '911 Carrera 4 Cabriolet 2012',
    comments:[
      {
        rating: 5,
        comment: 'Лучший',
        author: 'Алекс',
        date: '2021-11-10'
      },
      {
        rating: 5,
        comment: 'Лучший среди конкурентов',
        author: 'Леша',
        date: '2021-12-14'
      },
    ]
  },
  {
    id: '3',
    name: 'Cayenne 2012',
    image:'/assets/images/porsche_cayenne.png',
    featured: true,
    label: '',
    price: '87.000',
    yearofrelease: '2012',
    body:'SUV',
    color:'silver',
    engine:'petrol',
    description: 'Porsche Cayenne 2012',
    comments:[
      {
        rating: 5,
        comment: 'Хороший вариант для семьи',
        author: 'Алекс',
        date: '2021-11-10'
      },
      {
        rating: 4,
        comment: 'Недостаточно мощности, нужно было брать Turbo S',
        author: 'Павел',
        date: '2020-09-05'
      },
      {
        rating: 5,
        comment: 'Лучший среди конкурентов',
        author: 'Леша',
        date: '2021-12-14'
      },
    ]
  },
  {
    id: '4',
    name: 'Panamera',
    image:'/assets/images/porsche_panamera.png',
    featured: true,
    label: '',
    price: '100.000',
    yearofrelease: '2019',
    body:'wagon',
    color:'red',
    engine:'petrol',
    description: 'Porsche Panamera',
    comments:[
      {
        rating: 5,
        comment: 'Хороший вариант для семьи',
        author: 'Алекс',
        date: '2021-11-10'
      },
      {
        rating: 4,
        comment: 'Недостаточно мощности, нужно было брать Turbo S',
        author: 'Павел',
        date: '2020-09-05'
      },
      {
        rating: 5,
        comment: 'Лучший среди конкурентов',
        author: 'Леша',
        date: '2021-12-14'
      },
    ]
  },
  {
    id: '5',
    name: 'Panamera 2012',
    image:'/assets/images/porsche_panamera_old.png',
    featured: true,
    label: '',
    price: '50.000',
    yearofrelease: '2012',
    body:'wagon',
    color:'silver',
    engine:'petrol',
    description: 'Porsche Panamera 2012',
    comments:[
      {
        rating: 5,
        comment: 'Хороший вариант для семьи',
        author: 'Ольга',
        date: '2021-10-16'
      },
      {
        rating: 4,
        comment: 'Недостаточно мощности, нужно было брать Turbo S',
        author: 'Павел',
        date: '2020-09-05'
      },
      {
        rating: 5,
        comment: 'Лучший среди конкурентов',
        author: 'Леша',
        date: '2021-12-14'
      },
    ]
  },
];
