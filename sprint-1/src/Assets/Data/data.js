// Side Video Object
import videoList0 from '../Images/video-list-0.jpg';
import videoList1 from '../Images/video-list-1.jpg';
import videoList2 from '../Images/video-list-2.jpg';
import videoList3 from '../Images/video-list-3.jpg';
import videoList4 from '../Images/video-list-4.jpg';
import videoList5 from '../Images/video-list-5.jpg';
import videoList6 from '../Images/video-list-6.jpg';
import videoList7 from '../Images/video-list-7.jpg';
import videoList8 from '../Images/video-list-8.jpg';
const videoList = [
    {
        id: '3593c94a-74c5-4d4d-a2c1-e1cabb80ab1a', 
        title: 'Become a Travel Pro In Easy Lesson', 
        channel: 'Todd Welch', 
        image: videoList1
    },
    {
        id: '0b392e67-bc51-44b6-9492-49a8643c35b8', 
        title: 'Les Houches The Hidden Gem Of The Chamonix', 
        channel: 'Cornelia Blair', 
        image: videoList2
    },
    {
        id: '3ccab794-215a-4266-af34-21a741d26360', 
        title: 'Travel Health Useful Medical Information For', 
        channel: 'Glen Harper', 
        image: videoList3
    },
    {
        id: '725b8173-d9d4-406d-b284-9865cb88f0fc', 
        title: 'Cheap Airline Tickets Great Ways To Save', 
        channel: 'Emily Harper', 
        image: videoList4
    },
    {
        id: '57d0fcc3-c7bc-4753-a402-935e5eb5e7cb', 
        title: 'Take A Romantic Break In A Boutique Hotel', 
        channel: 'Ethan Owen', 
        image: videoList5
    },
    {
        id: '96477ba4-cbaa-4da8-8cf6-25825626e0b3', 
        title: 'Choose The Perfect Accommodations', 
        channel: 'Lydia Perez', 
        image: videoList6
    },
    {
        id: '503db424-2d20-4312-89a8-5f06add16a49', 
        title: 'Cruising Destination Ideas', 
        channel: 'Timothy Austin', 
        image: videoList7
    },
    {
        id: '7b27d092-a93f-4ea6-981c-f18bb6070c11', 
        title: 'Train Travel On Track For Safety', 
        channel: 'Scotty Cranmer', 
        image: videoList8
    },
    {
        id: '66e8332e-f869-4f8e-bb6c-239322b1871e', 
        title: 'BMX Rampage: 2018 Highlights', 
        channel: 'Red Cow', 
        image: videoList0
    },
]

//Main Video Object
const mainVideo = {
    id: '66e8332e-f869-4f8e-bb6c-239322b1871e',
    title: 'BMX Rampage: 2018 Highlights',
    description: 'On a gusty day in Southern Utah, a group of 25 daring mountain bikers blew the doors off what is possible on two wheels, unleashing some of the biggest moments the sport has ever seen. While mother nature only allowed for one full run before the conditions made it impossible to ride, that was all that was needed for event veteran Kyle Strait, who won the event for the second time -- eight years after his first Red Cow Rampage title',
    channel: 'Red Cow',
    image: videoList0,
    views: '1,001,023‬',
    likes: '110,985',
    duration: '0:42',
    video: '',
    timestamp: new Date('December 18 2018'),
    comments: [
        {
            'name': 'Micheal Lyons',
            'id': '75114a45-334a-499c-9446-27947bf62044',
            'comment': 'They BLEW the ROOF off at their last show, once everyone started figuring out they were going. This is still simply the greatest opening of a concert I have EVER witnessed.',
            'timeStamp': new Date('December 18 2018')
          }, 
          {
            'name': 'Gary Wong',
            'id': '188cbeac-3c11-4624-909f-f00aa7236d79',
            'comment': 'Every time I see him shred I feel so motivated to get off my couch and hop on my board. He’s so talented! I wish I can ride like him one day so I can really enjoy myself!',
            'timeStamp': new Date('December 12 2018')
          },
          {
            'name': 'Theodore Duncan',
            'id': '6850a76d-30ec-489f-b083-d6cf6e83e882',
            'comment': 'How can someone be so good!!! You can tell he lives for this and loves to do it every day. Everytime I see him I feel instantly happy! He’s definitely my favorite ever!',
            'timeStamp': new Date('November 15 2018')
          }
    ]
};


export default {videoList,mainVideo};