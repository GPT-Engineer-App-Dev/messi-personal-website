// Complete the Index page component for Lionel Messi's personal website
import { Box, Container, Flex, Heading, Image, Link, SimpleGrid, Text, VStack } from "@chakra-ui/react";
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";

const Index = () => {
  return (
    <VStack spacing={10}>
      {/* Hero Section */}
      <Box w="full" h="70vh" bgImage="https://images.unsplash.com/photo-1626025437642-0b05076ca301?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxMaW9uZWwlMjBNZXNzaXxlbnwwfHx8fDE3MTI5NzIyMDJ8MA&ixlib=rb-4.0.3&q=80&w=1080" bgPos="center" bgSize="cover">
        <Flex align="center" justify="center" h="full" bg="rgba(0, 0, 0, 0.5)">
          <Heading color="white" fontSize="6xl">
            Lionel Messi
          </Heading>
        </Flex>
      </Box>

      {/* Biography Section */}
      <Container maxW="container.lg">
        <Heading as="h2" size="xl" mb={4}>
          Biography
        </Heading>
        <Text fontSize="lg">Lionel Messi, born on June 24, 1987, in Rosario, Argentina, is widely regarded as one of the greatest football players of all time. He spent the majority of his career at FC Barcelona before moving to Paris Saint-Germain in 2021. Messi has won numerous awards including six Ballon d'Or titles, and he is known for his incredible dribbling, vision, and scoring ability.</Text>
      </Container>

      {/* Gallery Section */}
      <Container maxW="container.lg">
        <Heading as="h2" size="xl" mb={4}>
          Gallery
        </Heading>
        <SimpleGrid columns={3} spacing={4}>
          <Image src="https://images.unsplash.com/photo-1572852448397-5557083b51b7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxMaW9uZWwlMjBNZXNzaSUyMHBsYXlpbmd8ZW58MHx8fHwxNzEyOTcyMjAzfDA&ixlib=rb-4.0.3&q=80&w=1080" />
          <Image src="https://images.unsplash.com/photo-1513151233558-d860c5398176?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxMaW9uZWwlMjBNZXNzaSUyMGNlbGVicmF0aW9ufGVufDB8fHx8MTcxMjk3MjIwM3ww&ixlib=rb-4.0.3&q=80&w=1080" />
          <Image src="https://images.unsplash.com/photo-1667983090238-4cb9adfe49a7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxMaW9uZWwlMjBNZXNzaSUyMHdpdGglMjB0cm9waHl8ZW58MHx8fHwxNzEyOTcyMjAzfDA&ixlib=rb-4.0.3&q=80&w=1080" />
        </SimpleGrid>
      </Container>

      {/* Social Media Links */}
      <Container maxW="container.lg">
        <Heading as="h2" size="xl" mb={4}>
          Follow Lionel Messi
        </Heading>
        <Flex gap={6}>
          <Link href="https://facebook.com/lionelmessi" isExternal>
            <FaFacebook size="2em" />
          </Link>
          <Link href="https://instagram.com/leomessi" isExternal>
            <FaInstagram size="2em" />
          </Link>
          <Link href="https://twitter.com/TeamMessi" isExternal>
            <FaTwitter size="2em" />
          </Link>
          <Link href="https://youtube.com/channel/UCJZ9C1jNjvD2XlX9jLcRiBg" isExternal>
            <FaYoutube size="2em" />
          </Link>
        </Flex>
      </Container>

      {/* News Section */}
      <Container maxW="container.lg">
        <Heading as="h2" size="xl" mb={4}>
          Latest News
        </Heading>
        <VStack spacing={4} align="stretch">
          <Text as="h3" fontSize="lg">
            Messi scores a hat-trick in his latest match!
          </Text>
          <Text as="h3" fontSize="lg">
            Messi's charity event raises over $1 million for children in need.
          </Text>
          <Text as="h3" fontSize="lg">
            Messi announced as the global ambassador for the upcoming World Cup.
          </Text>
        </VStack>
      </Container>
    </VStack>
  );
};

export default Index;
