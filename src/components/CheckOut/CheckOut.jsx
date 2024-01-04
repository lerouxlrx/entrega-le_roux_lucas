import React, { useContext, useState } from "react";
import { CartContext } from "../../context/CartContext";
import { useForm } from "react-hook-form";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../../firebase/client";
import { FormControl, FormLabel, Input, Button, Heading, VStack} from "@chakra-ui/react";

const Checkout = () => {
  const [pedidoId, setPedidoId] = useState("");
  const { cart, calcularTotal, clearCart } = useContext(CartContext);
  const { register, handleSubmit } = useForm();

  const comprar = (data) => {
    const pedido = {
      cliente: data,
      productos: cart,
      total: calcularTotal(),
    };

    const pedidosRef = collection(db, "pedidos");

    addDoc(pedidosRef, pedido).then((doc) => {
      setPedidoId(doc.id);
      clearCart();
    });
  };

  if (pedidoId) {
    return (
      <VStack spacing={4} align="center">
        <Heading>Ahora estas conectado! Muchas gracias por tu compra.</Heading>
        <p>Tu orden es: {pedidoId}</p>
      </VStack>
    );
  }

  return (
    <VStack spacing={4} align="center">
      <Heading>Completa los datos para finalizar tu compra de ${calcularTotal()}</Heading>
      <form onSubmit={handleSubmit(comprar)}>
        <FormControl>
          <Input
            type="text"
            placeholder="Ingresa tu nombre"
            {...register("nombre", { required: true })}
          />
        </FormControl>

        <FormControl>
          <Input
            type="email"
            placeholder="Ingresa tu e-mail"
            {...register("email", { required: true })}
          />
        </FormControl>

        <FormControl>
          <Input
            type="tel"
            placeholder="Ingresa tu teléfono"
            {...register("telefono", { required: true })}
          />
        </FormControl>

        <Button type="submit">Comprar</Button>
      </form>
    </VStack>
  );
};

export default Checkout;