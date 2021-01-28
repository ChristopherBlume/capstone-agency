# Capstone Agency

Welcome to the Capstone Agency! This Application is a result of the Udacity Fullstack Developer Nanodegree.

The Application consits of a backend, which was created using Python, Flask and SQLAlchmey. The Frontend is build with Angular and Angular Material. Before you can use the application, make sure to set up your environment correctly. See Sections "Backend" and "Frontend".

Under "Accounts to access Application" you will find three users assigned with different roles/authorizations. The login credentials can be used to access the System.

## Accounts to access Application

1. Casting Assistant

The Casting Assistant has only display authorizations, means he cannot add, delete or patch movies or actors.

- Mail: casting-assistant@capstone.com
- Password: capstone#1

2. Casting Director

The Casting Assistant can display movies and actors, additionally he can add, patch and delete actors. But he can´t add, patch or delete movies.

- Mail: casting-director@capstone.com
- Password: capstone#1

3. Executive Producer

The Executivce Producer has every authorization.

- Mail: executive-producer@capstone.com
- PW: capstone#1

## Backend

To start the local flask-server make sure to activate a virtual environment and install the requirements.txt with the following command:

```bash
cd backend
source venv/Scripts/activate
pip install -r requirements.txt
```

Second, define the environment variables inside the backend directory:

```bash
source setup.sh
```

Finally start the flask server:

```bash
flask run
```

If you dont want to use the Frontend to generate a auth0 token, please use the following link:

https://capstone-agency.eu.auth0.com/authorize?audience=http://localhost:5000&response_type=token&client_id=cS4oMOvh2bJBdM1i4owjsJVoTqOHHd7C&redirect_uri=http://localhost:4200

## Frontend

To run the local development server run:

```bash
cd frontend
ng serve --open
```

A new chrome window/tab should now open and display the application. Use the Sign In Button to start.

## Testing

Make sure to change in the backend directory to perform unit-tests:

```bash
cd backend
source setup.sh
python test_app.py
```

It should run 19 tests.

## Postman Collection

Unit-Tests are done, but the postman collection will be finished once the frontend is complete.
