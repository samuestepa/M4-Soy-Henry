const server = require('./src/app');
const { database } = require('./src/db');

database.sync({force: false}).then(() => {
    console.log('Database connected')
    server.listen(3001, () => {
        console.log('Server on port 3001')  
    })
});