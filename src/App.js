// import axios from "axios";
// import { useEffect, useState } from "react";
import { ChakraProvider } from '@chakra-ui/react'
import ProductSimple from "./components/ProductSimple";
import Button from "./components/ColorModeToggle";
import ColorModeToggle from "./components/ColorModeToggle";
import ProductAddToCart from './components/ProductSimple';
import NewCard from './components/NewCard';
import {toys} from './data'

export default function App() {
  

  // useEffect(() => {
  //   fetchUsers();
  // }, []);

  // const fetchUsers = async () => {
  //   try {
  //     const response = await axios.get(
  //       "https://jsonplaceholder.typicode.com/users"
  //     );

  //     setUsers(response.data);
  //   } catch (error) {
  //     console.log("Erro ao buscar usuários");
  //     console.log(error);
  //   }
  // };

  return (
    <ChakraProvider>
      <ColorModeToggle/>
      {toys.map((user)=>{
        return(
        <ProductSimple
        key={user.id}
        user={user}
        />
        )
      })}
    </ChakraProvider>
  );
}
