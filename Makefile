app.build_dev:
	docker compose build --no-cache ; docker compose down

app.start_dev:
	docker compose down && docker compose up ; docker compose down

app.stop_dev:
	docker compose down

# ----------------------------------------------

frontend.build:
	docker compose build --no-cache frontend

frontend.start:
	docker compose run --rm --name host-teslo-shop-frontend \
	--no-deps --service-ports frontend

frontend.stop:
	docker compose stop frontend

frontend.test:
	cd frontend && npm run test

frontend.test.watch:
	cd frontend && npm run test:watch

# ----------------------------------------------

backend.build:
	docker compose build --no-cache backend

backend.start:
	docker compose run --rm --name host-teslo-shop-backend \
	--service-ports backend

backend.stop:
	docker compose stop backend

backend.test:
	cd backend && npm run test

backend.test.watch:
	cd backend && npm run test:watch

# ----------------------------------------------

database.build:
	docker compose build --no-cache db

database.start:
	docker compose run --rm --name host-teslo-shop-db \
	--no-deps --service-ports database

database.stop:
	docker compose stop database