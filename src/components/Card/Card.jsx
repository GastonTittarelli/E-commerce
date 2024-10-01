import { Card, Stack, CardBody, Image, CardFooter, Heading, Text, Button, ButtonGroup, Divider, Flex } from '@chakra-ui/react'
import { useState } from 'react';

import { Link } from "react-router-dom";

const CardC = ({ product }) => {
	const [isHovered, setIsHovered] = useState(false);
	return (
		<Card
			onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
			maxW='270px'
			className='m-4 transform transition-shadow duration-300 ease-in-out shadow-lg'
			_hover={{
				boxShadow: '0 0 8px rgba(0, 0, 0, 0.3)',
  }}
>
  <CardBody>
		<Link to={`/item/${product.id}`}>
			<Image
				src={product.image} 
				alt={product.title}
				borderRadius='md'
				borderWidth='2px'
				borderColor='gray.200'
				objectFit='contain' 
				h='150px'  
				w='100%'  
				transition='transform 0.3s ease'
				_hover={{ transform: 'scale(1.1)' }}
			/>
		</Link>
    <Stack mt='6' spacing='3'>
      <Heading size='md' noOfLines={1} fontWeight='bold' color='blue.700'>
        {product.title}
      </Heading>
      <Text noOfLines={3} textAlign='left' color='gray.600'>
        {product.description}
      </Text>
      <Text color='blue.600' fontSize='2xl'  p={2} borderRadius='md'>
        ${product.price}
      </Text>
    </Stack>
  </CardBody>
  <Divider 
		color={isHovered ? 'blue.500' : 'black'} 
		transition='color 0.3s ease'/>
  <CardFooter>
    <Flex justify='center' width='100%'>
      <ButtonGroup spacing='1'>
        <Link to={`/item/${product.id}`}>
          <Button
            variant='solid'
            colorScheme='blue'
            size='md'
            _hover={{  transform: 'scale(1.03)' }}
            transition='all 0.2s ease'
          >
            Buy now
          </Button>
        </Link>
      </ButtonGroup>
    </Flex>
  </CardFooter>
</Card>

	);
};

export default CardC;


