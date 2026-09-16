FROM eclipse-temurin:8-jdk

ARG tag_name

RUN apt-get update \
 && apt-get install -y --no-install-recommends curl ca-certificates \
 && mkdir -p /tmp/tracers.java /app/classes \
 && curl -fsSL -o /tmp/tracers.java.tar.gz "https://github.com/algorithm-visualizer/tracers.java/archive/${tag_name}.tar.gz" \
 && tar -xzf /tmp/tracers.java.tar.gz -C /tmp/tracers.java --strip-components=1 \
 && (curl -fsSL -o /app/gson.jar "https://maven-central.storage-download.googleapis.com/maven2/com/google/code/gson/gson/2.8.5/gson-2.8.5.jar" \
     || curl -fsSL -o /app/gson.jar "https://maven.aliyun.com/repository/public/com/google/code/gson/gson/2.8.5/gson-2.8.5.jar") \
 && javac -cp /app/gson.jar -d /app/classes $(find /tmp/tracers.java/src/main/java -name '*.java') \
 && rm -rf /tmp/tracers.java /tmp/tracers.java.tar.gz \
 && apt-get purge -y --auto-remove curl ca-certificates \
 && rm -rf /var/lib/apt/lists/*

COPY run.sh /app/run.sh
RUN chmod +x /app/run.sh

CMD ["/app/run.sh"]
