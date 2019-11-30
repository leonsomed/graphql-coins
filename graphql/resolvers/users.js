const users = () => {
  return [
    {
      name: 'hey',
      email: 'hey@hey.com',
      age: 20,
      preferences: ['BOOKS'],
      address: {
        street: 'fake street',
        number: 123,
        zip: 12312
      },
      friends: [
        {
          name: 'hey2',
          email: 'hey@hey.com',
          age: 80,
          preferences: ['BOOKS'],
          address: {
            street: 'fake street',
            number: 123,
            zip: 12312
          },
          friends: []
        }
      ]
    }
  ];
};

module.exports = {users};
