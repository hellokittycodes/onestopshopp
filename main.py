from flask import Flask, render_template
from flask_socketio import SocketIO, emit
from views.views import views
from auth.auth import auth

socketio = SocketIO()

def create_app():
    app = Flask(__name__, template_folder='website/templates')
    app.config['SECRET_KEY'] = 'summerwalker'
    app.register_blueprint(views, url_prefix='/')
    app.register_blueprint(auth, url_prefix='/')
    app.static_folder = 'static'

    # Bind the SocketIO instance to the app
    socketio.init_app(app)

    return app

app = create_app()

@socketio.on('message_from_client')
def handle_message(message):
    print('Received message from client:', message)
    emit('message_from_server', message, broadcast=True)

@app.route("/")
def home():
    return render_template("index.html")

@app.route("/calendly")
def calendly():
    print('went to calendly')
    return render_template("calendly1.html")

@app.route("/arc")
def arc():
    print('went to arc')
    return render_template("arc.html")

if __name__ == '__main__':
    socketio.run(app, debug=True)