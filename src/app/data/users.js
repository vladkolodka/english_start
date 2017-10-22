import { addServiceInformation } from "../utils/data";

export default addServiceInformation([
    {
        login: 'vlad',
        password: '12345',
        name: 'Vladyslav',
        registrationDate: new Date(),
        email: 'vladkolodka@gmail.com',
        profileImageUrl: 'https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_960_720.png',
        englishLevel: 3,
        age: 20,
        courses: [1, 2]
    },
    {
        login: 'user1',
        password: '12345',
        name: 'User',
        registrationDate: new Date(),
        email: 'user1@gmail.com',
        profileImageUrl: 'https://marketplace.canva.com/MAB6v7RGMOw/1/thumbnail/canva-robot-electric-avatar-icon-MAB6v7RGMOw.png',
        englishLevel: 5,
        age: 25,
        courses: [2, 3]
    },
    {
        login: 'user2',
        password: '12345',
        name: 'User 2',
        registrationDate: new Date(),
        email: 'user2@gmail.com',
        profileImageUrl: 'https://www.finearttips.com/wp-content/uploads/2010/05/avatar.jpg',
        englishLevel: 2,
        age: 18,
        courses: [1, 4]
    }
]);