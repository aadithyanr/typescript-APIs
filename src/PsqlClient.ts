// Import the pg library
const { Client } = require('pg');

const connectionString = 'postgresql://aadithyan:mysecretpassword@localhost:5432/postgres'

const client = new Client({
    connectionString: connectionString
})

client.connect((err: any) => {
    if (err) {
      console.error('connection error', err.stack);
    } else {
      console.log('connected to the database');
    }
});

client.query('SELECT NOW()', (err: any, res: any) => {
    if (err) {
      console.error(err);
    } else {
      console.log(res.rows[0]);
    }
  
    // Close the connection
    client.end();
  });
  