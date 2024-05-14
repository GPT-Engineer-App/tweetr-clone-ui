import { Container, VStack, HStack, Box, Text, Avatar, Input, Button, IconButton, Divider } from "@chakra-ui/react";
import { FaTwitter, FaRegComment, FaRetweet, FaHeart, FaShareSquare } from "react-icons/fa";

const tweets = [
  {
    id: 1,
    user: {
      name: "John Doe",
      username: "@johndoe",
      avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxtYWxlJTIwcG9ydHJhaXR8ZW58MHx8fHwxNzE1NjQ2ODIzfDA&ixlib=rb-4.0.3&q=80&w=1080",
    },
    content: "This is my first tweet!",
    timestamp: "2h",
  },
  {
    id: 2,
    user: {
      name: "Jane Smith",
      username: "@janesmith",
      avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxmZW1hbGUlMjBwb3J0cmFpdHxlbnwwfHx8fDE3MTU2NDY4MjR8MA&ixlib=rb-4.0.3&q=80&w=1080",
    },
    content: "Hello Twitter!",
    timestamp: "3h",
  },
];

const Tweet = ({ tweet }) => (
  <Box w="100%" p={4} borderBottom="1px" borderColor="gray.200">
    <HStack align="start">
      <Avatar src={tweet.user.avatar} />
      <VStack align="start" spacing={1}>
        <HStack>
          <Text fontWeight="bold">{tweet.user.name}</Text>
          <Text color="gray.500">{tweet.user.username}</Text>
          <Text color="gray.500">· {tweet.timestamp}</Text>
        </HStack>
        <Text>{tweet.content}</Text>
        <HStack spacing={4} pt={2}>
          <IconButton aria-label="Comment" icon={<FaRegComment />} size="sm" variant="ghost" />
          <IconButton aria-label="Retweet" icon={<FaRetweet />} size="sm" variant="ghost" />
          <IconButton aria-label="Like" icon={<FaHeart />} size="sm" variant="ghost" />
          <IconButton aria-label="Share" icon={<FaShareSquare />} size="sm" variant="ghost" />
        </HStack>
      </VStack>
    </HStack>
  </Box>
);

const Index = () => {
  return (
    <Container centerContent maxW="container.md" p={4}>
      <VStack spacing={4} w="100%">
        <HStack w="100%" justify="space-between" p={4} borderBottom="1px" borderColor="gray.200">
          <FaTwitter color="#1DA1F2" size="2em" />
          <Button colorScheme="twitter">Tweet</Button>
        </HStack>
        <HStack w="100%" p={4} borderBottom="1px" borderColor="gray.200">
          <Avatar src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHx1c2VyJTIwYXZhdGFyfGVufDB8fHx8MTcxNTczMDg3N3ww&ixlib=rb-4.0.3&q=80&w=1080" />
          <Input placeholder="What's happening?" variant="unstyled" ml={4} />
        </HStack>
        {tweets.map((tweet) => (
          <Tweet key={tweet.id} tweet={tweet} />
        ))}
      </VStack>
    </Container>
  );
};

export default Index;
