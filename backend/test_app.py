from datetime import date
import os
import unittest
import json
from flask.globals import request
from flask_sqlalchemy import SQLAlchemy

from app import create_app
from models import Actor, Movie, setup_db

class CapstoneTestCase(unittest.TestCase):
  def setUp(self):
    """Define test variables and initialize app."""
    self.app = create_app()
    self.client = self.app.test_client
    self.uname = 'postgres'
    self.pw = '12345'
    self.database_name = "capstone-agency"
    self.database_path = "postgres://{}:{}@{}/{}".format(self.uname, self.pw,'localhost:5432', self.database_name)
    setup_db(self.app, self.database_path)

    # Handling Authorization for Tests!

    ASSISTANT_TOKEN = os.environ.get('ASSISTANT_TOKEN')
    DIRECTOR_TOKEN = os.environ.get('DIRECTOR_TOKEN')
    PRODUCER_TOKEN = os.environ.get('PRODUCER_TOKEN')

    self.assistant_header = {
      "Authorization": "Bearer {}".format(ASSISTANT_TOKEN)}

    self.director_header = {
      "Authorization": "Bearer {}".format(DIRECTOR_TOKEN)}

    self.producer_header = {
      "Authorization": "Bearer {}".format(PRODUCER_TOKEN)}    


    # Dummy Data

    self.actor = {
      "id": 1000,
      "name": "Tom Hanks",
      "age": 64,
      "gender": 'male',
    }

    # binds the app to the current context
    with self.app.app_context():
      self.db = SQLAlchemy()
      self.db.init_app(self.app)
      # create all tables
      self.db.create_all()
    
  def tearDown(self):
    """Executed after reach test"""
    pass

  
  # * TESTS FOR CASTING ASSISTANT

  """
    Test Case: GET - /movies - Successful
  """

  def test_get_movies_casting_assistant(self):
    res = self.client().get('/movies', headers=self.assistant_header)
    data = json.loads(res.data)

    self.assertEqual(res.status_code, 200)
    self.assertEqual(data['success'], True)

  """
    Test Case: GET - /actors - Successful
  """
  def test_get_actors_casting_assistant(self):
    res = self.client().get('/actors', headers=self.assistant_header)
    data = json.loads(res.data)

    self.assertEqual(res.status_code, 200)
    self.assertEqual(data['success'], True)
    
  """
    Test Case: GET - /movies - 401
  """
  def test_401_movies_casting_assistant(self):
    res = self.client().get('/movies')
    data = json.loads(res.data)

    self.assertEqual(res.status_code, 401)

  """
    Test Case: GET - /actors - 401
  """
  def test_401_actors_casting_assistant(self):
    res = self.client().get('/actors')
    data = json.loads(res.data)

    self.assertEqual(res.status_code, 401)

  # * TESTS FOR CASTING DIRECTOR ( GET POST DELETE PATCH)

  """
    Test Case: GET - /actors - Successful
  """
  def test_get_actors_casting_director(self):
    res = self.client().get('/actors', headers=self.director_header)
    data = json.loads(res.data)

    self.assertEqual(res.status_code, 200)
    self.assertEqual(data['success'], True)
  
  """
    Test Case: POST - /actors - Successful
  """
  def test_post_actors_casting_director(self):
    res = self.client().post('/actors', json=self.actor, headers=self.director_header)
    data = json.loads(res.data)

    self.assertEqual(res.status_code, 201)
    self.assertEqual(data['success'], True)

  """
    Test Case: POST - /actors - 401
  """
  def test_post_401_actors_casting_director(self):
    res = self.client().post('/actors', json=self.actor)
    data = json.loads(res.data)

    self.assertEqual(res.status_code, 401)

  """
    Test Case: PATCH - /actors - 404 (ID and payload not matching)
  """

  def test_patch_404_actors_casting_director(self):
    res = self.client().patch('/actors/8989', json=self.actor, headers=self.director_header)
    self.assertEqual(res.status_code, 404)

  """
    Test Case: PATCH - /actors - Successful
  """
  def test_patch_actors_casting_director(self):
    res = self.client().patch('/actors/4', json={"name":"Jason Bourne"}, headers=self.director_header)
    self.assertEqual(res.status_code, 200)
  

  """
    Test Case: DELETE - /actors - Sucessfull
  """
  def test_delete_actors_casting_director(self):
    actor = Actor(
      name="Kevin James",
      age=56,
      gender="Male"
    )
    actor.insert()
    id = actor.id
    res = self.client().delete('actors/{}'.format(id), headers=self.director_header)
    self.assertEqual(res.status_code, 200)

  """
    Test Case: DELETE - /actors - 500
  """
  def test_delete_404_actors_casting_directory(self):
    res = self.client().delete('actors/105645665', headers=self.director_header)
    self.assertEqual(res.status_code, 500)


  # * TESTS FOR PRODUCER DIRECTOR ( GET POST DELETE PATCH)
  

# Make the tests conveniently executable

if __name__ == "__main__":
    unittest.main()