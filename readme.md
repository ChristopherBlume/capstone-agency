# Capstone Agency

Welcome to the Capstone Agency! This Application is a result of the Udacity Fullstack Developer Nanodegree.

The Application consits of a backend, which was created using Python, Flask and SQLAlchmey. The Frontend is build with Angular and Semantic UI. Before you can use the application, make sure to set up your environment correctly. See Sections "Backend" and "Frontend".

Under "Accounts to access Application" you will find three users assigned with different roles/authorizations. The login credentials can be used to access the System.

## Heroku Access

Link to Application:
https://cap-agent-frontend.herokuapp.com/

On the right sight you can sign in using one of the below credentials.
It should be already one movie and one actor in the database. In the Admin Area you can either post a movie or an actor (depends on authorization).

While in /movies or /actors you can simple click on a movie to see the "details". There you can delete or update a movie or actor (again depending on the auhtorization).

Please Note: After signing out and before you can login with different credentials you have to clear your browser cache to get a new jwt.

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

## Tokens

export ASSISTANT_TOKEN='eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6IkdpMFNLX00tTk5OTTVmcUxGMGlrTCJ9.eyJpc3MiOiJodHRwczovL2NhcHN0b25lLWFnZW5jeS5ldS5hdXRoMC5jb20vIiwic3ViIjoiYXV0aDB8NjAwYWI2Yjk1MjM4ZmIwMDY5NWVjY2ZjIiwiYXVkIjoiaHR0cDovL2xvY2FsaG9zdDo1MDAwIiwiaWF0IjoxNjEyNTE4OTQ3LCJleHAiOjE2MTI2MDUzNDcsImF6cCI6ImNTNG9NT3ZoMmJKQmRNMWk0b3dqc0pWb1RxT0hIZDdDIiwic2NvcGUiOiIiLCJwZXJtaXNzaW9ucyI6WyJnZXQ6YWN0b3JzIiwiZ2V0Om1vdmllcyJdfQ.S7CI2XqQv0jq46-cf0g3BFvmZKdNU9d6WkK3dWSTkCY9XCpp560GWrdPZRxwUmTzvom59CAbtlJ0Eo1LNlv0Uwn2HpaZuTb46ZMfzxSMHzohoMTqHEZPbNLoaMMWK8j_umjKBV_v-T1NHsEBEwDA_aIcYlPNN-VgEPG9-8oj9L4c67t95M2ElZsdkh55NI6R9DHlhN2UEN8Fv6gBGJU9ozT4oleLfMfgichrnYFHWfSoZcFkl-I43WDlLFwBlJdg70nUeNsUNEejFaqkJYQxbiF-VUK4Cee7AAjbjOKRSPJeAMzxl-L1yTP7GrP2CTFTYnge4g3r_AD7uxngZR-VXQ'

export DIRECTOR_TOKEN='eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6IkdpMFNLX00tTk5OTTVmcUxGMGlrTCJ9.eyJpc3MiOiJodHRwczovL2NhcHN0b25lLWFnZW5jeS5ldS5hdXRoMC5jb20vIiwic3ViIjoiYXV0aDB8NjAwYWI2ZTc5YzJmMDgwMDY5ZWE1ZmY5IiwiYXVkIjoiaHR0cDovL2xvY2FsaG9zdDo1MDAwIiwiaWF0IjoxNjEyNTIwMDY1LCJleHAiOjE2MTI2MDY0NjUsImF6cCI6ImNTNG9NT3ZoMmJKQmRNMWk0b3dqc0pWb1RxT0hIZDdDIiwic2NvcGUiOiIiLCJwZXJtaXNzaW9ucyI6WyJhZGQ6YWN0b3JzIiwiZGVsZXRlOmFjdG9yIiwiZ2V0OmFjdG9ycyIsImdldDptb3ZpZXMiLCJwYXRjaDphY3RvciIsInBhdGNoOm1vdmllIl19.bJLGNL7fDyBKkDCIv8fsltTY5_RihBJMoTcYt8xpL2rkz2PjgI8BZTVIQ8QAzinN2E303l3mQuoIRAyYDlxI3Bj8ksA9XAwSS6rfaTmUNYR5fUco4EpMjRCQ6yWOnj_qMdggUvLfEjcoXV4cIgyu7aMswKbLu3XVFf37BZN8zrdYuEth_dxUA8z1xs58527kR_xmJjqkc1q_u5MfnRmnV9wVdAQpgqpYqUR6ei2T43z_OTEl45VL7fdwAvCs0BjeujWeYPVvFygbVvTABiRMPUj5UZAYPae3KP-sK9vPMyBDDnkukPKVScG-6MH-1_SctPyp2SFvvnXSQzp8ZEDzmQ'

export PRODUCER_TOKEN='eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6IkdpMFNLX00tTk5OTTVmcUxGMGlrTCJ9.eyJpc3MiOiJodHRwczovL2NhcHN0b25lLWFnZW5jeS5ldS5hdXRoMC5jb20vIiwic3ViIjoiYXV0aDB8NjAwYWI3MWMyMGFhMTcwMDZhYzVkMTc1IiwiYXVkIjoiaHR0cDovL2xvY2FsaG9zdDo1MDAwIiwiaWF0IjoxNjEyNTIwMTQ4LCJleHAiOjE2MTI2MDY1NDgsImF6cCI6ImNTNG9NT3ZoMmJKQmRNMWk0b3dqc0pWb1RxT0hIZDdDIiwic2NvcGUiOiIiLCJwZXJtaXNzaW9ucyI6WyJhZGQ6YWN0b3JzIiwiYWRkOm1vdmllcyIsImRlbGV0ZTphY3RvciIsImRlbGV0ZTptb3ZpZSIsImdldDphY3RvcnMiLCJnZXQ6bW92aWVzIiwicGF0Y2g6YWN0b3IiLCJwYXRjaDptb3ZpZSJdfQ.WyVa5q1Z7c0B15e8qFDghV_8EQsZ8zvl6Y1BFI3Ik963i4d65g6dg2Po0fHyxnvrT6YZoOUcrkilc7l-WG4twxEuwnpYjgWSRpM-t0AVejVwIFnB2aFRjPvS2fdKJKx5t_P22lJNZDpdr_LUcy7rcW7u4qG8z7ikw0mqvLlQwUfR-HUcGQvUZBdViGBYUWcrX1VcoGb-dLVfK7_I0LgXRVh_GgkkhbVqbUhvwyjAxO2e9mte7QUYduUCVLndqes03ouvoe4L3cBkFO1QPv1m3RQXJatykTQMqn-XI5KbE3MRvT6GARwtEWoyv_GHy9kpE9khKdZ32CUN7LKfZOQaHg'

## API

### Movie Routes

#### GET

/movies -> GET all movies

/movies/{} -> GET specific movie

#### POST

/movies -> POST a new movie

- Input: new movie object
- Output: new movie added to database

#### PATCH

/movies/{} -> PATCH an existing movie

- Input: new movie details
- Output: movie updated with new values

#### DELETE

/movies/{} -> DELETE an existing movie

- Input: movie id
- Output: specific movie will be removed from DB

### Actor Routes

#### GET

/actors -> GET all actors

/actors/{} -> GET specific actor

#### POST

/actors -> POST a new actor

- Input: new actor object
- Output: new actor added to database

#### PATCH

/actors/{} -> PATCH an existing actor

- Input: new actor details
- Output: actor updated with new values

#### DELETE

/actors/{} -> DELETE an existing actor

- Input: actor id
- Output: specific actor will be removed from DB

## Backend (local)

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

## Frontend (local)

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
