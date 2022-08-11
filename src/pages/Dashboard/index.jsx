import { Flex, Grid, GridItem, Box, Heading, Text } from '@chakra-ui/layout';
import React from 'react';
import { axiosForJson } from '../../api/axios-client';
import { useAuth } from '../../contexts/AuthContext';
import LogoNavy from '../../assests/img/beezerLogo.png';
import { Image } from '@chakra-ui/image';
import { Button } from '@chakra-ui/button';
import { Avatar } from '@chakra-ui/avatar';
import { useDisclosure } from '@chakra-ui/hooks';
import CreateApp from './CreateApp/CreateApp';

const Dashboard = () => {
  const auth = useAuth();
  const [appsList, setAppList] = React.useState([]);
  const { isOpen, onOpen, onClose } = useDisclosure();

  const fetchAppsData = React.useCallback(() => {
    axiosForJson
      .get('/app')
      .then((resp) => {
        setAppList(resp.data?.appsList);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const handleCreateApp = (data) => {
    axiosForJson
      .post('/app', data)
      .then((resp) => {
        console.log(resp.data);
        setAppList([...appsList, resp.data.app]);
        onClose();
      })
      .catch((err) => {});
  };

  React.useEffect(() => {
    fetchAppsData();
  }, [fetchAppsData]);

  return (
    <React.Fragment>
      <CreateApp
        isOpen={isOpen}
        onOpen={onOpen}
        onClose={onClose}
        handleCreateApp={handleCreateApp}
      />
      <Flex bgColor='primary.500' justifyContent='space-between'>
        <Flex
          justifyContent='space-between'
          alignItems='center'
          w='10rem'
          h='4rem'
          bgColor='#261ED5'
        >
          <Image marginTop='-2px' h='2rem' w='6rem' src={LogoNavy} alt='logo' />
        </Flex>
        <Button spinnerPlacement='start' type='button' onClick={auth.logout}>
          Logout
        </Button>
      </Flex>

      <Flex flexDirection='column' h='94vh' px='10rem' py='5rem'>
        <Flex>
          <Button spinnerPlacement='start' type='button' onClick={onOpen}>
            + Create New App
          </Button>
        </Flex>
        <Grid mt='2rem' templateColumns='repeat(5, 1fr)' gap={6}>
          {appsList.map((app, index) => (
            <GridItem
              key={app.name + index}
              w='100%'
              border='1px solid #8080802e'
              borderRadius='4px'
              p='1rem'
            >
              <Box w='100%'>
                <Flex alignItems='center'>
                  <Avatar size='md' name={app.name} src='' />
                  <Box>
                    <Heading as='h5' size='sm' ml='1rem'>
                      {app.name}
                    </Heading>
                    <Text as='h6' size='sm' ml='1rem'>
                      {app.desc}
                    </Text>
                  </Box>
                </Flex>
              </Box>
            </GridItem>
          ))}
        </Grid>{' '}
      </Flex>
    </React.Fragment>
  );
};

export default Dashboard;
