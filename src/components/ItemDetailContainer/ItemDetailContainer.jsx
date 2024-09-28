import { doc, getDoc, getFirestore } from "firebase/firestore";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { ClipLoader } from "react-spinners";
import { useCartContext } from "../../context/CartContext";
import ItemCount from "../ItemCount/ItemCount";
import { Card, Stack, CardBody, Image, Heading, Text } from "@chakra-ui/react";
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
    <div className="flex items-center justify-center h-screen w-full m-2">
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
        <div className="flex items-center justify-center gap-1 w-[900px] h-[600px] bg-white border border-solid border-gray-300 rounded-md shadow-sm" >
        <Card
          maxW="850px"
          maxH="850px"
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
          <CardBody className="w-1/2 h-full p-4 border border-solid border-gray-300 rounded-md shadow-sm "  >
            
            <Stack mt="6" spacing="3">
              <Heading
                size="md"
                fontWeight="bold"
                color="blue.700"
              >
                {product.title}
              </Heading>
              <Text  textAlign="left" color="gray.600">
                {product.description}
              </Text>
              <Text color="blue.600" fontSize="2xl" p={2} borderRadius="md">
                ${product.price}
              </Text>
            </Stack>
          

          {/* <CardFooter>
    <Flex justify='center' width='100%'>
      
    </Flex>
  </CardFooter> */}
          {goToCart ? (
            <>
              <Link to="/cart" className="w-[80%]">
                <button className="bg-green-500 text-white w-[80%] h-auto border-none rounded-[5px] p-[5px] m-[5px] hover:bg-[#3e8e41]">
                  Go to Cart
                </button>
              </Link>
              <Link to="/" className="w-[80%]">
                <button className="bg-[rgb(149,147,10)] text-white w-[80%] h-auto border-none rounded-[5px] p-[5px] m-[5px] hover:bg-[rgb(168,166,6)]">
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
