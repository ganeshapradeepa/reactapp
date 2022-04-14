const functions = require('firebase-functions');
const express = require('express');
const cors = require('cors');
const stripe = require('stripe')(
'sk_test_51KU4h8SAm2HpUIuzoLpI1WaY0lnzmxLnGRbrXSsqQnuhS00EFLU43sM5LIBBZU1Ko9TE561eT1ze90OAGOoJg1Zx00mm8wXfFI');



const app = express();

app.use(cors({origin: true}));

app.use(express.json());


app.get('/',(request, response) => response.status(200).send('Hello World'))
app.post('/payments/create', async (request, response) =>{
   const total = request.query.total;
   console.log('Payment Request Recived boom !!! for this amount >>>',total)
   const paymentIntent = await stripe.paymentIntents.create({
       amount: total,
       currency: "INR",
   }); 
   response.status(201).send({
       clientSecret: paymentIntent.client_secret,
   });
});
exports.api = functions.https.onRequest(app);

  
//http://localhost:5001/j-shop-4d135/us-central1/api