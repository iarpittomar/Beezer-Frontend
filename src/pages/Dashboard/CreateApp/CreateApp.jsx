import { useDisclosure } from '@chakra-ui/hooks';
import {
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
} from '@chakra-ui/modal';
import { Button } from '@chakra-ui/button';
import { Field, Form, Formik } from 'formik';
import { REQUIRED_VALIDATION } from '../../../utils/FormikValidations';
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
} from '@chakra-ui/form-control';
import { Stack } from '@chakra-ui/layout';
import { Input } from '@chakra-ui/react';

const CreateApp = (props) => {
  return (
    <>
      <Modal size='xl' isOpen={props.isOpen} onClose={props.onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Modal Title</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Formik
              initialValues={{
                name: '',
                desc: '',
              }}
              onSubmit={(values, actions) => {
                console.log('here in submut');
                props.handleCreateApp({ name: values.name, desc: values.desc });
              }}
            >
              {(props) => (
                <Form>
                  <Stack spacing='1.5rem'>
                    <Field name='name' validate={REQUIRED_VALIDATION}>
                      {({ field, form }) => (
                        <FormControl
                          variant='primary'
                          isInvalid={form.errors.name && form.touched.name}
                          isRequired
                        >
                          <FormLabel htmlFor='name'>App Name</FormLabel>
                          <Input
                            {...field}
                            id='name'
                            height='4rem'
                            placeholder='Enter your App name'
                            focusBorderColor='primary.300'
                          />
                          <FormErrorMessage>
                            {form.errors.name}
                          </FormErrorMessage>
                        </FormControl>
                      )}
                    </Field>
                    <Field name='desc' validate={REQUIRED_VALIDATION}>
                      {({ field, form }) => (
                        <FormControl
                          variant='primary'
                          isInvalid={form.errors.desc && form.touched.desc}
                          isRequired
                        >
                          <FormLabel htmlFor='desc'>App Description</FormLabel>
                          <Input
                            {...field}
                            id='desc'
                            height='4rem'
                            placeholder='Enter your description'
                            focusBorderColor='primary.300'
                          />
                          <FormErrorMessage>
                            {form.errors.desc}
                          </FormErrorMessage>
                        </FormControl>
                      )}
                    </Field>
                  </Stack>
                  <Button colorScheme='primary.500' mr={3} type='submit'>
                    Create
                  </Button>
                </Form>
              )}
            </Formik>
          </ModalBody>

          <ModalFooter></ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default CreateApp;
