import bcrypt from 'bcryptjs';
const users = [
  {
    name: 'Admin User',
    email: 'admin@example1013.com',
    password: bcrypt.hashSync('123456', 10),
    isAdmin: true,
  },
  {
    name: 'Bengaluru',
    email: 'bengaluru@example1013.com',
    password: bcrypt.hashSync('123456', 10),
    isAdmin: true,
  },
  {
    name: 'Udupi',
    email: 'udupi@example1013.com',
    password: bcrypt.hashSync('123456', 10),
    isAdmin: true,
  },
  {
    name: 'Harshith',
    email: 'harshith@techkart.com',
    password: bcrypt.hashSync('123456', 10),
    isAdmin: true,
  },
  {
    name: 'demoUser',
    email: 'demoUser@techkart.com',
    password: bcrypt.hashSync('demoUser', 10),
    isAdmin: true,
  },
];
export default users;
