# Capstone Agency

Welcome to the Capstone Agency! This Application is a result of the Udacity Fullstack Developer Nanodegree.

The Application consits of a backend, which was created using Python, Flask and SQLAlchmey. The Frontend is build with Angular and Semantic UI. Before you can use the application, make sure to set up your environment correctly. See Sections "Backend" and "Frontend".

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

## Tokens

1. ASSISTANT_TOKEN='eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6IkdpMFNLX00tTk5OTTVmcUxGMGlrTCJ9.eyJpc3MiOiJodHRwczovL2NhcHN0b25lLWFnZW5jeS5ldS5hdXRoMC5jb20vIiwic3ViIjoiYXV0aDB8NjAwYWI2Yjk1MjM4ZmIwMDY5NWVjY2ZjIiwiYXVkIjoiaHR0cDovL2xvY2FsaG9zdDo1MDAwIiwiaWF0IjoxNjEyMzY0MzUxLCJleHAiOjE2MTI0NTA3NTEsImF6cCI6ImNTNG9NT3ZoMmJKQmRNMWk0b3dqc0pWb1RxT0hIZDdDIiwic2NvcGUiOiIiLCJwZXJtaXNzaW9ucyI6WyJnZXQ6YWN0b3JzIiwiZ2V0Om1vdmllcyJdfQ.QkixV1HN8Fj-8b7t7Eb-a5TaHnZykSqKi1CVeAHrtpWqInia8PB2zRJAgn26_dFFOepmaN0ObFZWNRRq9d5nsG9fwvyNPcgsFrTpMplBUyatKlX4vGxELHV3qoo79joIReP4Ix9q4iRg4Hzkit0Kkiqmlvf5f4v2Lky3g4_zv95pUg_2B3PBn0aDWeFwSDqClKmWntp4hRQ4WOdLttj2QiTHpmGb6ep1fvRJx_iJW3Rv6WbuoEOF_xVcxhxGzi8VZJNQSPuQQFTBxJSzxeA-iUISnTHbERxD1-G79ggBmhGY1JSvE869C0F5YkQdzgNCALdm8vOEE78xYiS88rfjGA'

2. DIRECTOR_TOKEN='eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6IkdpMFNLX00tTk5OTTVmcUxGMGlrTCJ9.eyJpc3MiOiJodHRwczovL2NhcHN0b25lLWFnZW5jeS5ldS5hdXRoMC5jb20vIiwic3ViIjoiYXV0aDB8NjAwYWI2ZTc5YzJmMDgwMDY5ZWE1ZmY5IiwiYXVkIjoiaHR0cDovL2xvY2FsaG9zdDo1MDAwIiwiaWF0IjoxNjEyMzY0NDA2LCJleHAiOjE2MTI0NTA4MDYsImF6cCI6ImNTNG9NT3ZoMmJKQmRNMWk0b3dqc0pWb1RxT0hIZDdDIiwic2NvcGUiOiIiLCJwZXJtaXNzaW9ucyI6WyJhZGQ6YWN0b3JzIiwiZGVsZXRlOmFjdG9yIiwiZ2V0OmFjdG9ycyIsImdldDptb3ZpZXMiLCJwYXRjaDphY3RvciIsInBhdGNoOm1vdmllIl19.GObIcNG-Ls9qWR7pHex-73_zQ6QxVroUtO-iTCaSrtFR-lTABthnk8ENpH8PXPkPcUUCdfyB_oF6MKQ4D99MGcUYEcrCdvqK2m-PoV3Iu83WhkhP0n1hZhIE9gArsgfUAELtXxNr0WCxKKEge4lR2eB-TbyVDnVbZe76FYJc7BR0LCU8v4YlBFzHYGtLVr0yBzY6--GGu6rssKJ4CYsyXimPYaAhL7yJw7M80H9aQn4VGJ851R3iFTd8ej_1FVVY3IJ3ziqU2ftW_Xg8gDTY4Q6LVQnm3N6BWYD0mNpWQ7ekRGSI8abmWwvw1nCXzRSl0e3kte1rwNjQKNQkkBmeBQ'

3. PRODUCER_TOKEN='eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6IkdpMFNLX00tTk5OTTVmcUxGMGlrTCJ9.eyJpc3MiOiJodHRwczovL2NhcHN0b25lLWFnZW5jeS5ldS5hdXRoMC5jb20vIiwic3ViIjoiYXV0aDB8NjAwYWI3MWMyMGFhMTcwMDZhYzVkMTc1IiwiYXVkIjoiaHR0cDovL2xvY2FsaG9zdDo1MDAwIiwiaWF0IjoxNjEyMzY0NDUyLCJleHAiOjE2MTI0NTA4NTIsImF6cCI6ImNTNG9NT3ZoMmJKQmRNMWk0b3dqc0pWb1RxT0hIZDdDIiwic2NvcGUiOiIiLCJwZXJtaXNzaW9ucyI6WyJhZGQ6YWN0b3JzIiwiYWRkOm1vdmllcyIsImRlbGV0ZTphY3RvciIsImRlbGV0ZTptb3ZpZSIsImdldDphY3RvcnMiLCJnZXQ6bW92aWVzIiwicGF0Y2g6YWN0b3IiLCJwYXRjaDptb3ZpZSJdfQ.a9caAI-iuEXQYAYt7R5TfM7JthBecLhJSXi9a7xfHYhc-A-TOsny1otNwExDbsqKA2Yxk_IyrKKz6P2rkT3w6uBeglUdoIq4Z73z7JbOLmBS9owNIvF53qz0cJ_lh3IegFwl-0DdZBAmT1D9wnI-Jxe0oHPwyiuM3dxDe5Ul5puHd15xOhWDEvBSIOlxgAHj63SSjnPpLfIkg7bBk8mhEvPdzHoegcjj374wIi_gF7kB-NgjzGMC2ASiTlfGdmDLhrQm7sG9XQqjlfolK8UK_qZ_fv8eDAVjr66CYJEhflcMMT8pMGKlEi7qz5m64RzwJwEKKnNb82yvn64isqxfTA'

## Frontend

To run the local development server run:

```bash
cd frontend
ng serve --open
```

A new chrome window/tab should now open and display the application. Use the Sign In Button to start.

## Testing

Local Database Setup:
def setUp(self):
"""Define test variables and initialize app."""
self.app = create_app()
self.client = self.app.test_client
self.uname = 'postgres'
self.pw = '12345'
self.database_name = "capstone-agency"
self.database_path = "postgres://{}:{}@{}/{}".format(self.uname, self.pw,'localhost:5432', self.database_name)
setup_db(self.app, self.database_path)

Make sure to change in the backend directory to perform unit-tests:

```bash
source setup.sh
python test_app.py
```

It should run 19 tests.

## Heroku Link

https://cap-agent.herokuapp.com/
