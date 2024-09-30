import * as Yup from "yup";

export const OrderEditValidator = () => {

    return Yup.object().shape({
        data: Yup.string()
            .required("Campo Obrigatório")
            .min(8, "Escreva a data corrida sem /")
            .max(8, "Escreva a data corrida sem /"),
        cpf: Yup.number().required().max(11, "O CPF deve ser escrito de forma corrida").min(11, "O CPF deve ser escrito de forma corrida"),
        payment_method: Yup.string(),
        itens_qtd: Yup.number().min(1, "O numero de itens não pode ser nulo"),
        total_value: Yup.number().min(0.01, "O valor não pode ser nulo nem negativo"),
    });

};