FROM python:3.6.6-alpine 
RUN mkdir /app
WORKDIR /app 
COPY ./news /app/
RUN pip install -r requirements.txt
EXPOSE 8081 
CMD ["python", "/app/news.py"]