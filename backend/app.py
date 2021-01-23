import os
from flask import Flask, json, jsonify, abort, request
from backend.models import setup_db, Movie, Actor
from backend.auth import AuthError, requires_auth
from flask_cors import CORS

def create_app(test_config=None):

    app = Flask(__name__)
    setup_db(app)
    CORS(app)

    @app.after_request
    def after_request(response):
        """ Set Access Control """

        response.headers.add('Access-Control-Allow-Headers', 'Content-Type, Authorization, true')
        response.headers.add('Access-Control-Allow-Methods', 'GET, POST, PATCH, DELETE, OPTIONS')

        return response 

    '''
    Home Route
    '''
    @app.route('/')
    def get_greeting():
        greeting = "Hello" 
        return greeting

    '''
    Movies Routes
    '''
    # GET ALL MOVIES
    @app.route('/movies')
    @requires_auth('get:movies')
    def get_movies(payload):
        movies = Movie.query.all()
        return jsonify({
            'success': True,
            'movies': [movie.format() for movie in movies]
        }), 200

    # POST A NEW MOVIE
    @app.route('/movies', methods=['POST'])
    @requires_auth('add:movies')
    def add_movies():
        data = request.get_json()

        title = data.get('title', '')
        release_date = data.get('release_date', '')

        if((title == '') or (release_date == '')):
            abort(422)
        
        movie = Movie(title=title, release_date=release_date)
        try:
            movie.insert()
            return jsonify({
            'success': True,
            'movie': movie.format()
            }), 201

        except Exception as e: 
            print(e)
            abort(422)

    # DELETE A MOVIE
    @app.route('/movies/<int:movie_id>', methods=["DELETE"])
    @requires_auth('delete:movie')
    def delete_movie(movie_id):
        try: 
            movie = Movie.query.filter(Movie.id == movie_id).one_or_none()

            if Movie is None:
                abort(404)

            movie.delete()
            return jsonify({
                'success': True,
                'deleted_movie_id': movie_id,
                'deleted_movie_title': movie.title
            })
        except Exception as e:
            print(e)
            abort(500)

    # UPDATE A MOVIE
    @app.route('/movies/<int:movie_id>', methods=['PATCH'])
    @requires_auth('patch:movie')
    def update_movie(movie_id):
        if request.data:
            new_movie_data = json.loads(request.data)
            movie = Movie.query.filter(Movie.id == movie_id).one_or_none()
            if movie is None:
                abort(404)
            if not ('title' or 'release_date' in new_movie_data):
                abort(400)
            if 'title' in new_movie_data:
                setattr(movie, 'title', new_movie_data['title'])
            if 'release_date' in new_movie_data:
                setattr(movie, 'release_date', new_movie_data['release_date'])
            movie.update()
            updated_movie = Movie.query.filter(Movie.id == movie_id).first()
            return jsonify({
                'success': True,
                'updated_movie': [updated_movie.format()]
            })
        else:
            abort(422)

    '''
    Actors Routes
    '''
    # GET ALL ACTORS
    @app.route('/actors')
    @requires_auth('get:actors')
    def get_actors(payload):
        actors = Actor.query.all()
        
        return jsonify({
            'success': True,
            'actors': [actor.format() for actor in actors]
        }), 200

    # POST NEW ACTORS
    @app.route('/actors', methods=['POST'])
    @requires_auth('add:actors')
    def add_actor(payload):
        data = request.get_json()

        name = data.get('name', '')
        age = data.get('age', '')
        gender = data.get('gender', '')

        actor = Actor(name=name, age=age, gender=gender)
        try:
            actor.insert()
            return jsonify({
                'success': True,
                'actor': actor.format()
            }), 201
        
        except Exception as e:
            print(e)
            abort(422)

    # DELETE AN ACTORS
    @app.route('/actors/<int:actor_id>', methods=["DELETE"])
    @requires_auth('delete:actor')
    def delete_actor(actor_id):
        try: 
            actor = Actor.query.filter(Actor.id == actor_id).one_or_none()

            if Actor is None:
                abort(404)

            actor.delete()
            return jsonify({
                'success': True,
                'deleted_actor_id': actor_id,
                'deleted_actor_name': actor.name
            })
        except Exception as e:
            print(e)
            abort(500)
    
    # UPDATE AN ACTOR
    @app.route('/actors/<int:actor_id>', methods=['PATCH'])
    @requires_auth('patch:actor')
    def update_actor(actor_id):
        if request.data:
            new_actor_data = json.loads(request.data)
            actor = Actor.query.filter(Actor.id == actor_id).one_or_none()
            if actor is None:
                abort(404)
            if not ('name' or 'age' or 'gender' in new_actor_data):
                abort(400)
            if 'name' in new_actor_data:
                setattr(actor, 'name', new_actor_data['title'])
            if 'age' in new_actor_data:
                setattr(actor, 'age', new_actor_data['age'])
            if 'gender' in new_actor_data:
                setattr(actor, 'gender', new_actor_data['gender'])
            actor.update()
            updated_actor = Actor.query.filter(Actor.id == actor_id).first()
            return jsonify({
                'success': True,
                'updated_actor': [updated_actor.format()]
            })
        else:
            abort(422)


    @app.errorhandler(400)
    def bad_request(error):
        return jsonify({
            'success': False,
            'error': 400,
            'message': 'bad request'
        }), 400

    @app.errorhandler(404)
    def not_found(error):
        return jsonify({
            'success': False,
            'error': 404,
            'message': 'resource not found'
        }), 404

    @app.errorhandler(405)
    def not_found(error):
        return jsonify({
            'success': False,
            'error': 404,
            'message': 'method not allowed'
        }), 404

    @app.errorhandler(422)
    def unprocessable(error):
        return jsonify({
            "success": False, 
            "error": 422,
            "message": "unprocessable"
        }), 422

    @app.errorhandler(AuthError)
    def handle_auth_error(ex):
        response = jsonify(ex.error)
        response.status_code = ex.status_code
        return response

    return app

app = create_app()

if __name__ == '__main__':
    app.run()