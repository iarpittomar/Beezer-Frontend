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
} from '@chakra-ui/react';
import MobileSvg from '../../assests/img/beezerLogin.jpeg';
import LogoNavy from '../../assests/img/beezerLogo.png';
import AuthLayout from '../../Layouts/AuthLayout';
import { Field, Form, Formik } from 'formik';
import { REQUIRED_VALIDATION } from '../../utils/FormikValidations';
import { useAuth } from '../../contexts/AuthContext';
import { Link } from 'react-router-dom';

const SignUpForm = ({ styleProps }) => {
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
                Sign Up
              </Text>
              <Text fontSize='sm' color='gray.500' mt='1rem'>
                Enter your details to register to our system.
              </Text>
            </Box>
            <Formik
              initialValues={{
                email: '',
                password: '',
                confirmPassword: '',
              }}
              onSubmit={(values, actions) => {
                if (values?.password !== values?.confirmPassword) {
                  alert('password do not match');
                }
                auth.signUp(values.email, values.password);
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
                            type='email'
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
                            type='password'
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

                    <Field
                      name='confirmPassword'
                      validate={REQUIRED_VALIDATION}
                    >
                      {({ field, form }) => (
                        <FormControl
                          variant='primary'
                          isInvalid={
                            form.errors.confirmPassword &&
                            form.touched.confirmPassword
                          }
                          isRequired
                        >
                          <FormLabel htmlFor='confirmPassword'>
                            Confirm Password
                          </FormLabel>
                          <Input
                            {...field}
                            id='confirmPassword'
                            type='password'
                            height='4rem'
                            placeholder='Confirm your password'
                            focusBorderColor='primary.300'
                          />
                          <FormErrorMessage>
                            {form.errors.confirmPassword}
                          </FormErrorMessage>
                        </FormControl>
                      )}
                    </Field>
                    <Button
                      isLoading={props.isSubmitting}
                      spinnerPlacement='start'
                      type='submit'
                    >
                      Sign Up
                    </Button>
                  </Stack>
                </Form>
              )}
            </Formik>

            <Box>
              <Text color='gray.500' fontSize='sm' mb='0.5rem'>
                Already have an account?{' '}
                <Link to='/login'>
                  <Text
                    cursor='pointer'
                    as='span'
                    color='primary.500'
                    fontWeight='500'
                  >
                    Login
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

export default SignUpForm;
