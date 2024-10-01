"use client";
import EditTemplate from "@/components/templates/products/EditTemplate";

interface ProductEditProps {
  params: { slug: string };
}

export const ProductEdit: React.FC<ProductEditProps> = ({ params }) => {
  return <EditTemplate />;
};

export default ProductEdit;
