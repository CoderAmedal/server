FROM rust:1-slim

WORKDIR /app

COPY algorithm_visualizer /app/algorithm_visualizer
RUN cd /app/algorithm_visualizer && cargo build --release

COPY run.sh /app/run.sh
RUN chmod +x /app/run.sh

CMD ["/app/run.sh"]
