import { Box, Flex, Link, Text } from '@chakra-ui/react'
import { Link as RouterLink } from 'react-router-dom'

const Navigation = () => {
  return (
    <Box bg="blue.500" px={4} py={3}>
      <Flex maxW="1200px" mx="auto" justify="space-between" align="center">
        <Text fontSize="xl" fontWeight="bold" color="white">
          Finanz Tracker
        </Text>
        <Flex gap={6}>
          <Link as={RouterLink} to="/" color="white" _hover={{ textDecoration: 'underline' }}>
            Dashboard
          </Link>
          <Link as={RouterLink} to="/transactions" color="white" _hover={{ textDecoration: 'underline' }}>
            Transaktionen
          </Link>
          <Link as={RouterLink} to="/budget" color="white" _hover={{ textDecoration: 'underline' }}>
            Budget
          </Link>
        </Flex>
      </Flex>
    </Box>
  )
}

export default Navigation 