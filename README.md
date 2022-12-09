# ProdZin

Angular C# Dotnet MVC Application Exercise.

## Getting Started

## Frontend Client
`Note:` The required version of angular for this project is `v12.0.0`

Follow the instructions below to setup the `frontend`

1. Open/Navigate to Root directory of the project and run command 

```bash
npm install
```

2. Run `ng server` or `npm run start` to start the angular app.

3. Frontend app will not run at `http://localhost:4200`

## Backend Server

`Note:` The required version dotnet core version for this project is `dotnet core 6.0`

Run the following To install the backend server:

1. Open/Navigate to `backend-server` directory

2. Open Package Manager Console or CLI and run:

```bash
dotnet restore
```

restores all nuget package dependencies required for the project

3. Open `appsettings.json` and updated the following line of code to your connectionString

```c
"ConnectionStrings": {
    "DefaultConnection": "server=DESKTOP-I3COPLH\\SQLEXPRESS01;database=prodZin;Trusted_Connection=SSPI;Encrypt=false;TrustServerCertificate=true"
  }
```

4. Run the command below to Restore/Migrate database

```
Update-Database
```

5. Run command `dotnet run` to start the server.

Server will now start at `https://localhost:7059`

## Available API Endpoints

Use the following endpoints below or refer to [Swagger API Doc](https://localhost:7059/swagger/index.html)

`[GET] https://localhost:7059/api/person`

`[GET] https://localhost:7059/api/person/{id}`

`[POST] https://localhost:7059/api/person`

## Request Body
```json
{
  "id": 0,
  "firstName": "string",
  "lastName": "string",
  "displayName": "string",
  "email": "user@example.com",
  "personNotes": "string",
  "primaryAddress": "string",
  "secondaryAddress": "string",
  "jobTitle": "string",
  "jobDescription": "string",
  "country": "string",
  "city": "string",
  "state": "string",
  "zip": 0,
  "isFavorite": true,
  "avatar": "string",
  "phone": "string",
  "date": "2022-12-09T15:04:37.542Z"
}
```
`[PUT] https://localhost:7059/api/person/{id}`

## Request Body
```json
{
  "id": 0,
  "firstName": "string",
  "lastName": "string",
  "displayName": "string",
  "email": "user@example.com",
  "personNotes": "string",
  "primaryAddress": "string",
  "secondaryAddress": "string",
  "jobTitle": "string",
  "jobDescription": "string",
  "country": "string",
  "city": "string",
  "state": "string",
  "zip": 0,
  "isFavorite": true,
  "avatar": "string",
  "phone": "string",
  "date": "2022-12-09T15:04:37.542Z"
}
```

`[DELETE] https://localhost:7059/api/person/{id}`


end