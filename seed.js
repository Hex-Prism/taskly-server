import 'dotenv/config';
import { db } from './lib/dbConnect.js';

const users = [
    {
        username: 'nathan121',
        email: 'nathan@mail.com',
        password: '123456789',
        avatar: 'https://g.codewithnathan.com/default-user.png',
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
    },
    {
        username: 'jane78',
        email: 'jane@mail.com',
        password: '987654321',
        avatar: 'https://g.codewithnathan.com/default-user.png',
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
    },
];

const tasks = [
    {
        name: 'Read biik "Atomic Habits"',
        description: 'Done to reaad "Atomic Habits"',
        priority: 'not emergency',
        due: new Date().toISOString(),
        status: 'open',
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
    },
    {
        name: 'Study MERN',
        description: 'Study MERN',priority: 'emergency',
        due: new Date().toISOString(),
        status: 'open',
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
    },
];

try {
    let collection = db.collection('users');
    console.log('[seed]', 'Adding users...');
    const result = await collection.insertMany(users);
    console.log(result.insertedIds);
    console.log('[seed]', 'Adding users is done');
    tasks[0].owner = result.insertedIds[0];
    tasks[1].owner = result.insertedIds[1];
    collection = db.collection('tasks');
    console.log('[seed]', 'Adding tasks...');
    await collection.insertMany(tasks);
    console.log('[seed]', 'Adding tasks is done');
    console.log('[seed]', 'All is done');
} catch (error) {
    console.log('[seed]', 'Error: ', error);
}
process.exit();
