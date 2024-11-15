'use client';

import React from 'react';
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import {
  Card,
  CardContent,
  CardActions,
  TextField,
  Button,
  Typography,
  Box,
} from '@mui/material';
import axios from 'axios';

// Define the validation schema using Yup
const schema = yup.object().shape({
  username: yup.string().required('Username is required'),
  password: yup
    .string()
    .min(6, 'Password must be at least 6 characters')
    .required('Password is required'),
});

interface FormValues {
  username: string;
  password: string;
}

const Register = () => {
  // Set up React Hook Form with Yup validation
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: yupResolver(schema),
  });

  // Handle form submission
  const onSubmit = async (data: FormValues) => {
    try {
      console.log('Submitting:', data);

      // Example API request
      const response = await axios.post('/api/login', data);
      console.log('Login success:', response.data);
    } catch (error) {
      console.error('Login failed:', error);
    }
  };

  return (
    <Box display="flex" justifyContent="center" alignItems="center" height="100vh">
      <Card sx={{ maxWidth: 400, width: '100%' }}>
        <CardContent>
          <Typography variant="h5" component="div" gutterBottom>
            Login
          </Typography>
          <form onSubmit={handleSubmit(onSubmit)}>
            <Box mb={2}>
              <Controller
                name="username"
                control={control}
                defaultValue=""
                render={({ field }) => (
                  <TextField
                    {...field}
                    label="Username"
                    variant="outlined"
                    fullWidth
                    error={!!errors.username}
                    helperText={errors.username?.message}
                  />
                )}
              />
            </Box>
            <Box mb={2}>
              <Controller
                name="password"
                control={control}
                defaultValue=""
                render={({ field }) => (
                  <TextField
                    {...field}
                    label="Password"
                    type="password"
                    variant="outlined"
                    fullWidth
                    error={!!errors.password}
                    helperText={errors.password?.message}
                  />
                )}
              />
            </Box>
            <CardActions>
              <Button type="submit" variant="contained" fullWidth>
                Login
              </Button>
            </CardActions>
          </form>
        </CardContent>
      </Card>
    </Box>
  );
};

export default Register;
