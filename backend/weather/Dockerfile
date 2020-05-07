FROM python:3.6.6-alpine 
RUN mkdir /app
WORKDIR /app 
COPY ./weather /app/
RUN pip install -r requirements.txt
EXPOSE 8082
CMD ["python", "/app/weather.py"]