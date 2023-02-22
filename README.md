# JetstarGamingInternship
A dummy website made for internship assessment.

Live at <https://dev-jetstar-assignment.deno.dev/>

Create and deploy a simple form for making payments for rental orders. The form is divided into 3 sections which are as follows. 
(*) Order summary section ( Product name, price , order ID, date)

(*) Customer details section which will have an input by the user ( Name, number, email, address).

(*) Payment Section (Dummy procedure for online and COD payments with success or failure message)

Form should include these fields.

It should be step by step form where first you see the order details, click next and you get to a section where you input your details and then finally a dummy payment procedure which success or failure message.

Bonus: In the “Customer details” section include an option to accept the terms and conditions for rental.


# How to run

run the server as follows

```bash
deno run --allow-net --allow-read=. server.ts
```

navigate to localhost:3000