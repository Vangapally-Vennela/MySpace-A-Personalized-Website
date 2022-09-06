 function talk(){  
   var know = {
    "Hi":"Hello,How Was Your Day ☺",  
    "hi":"Hello,How Was Your Day ☺",  
    "Can we be friends?":"Yes!I like to make new friends",
    "What is your name?":"Iam Mr.Bubble,What's your name?",
    "Who are you" : "Iam a buddy bot",  
    "How are you" : "Good :) What about you??",  
    "Good":"well!What can i do for you",
    "What can i do for you" : "Please Give us A Follow & Like.",  
    "Your followers" : "I have my family of 5000 members, i don't have follower ,have supportive Famiy👪 ",  
    "ok" : "Thank You So Much ",  
    "Bye" : "Okay! Will meet soon.."  
   };  
   var user = document.getElementById('userBox').value;  
    document.getElementById('chatLog').innerHTML = user + "<br>";  
   if (user in know) {  
    document.getElementById('chatLog').innerHTML = know[user] + "<br>";  
   }else{  
    document.getElementById('chatLog').innerHTML = "Sorry,I didn't understand <br>";  
   }  
  }
  