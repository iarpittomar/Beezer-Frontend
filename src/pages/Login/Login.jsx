import React from 'react';
import {
  Box,
  Flex,
  Image,
  Stack,
  Text,
  FormControl,
  FormLabel,
  Input,
  FormErrorMessage,
  Button,
  Divider,
  Icon,
} from '@chakra-ui/react';
import { FcGoogle } from 'react-icons/fc';
import { Link } from 'react-router-dom';
import MobileSvg from '../../assests/img/beezerLogin.jpeg';
import LogoNavy from '../../assests/img/beezerLogo.png';
import AuthLayout from '../../Layouts/AuthLayout';
import { Field, Form, Formik } from 'formik';
import { REQUIRED_VALIDATION } from '../../utils/FormikValidations';
import { useAuth } from '../../contexts/AuthContext';

const LoginForm = ({ styleProps }) => {
  const auth = useAuth();
  return (
    <AuthLayout>
      <Flex flex='1' w='100%' shadow='lg' {...styleProps}>
        <Flex
          flexGrow={1}
          flexBasis='50%'
          bgGradient='linear(to-b, primary.500, primary.700)'
          justifyContent='center'
          alignItems='center'
          flexDirection='column'
          px='5rem'
        >
          <Box>
            <Image src={MobileSvg} alt='logo' />
          </Box>
        </Flex>
        <Stack
          flexGrow={1}
          flexBasis='50%'
          bg='white'
          p='5rem 8rem'
          spacing='1.5rem'
        >
          <Flex
            justifyContent='center'
            alignItems='center'
            w='10rem'
            h='4rem'
            bgColor='#261ED5'
          >
            <Image
              marginTop='-2px'
              h='2rem'
              w='6rem'
              src={LogoNavy}
              alt='logo'
            />
          </Flex>
          <Stack h='60rem' justifyContent='center' spacing='3rem'>
            <Box>
              <Text fontSize='2xl' fontWeight='600' color='black'>
                Log In
              </Text>
              <Text fontSize='sm' color='gray.500' mt='1rem'>
                Enter your email and password to login our dashboard.
              </Text>
            </Box>
            <Formik
              initialValues={{
                email: '',
                password: '',
              }}
              onSubmit={(values, actions) => {
                auth.login(values.email, values.password);
              }}
            >
              {(props) => (
                <Form>
                  <Stack spacing='1.5rem'>
                    <Field name='email' validate={REQUIRED_VALIDATION}>
                      {({ field, form }) => (
                        <FormControl
                          variant='primary'
                          isInvalid={form.errors.email && form.touched.email}
                          isRequired
                        >
                          <FormLabel htmlFor='email'>Email</FormLabel>
                          <Input
                            {...field}
                            id='email'
                            height='4rem'
                            placeholder='Enter your email'
                            focusBorderColor='primary.300'
                          />
                          <FormErrorMessage>
                            {form.errors.email}
                          </FormErrorMessage>
                        </FormControl>
                      )}
                    </Field>
                    <Field name='password' validate={REQUIRED_VALIDATION}>
                      {({ field, form }) => (
                        <FormControl
                          variant='primary'
                          isInvalid={
                            form.errors.password && form.touched.password
                          }
                          isRequired
                        >
                          <FormLabel htmlFor='password'>Password</FormLabel>
                          <Input
                            {...field}
                            id='password'
                            height='4rem'
                            placeholder='Enter your password'
                            focusBorderColor='primary.300'
                          />
                          <FormErrorMessage>
                            {form.errors.password}
                          </FormErrorMessage>
                        </FormControl>
                      )}
                    </Field>
                    <Button spinnerPlacement='start' type='submit'>
                      Sign In
                    </Button>
                    <Divider />
                    <Button
                      colorScheme='primary'
                      variant='outline'
                      spinnerPlacement='start'
                      type='button'
                      onClick={auth?.loginWithGoogle}
                    >
                      <Icon mr='0.6rem' as={FcGoogle} /> Sign In with Google
                    </Button>
                  </Stack>
                </Form>
              )}
            </Formik>

            <Box>
              <Text color='gray.500' fontSize='sm' mb='0.5rem'>
                Don't have an account?{' '}
                <Link to='/signUp'>
                  <Text
                    cursor='pointer'
                    as='span'
                    color='primary.500'
                    fontWeight='500'
                  >
                    SignUp
                  </Text>
                </Link>
              </Text>
            </Box>
          </Stack>
        </Stack>
      </Flex>
    </AuthLayout>
  );
};

export default LoginForm;
