import * as Yup from "yup";

export const OrderEditValidator = () => {

    return Yup.object().shape({
        date: Yup.string()
            .required("A data é obrigatória")
            .matches(/^\d{4}-\d{2}-\d{2}$/, "A data deve ser no formato AAAA-MM-DD"),
        cpf: Yup.number().required("O CPF é obrigatório").max(11, "O CPF deve conter no máximo 11 números sem hifén").min(11, "O CPF deve conter no minimo 11 numeros sem hifén"),
        payment_method: Yup.string().required("A forma de pagamento é obrigatória"),
        itens_qtd: Yup.number().required("A quantidade de itens é obrigatória").min(1, "O numero de itens não pode ser 0"),
        total_value: Yup.number().required("O valor total é obrigatório").min(0.01, "O valor não pode ser 0 nem negativo"),
    });

};