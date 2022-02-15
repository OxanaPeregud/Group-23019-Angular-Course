import {Tea} from "./tea";

export let Teas: Tea[]=[{
  id: '0',
  name: 'Дарджилинг',
  image: '/assets/images/Dargiling.jpg',
  featured: true,
  label: '',
  price: '8.99',
  description: 'Черный чай',
  comments: [
    {
      rating: 5,
      comment: 'Хорош!',
      author: 'Ольга',
      date: '2021-10-16'
    },
    {
      rating: 4,
      comment: 'Неплох',
      author: 'Павел',
      date: '2020-09-05'
    },
    {
      rating: 3,
      comment: 'Плох',
      author: 'Леша',
      date: '2021-12-14'
    },
  ]
},
  {
    id: '1',
    name: 'Улун',
    image: '/assets/images/Oolong.jpg',
    featured: true,
    label: '',
    price: '6.99',
    description: 'Зеленый чай',
    comments:[
      {
        rating: 2,
        comment: 'Очень плох',
        author: 'Сергей',
        date: '2021-03-15'
      }
      ]
  },
  {
    id: '2',
    name: 'Пуэр',
    image: '/assets/images/Puer.jpg',
    featured: true,
    label: '',
    price: '7.99',
    description: 'Зеленый чай',
    comments: [
      {
        rating: 5,
        comment: 'Хорош!',
        author: 'Мария',
        date: '2022-01-05'
      },
      {
        rating: 5,
        comment: 'Хорош',
        author: 'Геннадий',
        date: '2021-14-02'
      },
    ]
  }
];
