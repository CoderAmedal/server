FROM python:3-slim

ARG tag_name

RUN apt-get update \
 && apt-get install -y --no-install-recommends curl ca-certificates tar \
 && curl -fsSL -o /tmp/tracers.py.tar.gz "https://github.com/algorithm-visualizer/tracers.py/archive/${tag_name}.tar.gz" \
 && mkdir -p /app \
 && tar -xzf /tmp/tracers.py.tar.gz -C /app --strip-components=1 \
 && rm /tmp/tracers.py.tar.gz \
 && sed -i '/^from \. import chart$/d' /app/algorithm_visualizer/tracers/array1d.py \
 && apt-get purge -y --auto-remove curl ca-certificates \
 && rm -rf /var/lib/apt/lists/*

ENV PYTHONPATH=/app

COPY run.py /app/run.py

CMD ["python", "/app/run.py"]
