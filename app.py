from flask import Flask, render_template
import subprocess
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


#push protocol route
@app.route('/run_js')
def run_js():
    try:
        result = subprocess.run(['node', 'pushNoti.mjs'], capture_output=True, text=True, check=True)
        output = result.stdout.strip()
        return f"Output from JavaScript: {output}"
    except subprocess.CalledProcessError as e:
        return f"Error: {e.stderr}"

if __name__ == '__main__':
    app.run(debug=True,port = 8000)
