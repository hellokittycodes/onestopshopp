from flask import Flask, render_template
from views.views import views
from auth.auth import auth

def create_app():
    app = Flask(__name__, template_folder='website/templates')
    app.config['SECRET_KEY'] = 'summerwalker'
    app.register_blueprint(views, url_prefix='/')
    app.register_blueprint(auth, url_prefix='/')
    app.static_folder = 'static'
    return app

app = create_app()

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
    app.run(debug=True, port=8080)
