import pogo from 'https://deno.land/x/pogo/main.ts';

const server = pogo.server({ port : 3000 });

let data = {
    name: '',
    email: '',
    phone: '',
    address: '',
}

server.router.get('/', (req, h) => {
    return h.file('order_confirm.html');
});

server.router.get('/cust_details', (req, h) => {
    return h.file('cust_details.html');
})

server.router.post('/save_details', async (req, h) => {
    const _data = await req.raw.formData();
    // Using something like this we can get the data and save it in DB.
    data.name = String(_data.get('name'));
    data.email = String(_data.get('email'));
    data.phone = String(_data.get('phone'));
    data.address = String(_data.get('address'));
    if (_data.get('tnc')) return h.redirect('/payment_form');
    else return h.redirect('/cust_details');
})

server.router.get('/payment_form', (req, h) => {
    return h.file('payment_form.html');
});

server.router.post('/save_payment', async (req, h) => {
  const _data = await req.raw.formData();
  // Using something like this we can get the data and save it in DB.
  console.log(_data.get('mode'));
  return (Math.random() > 0.25) ? h.redirect('/success') : h.redirect('/failure');
});

server.router.get('/success', (req, h) => {return h.file('success.html')});
server.router.get('/failure', (req, h) => {return h.file('failure.html')});


server.start();