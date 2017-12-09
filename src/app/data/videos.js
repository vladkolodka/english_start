import { addServiceInformation } from "../utils/data";

export default addServiceInformation([
    {
        title: 'Video 1',
        description: 'English Conversation Learn English Speaking English Subtitles Lesson 01',
        videoUrl: 'https://www.youtube.com/embed/NdXPnJLR07E',
        imageUrl: 'https://img.youtube.com/vi/NdXPnJLR07E/hqdefault.jpg',
        difficultyLevel: 2,
        dictionaryId: 1,
        creationDate: new Date(),
        links: ['http://google.com', 'http://english.com']
    },
    {
        title: 'Video 2',
        description: 'How to Stop Translating in Your Head and Start Thinking in English Like a Native',
        videoUrl: 'https://www.youtube.com/embed/FUW_FN8uzy0',
        imageUrl: 'https://img.youtube.com/vi/FUW_FN8uzy0/hqdefault.jpg',
        difficultyLevel: 2,
        dictionaryId: 2,
        creationDate: new Date(),
        links: ['http://google.com', 'http://english.com']
    }
])