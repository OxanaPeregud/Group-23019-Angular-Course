import {Porsche} from "./porsche";
export const PORSCHES:Porsche[]=[

      {
        id: '0',
        name: '718',
        image:'/assets/images/718@2xx.jpeg',
        featured: false,
        label: 'New',
        price: '70.000',
        yearofrelease: '2019',
        body:'coupe',
        color:'silver',
        engine:'petrol',
        description: 'Porsche 718',
        comments:[
          {
            rating: 5,
            comment: 'Все отлично, только стоило купить 911',
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
    name: 'Taycan',
    image:'/assets/images/taycan@2xx.jpeg',
    featured: true,
    label: 'sedan',
    price: '83.000',
    yearofrelease: '2020',
    body:'sedan',
    color:'silver',
    engine:'electric',
    description: 'Taycan',
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
    name: '911',
    image:'/assets/images/911@2xx.jpeg',
    featured: true,
    label: '911',
    price: '120.000',
    yearofrelease: '2019',
    body:'coupe',
    color:'silver',
    engine:'petrol',
    description: '911 Carrera ',
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
    name: 'Cayenne ',
    image:'/assets/images/cayenne@2xx.jpeg',
    featured: true,
    label: '',
    price: '87.000',
    yearofrelease: '2019',
    body:'SUV',
    color:'silver',
    engine:'petrol',
    description: 'Porsche Cayenne ',
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
    image:'/assets/images/panamera@2xx.jpeg',
    featured: true,
    label: '',
    price: '100.000',
    yearofrelease: '2019',
    body:'wagon',
    color:'silver',
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
    name: 'Macan',
    image:'/assets/images/macan@2xx.jpeg',
    featured: true,
    label: '',
    price: '64.000',
    yearofrelease: '2019',
    body:'SUV',
    color:'silver',
    engine:'petrol',
    description: 'Macan',
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
