from flask import Flask, render_template, request, session, redirect, url_for
from markupsafe import escape
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


'''
Note by soham:
here i am saving the file objects in a location and then sending their
address to the subprocess via Node js. The node js is uploading my file 
to the lighthouse and returning its hash. 
'''
@app.route('/upload', methods=['GET', 'POST'])

def upload():
    
        
    msg = []
    if 'imageObj' not in request.files:
        
        return render_template('orgpage.html', msg = "empty")
    
    files = request.files.getlist('imageObj')
    print(files)
    try:
        for file in files:
            file_path = f"temporary/{file.filename}"
            file.save(file_path)
            result = subprocess.run(['node', 'lighthousePP.js', file_path], capture_output=True, text=True)
            output = result.stdout
            hash = (list(output.split(','))[1]).split("'")[1]
            msg.append(hash)
            print(hash)
        print(msg)
        session['hash_array'] = msg

    except Exception:
        msg.append("error")
        print("error encountered! ")
    return redirect(url_for('org'))



if __name__ == '__main__':
    app.run(debug=True,port = 8000)
