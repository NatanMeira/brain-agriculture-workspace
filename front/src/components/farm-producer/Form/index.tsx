import { FarmProducer } from '@/domain/entity';
import yup from '@/utils/forms/validation/yup';
import { AddCpfOrCnpjMask } from '@/utils/forms/masks';
import {
  Button,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Typography,
} from '@mui/material';
import { useFormik } from 'formik';
import { brazilianStates } from './helper';
import { PlantedCropsEnum } from '@/domain/enum';
import { Translate } from '@/utils/lang';

export type FarmProducerFormProps = {
  data?: FarmProducer;
  disabled?: boolean;
  onSubmit?: (data: FarmProducer) => void;
  validationSchema?: yup.AnyObject;
};

export function FarmProducerForm({
  data,
  disabled,
  onSubmit,
  validationSchema,
}: FarmProducerFormProps) {

  const { errors, handleChange, values, touched, handleSubmit, setFieldValue } =
    useFormik({
      initialValues: data || new FarmProducer(),
      enableReinitialize: true,
      validationSchema: validationSchema || yup.object().shape({}),
      onSubmit: (values) => {
        onSubmit && onSubmit(values);
      },
    });

  return (
    <form onSubmit={handleSubmit}>
      <Grid container spacing={2} marginTop="1rem">
        <Grid item xs={4}>
          <TextField
            variant="outlined"
            label="CPF ou CNPJ"
            name="cpfOrCnpj"
            onChange={handleChange}
            value={AddCpfOrCnpjMask(values.cpfOrCnpj)}
            error={!!errors.cpfOrCnpj && touched.cpfOrCnpj}
            disabled={disabled}
            helperText={touched.cpfOrCnpj && errors.cpfOrCnpj}
            fullWidth
          />
        </Grid>
        <Grid item xs={4}>
          <TextField
            variant="outlined"
            label="Nome"
            name="name"
            onChange={handleChange}
            value={values.name}
            error={!!errors.name && touched.name}
            disabled={disabled}
            helperText={touched.name && errors.name}
            fullWidth
          />
        </Grid>
        <Grid item xs={4}>
          <TextField
            variant="outlined"
            label="Nome da fazenda"
            name="farmName"
            onChange={handleChange}
            value={values.farmName}
            error={!!errors.farmName && touched.farmName}
            disabled={disabled}
            helperText={touched.farmName && errors.farmName}
            fullWidth
          />
        </Grid>
        <Grid item xs={4}>
          <TextField
            variant="outlined"
            label="Cidade"
            name="city"
            onChange={handleChange}
            value={values.city}
            error={!!errors.city && touched.city}
            disabled={disabled}
            helperText={touched.city && errors.city}
            fullWidth
          />
        </Grid>
        <Grid item xs={4}>
          <FormControl fullWidth>
            <InputLabel id="state">Estado</InputLabel>
            <Select
              labelId="state"
              value={values.state}
              label="Estado"
              onChange={(e) => setFieldValue('state', e.target.value)}
              error={!!errors.state && touched.state}
              disabled={disabled}
            >
              {brazilianStates.map((state) => (
                <MenuItem key={state.label} value={state.value}>
                  {state.value} - {state.label}
                </MenuItem>
              ))}
            </Select>
            {touched.state && errors.state && (
              <Typography color="error" fontSize="0.75rem">
                {errors.state}
              </Typography>
            )}
          </FormControl>
        </Grid>
        <Grid item xs={4}>
          <TextField
            variant="outlined"
            label="Área arável (ha)"
            name="arableAreaInHectares"
            onChange={handleChange}
            value={values.arableAreaInHectares}
            error={
              !!errors.arableAreaInHectares && touched.arableAreaInHectares
            }
            disabled={disabled}
            helperText={
              touched.arableAreaInHectares && errors.arableAreaInHectares
            }
            fullWidth
            type="number"
            inputProps={{ min: 0, step: 0.1 }}
          />
        </Grid>
        <Grid item xs={4}>
          <TextField
            variant="outlined"
            label="Área de vegetação (ha)"
            name="vegetationAreaInHectares"
            onChange={handleChange}
            value={values.vegetationAreaInHectares}
            error={
              !!errors.vegetationAreaInHectares &&
              touched.vegetationAreaInHectares
            }
            disabled={disabled}
            helperText={
              touched.vegetationAreaInHectares &&
              errors.vegetationAreaInHectares
            }
            fullWidth
            type="number"
            inputProps={{ min: 0, step: 0.1 }}
          />
        </Grid>
        <Grid item xs={4}>
          <TextField
            variant="outlined"
            label="Área total (ha)"
            name="totalAreaInHectares"
            onChange={handleChange}
            value={values.totalAreaInHectares}
            error={!!errors.totalAreaInHectares && touched.totalAreaInHectares}
            disabled={disabled}
            helperText={
              touched.totalAreaInHectares && errors.totalAreaInHectares
            }
            fullWidth
            type="number"
            inputProps={{ min: 0, step: 0.1 }}
          />
        </Grid>
        <Grid item xs={4}>
          <FormControl fullWidth>
            <InputLabel id="plantedCrops">Culturas plantadas</InputLabel>
            <Select
              labelId="plantedCrops"
              value={values.plantedCrops}
              label="Culturas plantadas"
              onChange={(e) => setFieldValue('plantedCrops', e.target.value)}
              multiple
              error={!!errors.plantedCrops && touched.plantedCrops}
              disabled={disabled}
            >
              {Object.values(PlantedCropsEnum).map((crop) => (
                <MenuItem
                  key={crop}
                  value={crop}
                  style={{
                    backgroundColor: values.plantedCrops.includes(crop)
                      ? '#e0e0e0'
                      : 'white',
                  }}
                >
                  {Translate(crop)}
                </MenuItem>
              ))}
            </Select>
            {touched.plantedCrops && errors.plantedCrops && (
              <Typography color="error" fontSize="0.75rem">
                {errors.state}
              </Typography>
            )}
          </FormControl>
        </Grid>
        {!disabled && (
          <Grid item xs={12}>
            <Button
              type="submit"
              variant="contained"
              size="large"
              fullWidth
              sx={{ marginTop: '1rem' }}
            >
              Salvar
            </Button>
          </Grid>
        )}
      </Grid>
    </form>
  );
}
