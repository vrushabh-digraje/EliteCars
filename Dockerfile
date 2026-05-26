FROM tomcat:9.0

COPY target/EliteCars-0.0.1-SNAPSHOT.war /usr/local/tomcat/webapps/EliteCars.war

EXPOSE 8080

CMD ["catalina.sh", "run"]