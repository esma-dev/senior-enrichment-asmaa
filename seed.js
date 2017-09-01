//require all models
const db = require('./server/db');
const Campus = require('./server/db/models/campus');
const Student = require('./server/db/models/student');
const User = require('./server/db/models/user');

//write data for current campuses
const campuses = [{
  name: 'Hunter College',
  image: '/images/hunterCollege.jpg'
}, {
  name: 'The City College Of New York',
  image: '/images/cityCollege.jpg'
}, {
  name: 'Brooklyn College',
  image: '/images/brooklynCollege.jpg'
}, {
  name: 'Lehman College',
  image: '/images/lehmanCollege.jpg'
}, {
  name: 'Queens College',
  image: '/images/queensCollege.jpg'
}];

const id = () => Math.ceil(Math.random() * 5);

//write data for current students
const students = [
  { name: 'Adriano Akim', email: 'AdrianoAkim@myhunter.com', campusId: 1},
  { name: 'Tomiko	Bernard', email: 'TomikoBernard@myhunter.com', campusId: 1},
  { name: 'Glinda	Honeycutt', email: 'GlindaHoneycutt@myhunter.com', campusId: 1},
  { name: 'Carlton Wagner', email: 'CarltonWagner@mycity.com', campusId: 2},
  { name: 'Dusty Calvin', email: 'DustyCalvin@mycity.com', campusId: 2},
  { name: 'Lida Fortier', email: 'LidaFortier@mycity.com', campusId: 2},
  { name: 'Vida	Musgrove', email: 'VidaMusgrove@mylehman.com', campusId: 3},
  { name: 'Leonor Garvin', email: 'LeonorGarvin@mylehman.com', campusId: 3},
  { name: 'Lila	Wright', email: 'LilaWright@mylehman.com', campusId: 3},
  { name: 'Sid Gale', email: 'SidGale@myQueens.com', campusId: 4},
  { name: 'Carmina Kinder', email: 'CarminaKinder@myQueens.com', campusId: 4},
  { name: 'Olive Harris', email: 'OliveHarris@myQueens.com', campusId: 4},
  { name: 'Edris Furr', email: 'EdrisFurr@myBrooklyn.com', campusId: 5},
  { name: 'Antonio Ives', email: 'AntonioIves@myBrooklyn.com', campusId: 5},
  { name: 'Shantelle Shepard', email: 'ShantelleShepard@myBrooklyn.com', campusId: 5}
];

//create students and campuses in the database using .create()

const seed = () =>
  Promise.all(campuses.map(campus =>
    Campus.create(campus)
  ))
  .then(() =>
  Promise.all(students.map(student =>
    Student.create(student))
  ));

//sync database

const main = () => {
  console.log('Syncing db...');
  db.sync({ force: true })
    .then(() => {
      console.log('Seeding databse...');
      return seed();
    })
    .catch(err => {
      console.log('Error while seeding');
      console.log(err.stack);
    })
    .then(() => {
      db.close();
      return null;
    });
};

main();
