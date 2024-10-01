"use client";
import Layout from "@/components/templates/UI/organisms/Layout";
import { IOrder } from "@/Interfaces/IOrder";
import { OrderEditValidator } from "@/validators/OrderEditValidator";
import { TextField, Select, MenuItem, Button, Box } from "@mui/material";
import { useFormik } from "formik";


const EditTemplate: React.FC = ({  }) => {

  const formik = useFormik<IOrder>({

    initialValues: {
        date: " ",
        cpf: 0,
        paymentMethod: " ",
        itensQtd: 0,
        totalValue: 0,
      },
    validationSchema: OrderEditValidator,
    onSubmit: (values) => {
      console.log(values);
    }
  });

  const { handleSubmit, values, handleChange, setFieldValue, errors } = formik;

  return (
    <Layout>
      <Box component="form" onSubmit={handleSubmit}>
        <TextField 
          name="date" 
          label="Data" 
          fullWidth 
          value={values.date} 
          onChange={handleChange} 
          error={!!errors.date}
          helperText={errors.date}
        />
        <TextField 
          name="cpf" 
          label="CPF" 
          fullWidth
          value={values.cpf} 
          onChange={handleChange} 
          error={!!errors.cpf}
          helperText={errors.cpf}
        />
        <Select 
          name="paymentMethod" 
          label="Forma de Pagamento" 
          fullWidth 
          value={values.paymentMethod} 
          onChange={(e) => setFieldValue("paymentMethod", e.target.value)}
          error={!!errors.paymentMethod}>

          <MenuItem value="debito">à vista</MenuItem>
          <MenuItem value="credito">prazo</MenuItem>
          <MenuItem value="pix">PIX</MenuItem>
        
        </Select>
        <TextField 
          name="itensQtd" 
          label="Quantidade de Itens" 
          fullWidth 
          value={values.itensQtd} 
          onChange={handleChange} 
          error={!!errors.itensQtd}
          helperText={errors.itensQtd} 
        />
        <TextField 
          name="totalValue" 
          label="Valor Total" 
          fullWidth 
          value={values.totalValue}
          onChange={handleChange} 
          error={!!errors.totalValue}
          helperText={errors.totalValue}>
            
        </TextField>

        <Button variant="outlined" color="secondary">
          Cancelar
        </Button>
        <Button variant="contained" color="primary" type="submit">
          Atualizar
        </Button>
      </Box>
    </Layout>
  );
};

export default EditTemplate;