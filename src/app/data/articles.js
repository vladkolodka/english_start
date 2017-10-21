import { addServiceInformation } from "../utils/data";

export default addServiceInformation([
    {
        title: 'Article 1',
        description: 'First article',
        imageUrl: 'https://www.w3schools.com/howto/img_fjords.jpg',
        text: '1234567890',
        difficultyLevel: 2,
        dictionaryId: 1,
        creationDate: new Date(),
        links: ['http://google.com', 'http://english.com']
    },
    {
        title: 'Article 2',
        description: 'Second article',
        imageUrl: 'https://www.w3schools.com/css/paris.jpg',
        text: '1234567890',
        difficultyLevel: 2,
        dictionaryId: 2,
        creationDate: new Date(),
        links: ['http://google.com', 'http://english.com']
    }
]);