from flask import Flask, render_template

app = Flask(__name__)

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/userpage.html')
def user():
    return render_template('userpage.html')

@app.route('/orgpage.html')
def org():
    return render_template('orgpage.html')

if __name__ == '__main__':
    app.run(debug=True,port = 8000)
