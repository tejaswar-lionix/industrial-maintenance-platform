# Industrial Equipment Predictive Maintenance Platform

Predictive maintenance for CNC, pumps, compressors, turbines: sensor ingestion (MQTT/OPC-UA), FFT/kurtosis, RUL survival, work orders, digital twin, OEE dashboard.

## Architecture
- **Backend:** Django 4.2 + DRF + Celery + Redis, PostgreSQL (sqlite fallback), TimescaleDB (mock)
- **Frontend:** React 18 + Vite + Chart.js + Leaflet (plant map)
- **15 Apps:** assets, sensors, ingestion, signal_processing, anomalies, failure_prediction, maintenance, digital_twin, dashboard, alerts, integrations, compliance, reporting, frontend, api

## Install
```bash
python -m venv .venv && source .venv/bin/activate
pip install -r requirements.txt
npm install
```

## Build
```bash
make build
docker build -t maintenance-platform .
npm run build
```

## Run
```bash
python manage.py migrate --run-syncdb
python manage.py runserver 0.0.0.0:8000
celery -A maintenance worker -l info
npm run dev
docker-compose up
```

## Tests
```bash
pytest -q
pytest --cov=apps --cov-report=xml
npm test
```

## Features
- **Assets:** hierarchy plant→line→machine, criticality A/B/C
- **Sensors:** vibration (accel), temperature, pressure, current, 1kHz sampling
- **Signal:** FFT 1024, RMS, kurtosis >3.5 bearing fault, envelope
- **RUL:** Weibull, survival regression, classification `healthy/degraded/failing`
- **Maintenance:** work orders, scheduling, spare parts MRO, `MTBF/MTTR`
- **Digital twin:** physics `F=ma`, calibration, simulation
- **OEE:** availability × performance × quality

## License
Proprietary — All rights reserved (Industrial Labs).
