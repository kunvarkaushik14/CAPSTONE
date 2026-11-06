# -------------------------------------------------------------
# NEXORA 3.0 Spring Boot Backend Dockerfile for Render / Cloud
# -------------------------------------------------------------
FROM maven:3.9.6-eclipse-temurin-17 AS build
WORKDIR /app

# Cache dependencies
COPY pom.xml .
RUN mvn dependency:go-offline -B

# Copy source and build executable JAR
COPY src ./src
RUN mvn clean package -DskipTests

# Lightweight JRE runtime
FROM eclipse-temurin:17-jre-alpine
WORKDIR /app

COPY --from=build /app/target/*.jar app.jar

ENV PORT=8085
EXPOSE 8085

ENTRYPOINT ["sh", "-c", "java -Dserver.port=${PORT} -jar app.jar"]

