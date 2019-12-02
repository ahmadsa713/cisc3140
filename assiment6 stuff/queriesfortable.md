//The Queries used to get average/min/max scores and to import the data
this is the summarized version with no mistakes //the log file that I
have submitted as well has all the commands I used

//to import the data I used

sqlite\> .mode csv sqlite\> .import 0447.csv table5

//shows the structure of the table 

sqlite\> .schema table5 CREATE TABLE

table5( "Timestamp" TEXT, "Presentation was well organized" TEXT,
"Speaker spoke clearly and was easy to understand." TEXT, "Presenter was
enthusiastic about the topic." TEXT, "I learned something new today"
TEXT, "What was something new you learned from this presentation that
you didn't know before?" TEXT, "What worked well for the
presentation/presenter?" TEXT, "Suggestions for improvement. What are
some changes would you advise the presenter to make their presentation
more effective?" TEXT, "Additional comments for the speaker" TEXT );

//Queries to get max sqlite\> 

select max("Speaker spoke clearly and was
easy to understand."+0) from table5; 5 

sqlite\> select max("Presentation
was well organized"+0) from table5; 5 

sqlite\> select max("Presenter was
enthusiastic about the topic.") from table5; 5 

sqlite\> select max( "I
learned something new today") from table5; 5

//Queries to get avg 

sqlite\> select avg("Speaker spoke clearly and was
easy to understand.") from table5; 4.53333333333333 


sqlite\> select
avg("Presentation was well organized") from table5; 4.6 

sqlite\> select
avg("Presenter was enthusiastic about the topic.") from table5;
4.53333333333333 

sqlite\> select avg( "I learned something new today")
from table5; 4.4

//Queries to get min 

sqlite\> select min("Speaker spoke clearly and was
easy to understand.") from table5; 3 

sqlite\> select min("Presentation
was well organized") from table5; 4 

sqlite\> select min("Presenter was
enthusiastic about the topic.") from table5; 3 

sqlite\> select min( "I
learned something new today") from table5; 3 

sqlite\>
