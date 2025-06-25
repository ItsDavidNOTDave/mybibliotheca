python3 -m venv venv
source venv/bin/activate
pip install -r requirements.txt
gunicorn -w 6 -b 0.0.0.0:5054 run:app
