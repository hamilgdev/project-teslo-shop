app.build_dev:
	docker compose build --no-cache ; docker compose down

app.start_dev:
	docker compose down && docker compose up ; docker compose down

app.stop_dev:
	docker compose down

# ----------------------------------------------

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