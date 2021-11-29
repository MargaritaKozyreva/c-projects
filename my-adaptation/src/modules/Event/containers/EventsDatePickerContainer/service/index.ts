const getEvents = async () => {
  return await {
    eventsPlans: [ 
    {
      id: 111111111,
      name: 'Тренинг #PROклиента',
      date: '2021-12-02 17:00',
      adress: 'Просп.Андропова, 8'
    },
    {
      id: 111111111,
      name: 'Тренинг #PROклиента',
      date: '2021-11-07 15:00',
      adress: 'Просп.Андропова, 8'
    },
    {
      id: 111111111,
      name: 'Тренинг #PROклиента',
      date: '2021-11-21 10:00',
      adress: 'Просп.Андропова, 8'
    },
    {
      id: 111111111,
      name: 'Тренинг #PROклиента',
      date: '2021-12-07 15:30',
      adress: 'Просп.Андропова, 8'
    }],
    eventsRecord: [
      {
        id: 111111111,
        name: 'Тренинг #PROклиента',
        date: '2021-11-13',
        adress: 'Просп.Андропова, 8'
      },
      {
        id: 111111111,
        name: 'Тренинг #PROклиента',
        date: '2021-12-17',
        adress: 'Просп.Андропова, 8'
      },
      {
        id: 111111111,
        name: 'Тренинг #PROклиента',
        date: '2021-11-20',
        adress: 'Просп.Андропова, 8'
      },
      {
        id: 111111111,
        name: 'Тренинг #PROклиента',
        date: '2021-12-11',
        adress: 'Просп.Андропова, 8'
      }
    ]
  };
};

const recordOnEvent = async () => {
  return await {
    success: true
  };
};


export {
  getEvents,
  recordOnEvent
}
