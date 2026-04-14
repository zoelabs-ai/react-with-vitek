#!/bin/bash

echo "🚀 Starting App (simulate-prod: app + db + adminer)..."
docker compose -f docker-compose.simulate.prod.yaml up --build
