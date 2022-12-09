# ProdZin

Angular C# Dotnet MVC Application Exercise.

## Getting Started

## Frontend Client
`Note:` The required version of angular for this project is `v12.0.0`

Follow the instructions below to setup the `frontend`

1. Run command `npm install`

2. Run `ng server` or `npm run start` to start the angular app.

3. Frontend app will not run at `http://localhost:4200`

## Backend Server

`Note:` The required version dotnet core version for this project is `dotnet core 6.0`

Run the following To install the backend server:

1. Open Package Manager Console or CLI and run:

```bash
dotnet restore
```

restores all nuget package dependencies required for the project

2. Open `appsettings.json` and updated the following line of code to your connectionString

```c
"ConnectionStrings": {
    "DefaultConnection": "server=DESKTOP-I3COPLH\\SQLEXPRESS01;database=prodZin;Trusted_Connection=SSPI;Encrypt=false;TrustServerCertificate=true"
  }
```

2. Run the command below to Restore/Migrate database

```
Update-Database
```