import * as Yup from "yup";

export const ProductEditValidator = () => {

    return Yup.object().shape({
        description: Yup.string()
            .required("Campo Obrigatório")
            .min(3, "Campo deve ter pelo menos ${min} caracteres")
            .max(100, "Campo deve ter no máximo ${max} caracteres"),
        brand: Yup.string().required().max(80),
        value: Yup.number().min(0.01).required(),
        weight: Yup.number().min(0.01),
        flavor: Yup.string(),
    });

};