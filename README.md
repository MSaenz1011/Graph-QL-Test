# **GraphQL**

​

## **_Questions about GraphQL_**

​

### **_1.- What is GraphQL?_**

​
GraphQL is a query language for APIs developed by Facebook. It enables clients to ask for exactly what they need from a server or Back-end application. It is considered REST APIs.
​

### **_2.- How is GraphQL different from REST?_**

​
The main difference between GraphQL and REST the use of a single endpoint for all queries, REST, on the other hadn, uses multiple endpoints.
​

### **_3.- What are the main components of a GraphQL query?_**

​
The main components of a GraphQL query are: the query and arguments. The Query specifies the fields that will be returned while the arguments function like a filter.
​

### **_4.- What is a GraphQL schema?_**

​
It is the structure of the data present in a GraphQL API. It specifies the types of objects that can be queried and the relationships they may have
​

### **_5.- What is a resolver in GraphQL?_**

​
A resolver is a function that determines how to retrieve the data from a certain field. it is the intermmediary between the query and the DataBase.
​

### **_6.- How can you perform mutations in GraphQL?_**

​
TO mutate the data the client must send a request with a mutation operationin order to modify the data present in the server.
​

### **_7.- How does GraphQL handle errors?_**

​
Errors are returned as a response to the petition along with the data. It may be user-defined or a generic system message.
​

### **_8.- Can you use GraphQL with any programming language?_**

​
It works with any language that can send HTTP requests, receive and process JSON responses.
​

### **_9.- What is the main problem that solves graphql and how is it solved?_**

​
The main problem is over-fetching and under-fetching common in REST APIs. With REST, clients often receive more data than they need or must make multiple requests to retrieve all the necessary data. GraphQL solves this problem by allowing clients to specify exactly what data they need making any petition more efficient but also more detailed.
