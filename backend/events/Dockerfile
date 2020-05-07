FROM python:3.6.6-alpine 
RUN mkdir /app
WORKDIR /app 
COPY ./events /app/
RUN pip install -r requirements.txt
EXPOSE 8083 
CMD ["python", "/app/events.py"]