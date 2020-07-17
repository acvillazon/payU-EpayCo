[![Epayco|Solid](https://www.drupal.org/files/styles/grid-3-2x/public/project-images/ePayco-logo.png?itok=qL-YPvxw)](https://docs.epayco.co/payments/checkout)

[![Build Status](https://travis-ci.org/joemccann/dillinger.svg?branch=master)](https://travis-ci.org/joemccann/dillinger)

## OnePage Checkout Integration

There are two ways to do this integration.

- The first is by using a form, which will appear as a button on the page.
- The second is by adding the script (https://checkout.epayco.co/checkout.js) on the page.

We are going to use the second method, this method provide us a class with all the necessary functions to execute any operation described in its documentacion.

### FIRST STEP

we must include in our proyect the script provided for **epayCo**

```
<script type="text/javascript" src="https://checkout.epayco.co/checkout.js"> </script>
```

### SECOND STEP

- **key**: llave secreta del comercio.
- **test**: true (prueba), false (producción).

```js
var handler = ePayco.checkout.configure({
  key: "45b960805ced5c27ce34b1600b4b9f54",
  test: true,
});
```

It is necessary to make the connection and communication with the API epayCo.

### THIRD STEP

In this step we need all the information neccesary for proccesed the payment.
The information that we require in this step are the next.

```json
var data = {
     //Parametros compra (obligatorio)
      name: "Vestido Mujer Primavera",
      description: "Vestido Mujer Primavera",
      invoice: "1234",
      currency: "cop",
      amount: "12000",
      tax_base: "0",
      tax: "0",
      country: "co",
      lang: "en",

      //Onpage="false" - Standard="true"
      external: "true",


      //Atributos opcionales
      confirmation: "http://secure2.payco.co/prueba_curl.php",
      response: "http://secure2.payco.co/prueba_curl.php",

     //atributo deshabilitación metodo de pago
      methodsDisable: ["TDC", "PSE","SP","CASH","DP"]
}
```

### FOURTH STEP

Finally, we must provided to the handler, the object created with all the information of the payment.

```
handler.open(data)
```

This last step show us a iframe provided from EpayCo with all the payment methods authorize from us and the data about the product.
