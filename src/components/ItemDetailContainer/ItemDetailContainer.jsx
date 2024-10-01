import { doc, getDoc, getFirestore } from "firebase/firestore";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { ClipLoader } from "react-spinners";
import { useCartContext } from "../../context/CartContext";
import ItemCount from "../ItemCount/ItemCount";
import { Card, Stack, CardBody, Image, Heading, Text, Box } from "@chakra-ui/react";
// Button, ButtonGroup, Divider, Flex, CardFooter

const override = {
  display: "block",
  margin: "auto",
  borderColor: "rgba(80, 77, 233, 1)",
};

export const ItemDetailContainer = ({ data }) => {
  const [loading, setLoading] = useState(true);
  let [color, setColor] = useState("#ffffff");
  const [product, setProduct] = useState({});
  const { id } = useParams();
  const [selectedProduct, setSelectedProduct] = useState({});

  const [goToCart, setGotoCart] = useState(false);
  const { addProduct } = useCartContext();

  useEffect(() => {
    const queryDb = getFirestore();
    const queryDoc = doc(queryDb, "items", id);
    getDoc(queryDoc)
      .then((res) => setProduct({ id: res.id, ...res.data() }))
      .then(() => setLoading(false));
  }, []);

  const onAdd = (quantity) => {
    setGotoCart(true);
    addProduct(product, quantity);
  };

  return (
    <div className="flex items-center justify-center min-h-[87vh] w-full my-4">
      {loading ? (
        <ClipLoader
          color={color}
          loading={loading}
          cssOverride={override}
          size={150}
          aria-label="Loading Spinner"
          data-testid="loader"
        />
      ) : (
        <div className="flex items-center justify-center gap-1 w-[900px] h-[500px] bg-white border border-solid border-gray-300 rounded-md shadow-sm" >
        <Card
          w="850px"
          h="95%"
					direction="row"
          boxShadow="none"
        >
					<div className="w-1/2  p-4 flex items-center justify-center  ">

					<Image
              src={product.image}
              alt={product.title}
              borderRadius="md"
              borderWidth="2px"
              borderColor="gray.200"
              objectFit="contain"
              h="250px"
              w="70%"
              boxShadow="none"
              transition="transform 0.3s ease"
              _hover={{ transform: "scale(1.3)", cursor: "zoom-in" }}
            />
					</div>
          <CardBody className="w-1/2  p-4 border border-solid border-gray-300 rounded-md shadow-sm bg-slate-50 h-[100%] flex flex-wrap items-center justify-center" >
            
            <Stack  spacing="3"  mb="6">
              <Heading
                size="md"
                fontWeight="bold"
              >
                {product.title}
              </Heading>
              <Box 
                maxHeight="150px"  // Limita la altura
                overflowY="auto"   // Activa el scroll vertical
                sx={{
                  '&::-webkit-scrollbar': {
                    width: '8px',   // Anchura de la barra
                  },
                  '&::-webkit-scrollbar-thumb': {
                    background: 'blue.600',  // Color de la barra
                    borderRadius: '24px',    // Bordes redondeados
                  },
                  '&::-webkit-scrollbar-track': {
                    background: 'gray.200',  // Color del track
                  },
                }}
              >
              <Text  textAlign="left" color="gray.600">
                {product.description}
              </Text>
              </Box>
              <Text color="blue.600" fontSize="2xl" p={2} borderRadius="md" mt="6">
                ${product.price}
              </Text>
            </Stack>
          
          {goToCart ? (
            <>
              <Link to="/cart" className="w-[190px]">
                <button className="bg-green-500 text-white w-[80%] h-auto border-none rounded-[6px] p-[5px] m-[5px] hover:bg-[#3e8e41] duration-300">
                  Go to Cart
                </button>
              </Link>
              <Link to="/" className="w-[80%]">
                <button className="bg-[rgb(151,151,151)] text-white w-[190px] h-auto border-none rounded-[6px] p-[5px] m-[5px] hover:bg-[#2b6cb0] transition duration-300">
                  Continue Shopping
                </button>
              </Link>
            </>
          ) : (
            <ItemCount initial={1} stock={7} onAdd={onAdd} />
          )}
					</CardBody>
        </Card>
      </div>
      )}
    </div>
  );
};

export default ItemDetailContainer;
