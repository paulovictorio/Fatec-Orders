"use client";
import EditTemplate from "@/components/templates/products/EditTemplate";
import { IProduct } from "@/Interfaces/IProduct";
import axios from "axios";
import { env } from "@/config/env";
import { useEffect, useState } from "react";

interface ProductEditProps {
  params: { slug: string };
}

 const ProductEdit: React.FC<ProductEditProps> = ({ params }) => {
    const [product, setProduct] = useState<IProduct>();

    useEffect(() => {
      const fetchData = async () => {
        if(!params.slug) return;
        const response = await axios.get(
          `${env.apiBaseUrl}/produto/${params.slug}`
        );
        const { 
            id,
            descricao: description, 
            marca: brand, 
            valor: value, 
            peso_gramas: weight, 
            sabor: flavor, 
          } = response.data.produto;

        setProduct({
          id,
          brand, 
          description, 
          flavor, 
          value, 
          weight
        });
      };

    fetchData();
  }, [params.slug]);
  return <EditTemplate product={product} />;
};

export default ProductEdit;
