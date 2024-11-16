"use client";
import React, { useState } from "react";
import { Box, Button, Container, TextField, Typography, Select, MenuItem, InputLabel, FormControl } from "@mui/material";
import { useForm, Controller } from "react-hook-form";
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import ReactMapGL, { Marker } from "react-map-gl";
import ReactSelect from "react-select";
import axios from "axios";

// Define the types for provinces and cities
type Province = { value: string; label: string };
type City = { value: string; label: string };

// Validation schema using Yup
const validationSchema = Yup.object({
  name: Yup.string().required("نام باید وارد شود"),
  lastname: Yup.string().required("نام خانوادگی باید وارد شود"),
  mobile: Yup.string().required("شماره همراه باید وارد شود").matches(/^[0-9]{10}$/, "شماره همراه وارد شده صحیح نمی‌باشد"),
  postcode: Yup.string().required("کد پستی باید وارد شود").matches(/^[0-9]{10}$/, "کد پستی صحیح نمی‌باشد"),
  address: Yup.string().required("آدرس باید وارد شود"),
  province: Yup.string().required("استان باید انتخاب شود"),
  city: Yup.string().required("شهر باید انتخاب شود"),
  gps: Yup.string().required("مکان باید مشخص شود"),
});

const CheckoutPage = () => {
  const [viewport, setViewport] = useState({
    latitude: 35.6892,
    longitude: 51.3890,
    zoom: 10,
  });
  const [selectedProvince, setSelectedProvince] = useState<Province | null>(null);
  const [selectedCity, setSelectedCity] = useState<City | null>(null);

  // Sample provinces and cities (can be fetched dynamically)
  const provinces: Province[] = [
    { value: "tehran", label: "Tehran" },
    { value: "esfahan", label: "Esfahan" },
    { value: "mashhad", label: "Mashhad" },
    // Add other provinces here
  ];

  const cities: City[] = [
    { value: "tehran-city", label: "Tehran City" },
    { value: "esfahan-city", label: "Esfahan City" },
    { value: "mashhad-city", label: "Mashhad City" },
    // Add cities based on selected province
  ];

  // React Hook Form setup
  const { control, handleSubmit, formState: { errors }, setValue } = useForm({
    resolver: yupResolver(validationSchema),
    defaultValues: {
      name: "",
      lastname: "",
      mobile: "",
      postcode: "",
      address: "",
      province: "",
      city: "",
      gps: "",
    },
  });

  const onSubmit = (data: any) => {
    console.log(data);
  };

  const handleSelectProvince = (selectedOption: any) => {
    setSelectedProvince(selectedOption);
    setValue("province", selectedOption.value);
    // Fetch cities based on selected province
    // In this case, just setting cities as a static list based on selection
  };

  const handleSelectCity = (selectedOption: any) => {
    setSelectedCity(selectedOption);
    setValue("city", selectedOption.value);
  };

  const handleMapClick = (event: any) => {
    const [longitude, latitude] = event.lngLat;
    setViewport({
      ...viewport,
      latitude,
      longitude,
    });
    setValue("gps", `${longitude},${latitude}`);
  };

  return (
    <Container maxWidth="sm" sx={{ my: 3 }}>
      <Typography variant="h4" gutterBottom sx={{ pb: 2 }}>
        تکمیل خرید
      </Typography>
      <form onSubmit={handleSubmit(onSubmit)}>
        {/* Name Input */}
        <Controller
          name="name"
          control={control}
          render={({ field }) => (
            <TextField
              label="نام"
              fullWidth
              {...field}
              error={!!errors.name}
              helperText={errors.name ? errors.name.message : ""}
              sx={{ mb: 3 }}
            />
          )}
        />

        {/* Last Name Input */}
        <Controller
          name="lastname"
          control={control}
          render={({ field }) => (
            <TextField
              label="نام خانوادگی"
              fullWidth
              {...field}
              error={!!errors.lastname}
              helperText={errors.lastname ? errors.lastname.message : ""}
              sx={{ mb: 3 }}
            />
          )}
        />

        {/* Mobile Input */}
        <Controller
          name="mobile"
          control={control}
          render={({ field }) => (
            <TextField
              label="شماره همراه"
              fullWidth
              {...field}
              error={!!errors.mobile}
              helperText={errors.mobile ? errors.mobile.message : ""}
              sx={{ mb: 3 }}
            />
          )}
        />

        {/* Postcode Input */}
        <Controller
          name="postcode"
          control={control}
          render={({ field }) => (
            <TextField
              label="کدپستی"
              fullWidth
              {...field}
              error={!!errors.postcode}
              helperText={errors.postcode ? errors.postcode.message : ""}
              sx={{ mb: 3 }}
            />
          )}
        />

        {/* Address Input */}
        <Controller
          name="address"
          control={control}
          render={({ field }) => (
            <TextField
              label="آدرس"
              fullWidth
              {...field}
              error={!!errors.address}
              helperText={errors.address ? errors.address.message : ""}
              sx={{ mb: 3 }}
            />
          )}
        />

        {/* Province Select */}
        <Controller
          name="province"
          control={control}
          render={({ field }) => (
            <FormControl fullWidth sx={{ mb: 3 }}>
              <InputLabel>استان</InputLabel>
              <Select
                {...field}
                value={selectedProvince ? selectedProvince.value : ""}
                onChange={(e) => handleSelectProvince({ value: e.target.value, label: e.target.value })}
                displayEmpty
              >
                {provinces.map((province) => (
                  <MenuItem key={province.value} value={province.value}>
                    {province.label}
                  </MenuItem>
                ))}
              </Select>
              {errors.province && <Typography color="error">{errors.province.message}</Typography>}
            </FormControl>
          )}
        />

        {/* City Select */}
        <Controller
          name="city"
          control={control}
          render={({ field }) => (
            <FormControl fullWidth sx={{ mb: 3 }}>
              <InputLabel>شهر</InputLabel>
              <Select
                {...field}
                value={selectedCity ? selectedCity.value : ""}
                onChange={(e) => handleSelectCity({ value: e.target.value, label: e.target.value })}
                displayEmpty
              >
                {cities.map((city) => (
                  <MenuItem key={city.value} value={city.value}>
                    {city.label}
                  </MenuItem>
                ))}
              </Select>
              {errors.city && <Typography color="error">{errors.city.message}</Typography>}
            </FormControl>
          )}
        />

        {/* GPS Location */}
        <Controller
          name="gps"
          control={control}
          render={({ field }) => (
            <TextField
              label="مکان جفرافیایی"
              fullWidth
              {...field}
              disabled
              error={!!errors.gps}
              helperText={errors.gps ? errors.gps.message : ""}
              sx={{ mb: 3 }}
            />
          )}
        />

        {/* Map */}
        {/* <Box sx={{ height: "300px", width: "100%", my: 2 }}>
          <ReactMapGL
            {...viewport}
            mapboxApiAccessToken={process.env.NEXT_PUBLIC_MAPBOX_API_KEY}
            onViewportChange={setViewport}
            onClick={handleMapClick}
          >
            {viewport.latitude && viewport.longitude && (
              <Marker latitude={viewport.latitude} longitude={viewport.longitude}>
                <div>📍</div>
              </Marker>
            )}
          </ReactMapGL>
        </Box> */}

        {/* Submit Button */}
        <Button type="submit" variant="contained" color="primary">
          ثبت سفارش
        </Button>
      </form>
    </Container>
  );
};

export default CheckoutPage;
