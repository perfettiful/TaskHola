# Use an official Python runtime as the base image
FROM python:3.9

# Set environment variables
ENV PYTHONDONTWRITEBYTECODE 1
ENV PYTHONUNBUFFERED 1

# Set the working directory in the container
WORKDIR /app

# Copy the requirements file into the container
COPY requirements.txt .

# Install the project dependencies
RUN pip install -r requirements.txt

# Add PostgreSQL client
RUN apt-get update && apt-get install -y postgresql-client

# Install psycopg2
RUN pip install psycopg2-binary

# Copy the project code into the container
COPY . .

# Copy entrypoint script
COPY entrypoint.sh /entrypoint.sh
RUN chmod +x /entrypoint.sh

# Set the entrypoint
ENTRYPOINT ["/entrypoint.sh"]

# Set the command
CMD ["python", "manage.py", "runserver", "0.0.0.0:8000"]