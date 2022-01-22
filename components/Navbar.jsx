import Link from 'next/link';
import { Menu, MenuButton, MenuList, MenuItem, IconButton, Flex, Box, Spacer } from '@chakra-ui/react';
import { FcMenu, FcHome, FcAbout } from 'react-icons/fc';
import { BsSearch } from 'react-icons/bs';
import { FiKey } from 'react-icons/fi';


const Navbar = () => {
return(
    <Flex p='2' borderBottom='1px' borderColor='gray.100'>
<Box fontSize='3xl' color='blue.400' fontWeight='bold'>
<Link href='/' paddingLeft='2'>RealTor</Link>
</Box>
<Spacer/>
<Box>
    <Menu>
        {/* <MenuButton as={IconButton} icon={<FcMenu/>} variant='outlined' color='red.400'/> */}
        {/* <MenuList> */}
        <Flex flexDirection='row' justifyContent='center' marginRight='50px' p='0' >
              <Link href='/' passHref width=''>
                <MenuItem width='auto' icon={<FcHome/>}>Home</MenuItem>
            </Link>
            <Link href='/search' passHref>
                <MenuItem width='auto' icon={<BsSearch/>}>Search</MenuItem>
            </Link>
            <Link href='/search?purpose=for-sale' passHref>
                <MenuItem width='auto' icon={<FcAbout/>}>Buy property</MenuItem>
            </Link>
            <Link href='/search?purpose=for-rent' passHref>
                <MenuItem width='auto' icon={<FiKey/>}>Rent property</MenuItem>
            </Link>
        </Flex>
          
        {/* </MenuList> */}
    </Menu>
       </Box>
    </Flex>
)
}

export default Navbar