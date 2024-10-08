"use client";
import EditTemplate from "@/components/templates/products/EditTemplate";
import { IProduct } from "@/Interfaces/IProduct";
import { env } from "@/config/env";
import { useEffect, useState } from "react";
import { withDataFetching } from "@/components/templates/HOCS/withDataFetching";

interface ProductEditProps {
  params?: { slug: string };
  data: any;
  error: string;
}

 const ProductEdit: React.FC<ProductEditProps> = ({ params, data }) => {
    const [product, setProduct] = useState<IProduct>();

    useEffect(() => {
        if(!data) return;
        const { 
            id,
            descricao: description, 
            marca: brand, 
            valor: value, 
            peso_gramas: weight, 
            sabor: flavor, 
          } = data.produto;

        setProduct({
          id,
          brand, 
          description, 
          flavor, 
          value, 
          weight
        });
      }, [data]);

      return <EditTemplate product={product} />;
  };


export default withDataFetching(`${env.apiBaseUrl}/produto`)(ProductEdit);
