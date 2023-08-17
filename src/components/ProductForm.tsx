import { FC, useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Product } from "../interfaces";
import { ProductFormSchema } from "../utils";

interface ProductFormProps {
  onBack: () => void;
  onSubmit: (product: Product) => void;
  initialProduct?: Product;
}

export const ProductForm: FC<ProductFormProps> = ({
  onBack,
  onSubmit,
  initialProduct,
}) => {
  const [imageData, setImageData] = useState<{ imageUrl: string; imageName: string } | null>(
    initialProduct?.image || null
  );
  const imageInputRef = useRef<HTMLInputElement>(null);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(ProductFormSchema),
    defaultValues: initialProduct,
  });

  const handleFormSubmit = (data: Product) => {
    if (imageData) {
      data.image = imageData; // Agrega el objeto de imagen al producto
    }
    onSubmit(data);
  };

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setImageData({
        imageUrl: URL.createObjectURL(file),
        imageName: file.name,
      });
    }
  };

  return (
    <form
      onSubmit={handleSubmit(handleFormSubmit)}
      className="bg-white rounded-lg shadow-md p-4"
    >
      <h3 className="text-xl font-semibold mb-4">
        {initialProduct ? "Edit Product" : "Create Product"}
      </h3>
      <div className="flex mb-4">
      <div className="w-1/2 pr-2">
          <label htmlFor="imageInput" className="cursor-pointer">
            {imageData ? (
              <img
                src={imageData.imageUrl}
                alt="Product"
                className="w-full h-[18rem] cursor-pointer object-cover"
              />
            ) : (
              <div className="bg-gray-100 h-40 flex justify-center items-center cursor-pointer">
                No Image. Click to Upload
              </div>
            )}
          </label>
          <input
            ref={imageInputRef}
            onChange={handleImageUpload}
            type="file"
            accept="image/*"
            id="imageInput"
            className="hidden"
          />
          {errors.image?.imageUrl && (
            <p className="text-red-500">{errors.image.imageUrl.message}</p>
          )}
        </div>
        <div className="w-1/2 pl-2">
        <div className="mb-4">
        <label className="block text-gray-700 font-bold mb-2">Nombre:</label>
        <input
          {...register("name")}
          type="text"
          defaultValue={initialProduct && initialProduct.name || ''}
          className="w-full border rounded py-2 px-3"
        />
        {errors.name && <p className="text-red-500">{errors.name.message}</p>}
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 font-bold mb-2">
          Descripción:
        </label>
        <textarea
          {...register("description")}
          defaultValue={initialProduct && initialProduct.description || ''}
          className="w-full border rounded py-2 px-3"
        />
        {errors.description && (
          <p className="text-red-500">{errors.description.message}</p>
        )}
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 font-bold mb-2">Precio:</label>
        <input
          {...register("price", {valueAsNumber: true})}
          defaultValue={initialProduct && initialProduct.price || undefined}
          type="number"
          className="w-full border rounded py-2 px-3"
        />
        {errors.price && <p className="text-red-500">{errors.price.message}</p>}
      </div>
        </div>
      </div>
{/*       <div className="mb-4">
        <label className="block text-gray-700 font-bold mb-2">Imagen:</label>
        <div className="flex items-center">
          <label
            htmlFor="image"
            className="bg-blue-500 text-white py-2 px-4 rounded cursor-pointer"
          >
            <FaUpload className="mr-2" />
            Subir Imagen
          </label>
          <input
            onChange={handleImageUpload}
            type="file"
            accept="image/*"
            id="image"
            className="hidden"
          />
          {errors.image?.imageUrl && (
            <p className="text-red-500">{errors.image.imageUrl.message}</p>
          )}
        </div>
      </div> */}
      <div className="flex">
        <button
          onClick={onBack}
          className="bg-gray-500 hover:bg-gray-900 text-white py-2 px-4 rounded mr-4"
        >
          Go back
        </button>
        <button
          type="submit"
          className="bg-blue-600 hover:bg-blue-800 text-white py-2 px-4 rounded"
        >
          {initialProduct ? "Edit" : "Create"}
        </button>
      </div>
    </form>
  );
};

export default ProductForm;
