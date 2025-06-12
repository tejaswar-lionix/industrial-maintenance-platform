build:
	docker build -t maintenance-platform .

test:
	pytest -q

run:
	python manage.py runserver 0.0.0.0:8000
