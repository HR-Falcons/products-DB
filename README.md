# products-DB

## ETL Steps

### 1. Move to the folder that has the current CSV files you intend on importing
### 2. Start Postgres `brew services start postgres` 
### 3. Login to Postgres through terminal `psql postgres`
### 4. Create the database to hold all files `CREATE DATABASE <Name of database>;`
### 5. Select the database `Use <Name of database>;`
### 6. Create the table where the data is going to go `CREATE TABLE <Name of table>(colm datatype, ...);`
### 7. Copy the data into the desired table `\COPY <Name of table>(colm, ...) FROM 'Name of file' DELIMITER 'Type of delimiter' CSV HEADER NULL AS 'null';`

## Check tables
#### From here check the table using `SELECT * FROM <Name of table> LIMIT 10`

You have now created a database and table for you CSV file. All SQL commands should work on the current table.
To create more tables repeat steps 6 and 7. 
