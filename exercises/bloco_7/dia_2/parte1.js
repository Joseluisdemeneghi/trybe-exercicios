const order = {
  name: 'Rafael Andrade',
  phoneNumber: '11-98763-1416',
  address: {
    street: 'Rua das Flores',
    number: '389',
    apartment: '701',
  },
  order: {
    pizza: {
      margherita: {
        amount: 1,
        price: 25,
      },
      pepperoni: {
        amount: 1,
        price: 20,
      }
    },
    drinks: {
      coke: {
        type: 'Coca-Cola Zero',
        price: 10,
        amount: 1,
      }
    },
    delivery: {
      deliveryPerson: 'Ana Silveira',
      price: 5,
    }
  },
  payment: {
    total: 60,
  },
};

const customerInfo = (order) => {
  const entregador = order.order.delivery.deliveryPerson;
  const cliente = order.name;
  const telefone = order.phoneNumber;
  const rua = order.address.street;
  const numero = order.address.number;
  const apto = order.address.apartment;

  console.log(`Olá ${entregador}, entrega para: ${cliente}, Telefone: ${telefone}, R. ${rua}, Nº: ${numero}, AP: ${apto}.`)
}

customerInfo(order);

const orderModifier = (order) => {
  const client = order.name = 'Luiz Silva';
  const sabor1 = Object.keys(order.order.pizza)[0] = 'muzzarela';
  const sabor2 = Object.keys(order.order.pizza)[1] = 'calabresa';
  const bebida = order.order.drinks.coke.type;
  const valor = order.payment.total = 50;

  console.log(`Olá ${client}, o total do seu pedido de ${sabor1}, ${sabor2} e ${bebida} é R$ ${valor},00.`);
}

orderModifier(order);
