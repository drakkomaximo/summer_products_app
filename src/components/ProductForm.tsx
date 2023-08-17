import { FC, useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Product } from "../interfaces";
import { ProductFormSchema } from "../utils";
import { FaImage } from "react-icons/fa";

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
  const [imageData, setImageData] = useState<{
    imageUrl: string;
    imageName: string;
  } | null>(initialProduct?.image || null);
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
      data.image = imageData;
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
      className="bg-white rounded-lg shadow-md p-4 mt-6 mb-6 sm:mb-0"
    >
      <div className="flex flex-col sm:flex-row mb-4">
        <div className="w-full sm:w-1/2 pr-2">
          <label htmlFor="imageInput" className="cursor-pointer">
            {imageData ? (
              <img
                src={imageData.imageUrl}
                alt="Product"
                className="w-full h-[10rem] sm:h-[18rem] cursor-pointer object-cover"
              />
            ) : (
              <div className="bg-gray-100 h-[10rem] sm:h-[18rem] flex flex-col justify-center items-center cursor-pointer">
                <FaImage size={"5rem"} />
                <span className="text-2xl font-bold">No Image</span>
                <span className="text-2xl font-bold">Click to Upload</span>
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
        <div className="w-full sm:w-1/2 pl-2">
          <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2">Name:</label>
            <input
              {...register("name")}
              type="text"
              defaultValue={(initialProduct && initialProduct.name) || ""}
              className="w-full border rounded py-2 px-3"
            />
            {errors.name && (
              <p className="text-red-500">{errors.name.message}</p>
            )}
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2">
              Description:
            </label>
            <textarea
              {...register("description")}
              rows={3}
              defaultValue={
                (initialProduct && initialProduct.description) || ""
              }
              className="w-full border rounded py-2 px-3 resize-none"
            />
            {errors.description && (
              <p className="text-red-500">{errors.description.message}</p>
            )}
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2">Price:</label>
            <input
              {...register("price", { valueAsNumber: true })}
              defaultValue={
                (initialProduct && initialProduct.price) || undefined
              }
              type="number"
              className="w-full border rounded py-2 px-3"
            />
            {errors.price && (
              <p className="text-red-500">{errors.price.message}</p>
            )}
          </div>
        </div>
      </div>
      <div className="flex">
        <button
          onClick={onBack}
          className="bg-red-500 hover:bg-red-900 text-white py-2 px-4 rounded mr-4 font-bold"
        >
          Cancel
        </button>
        <button
          type="submit"
          className="bg-blue-600 hover:bg-blue-800 text-white py-2 px-4 rounded font-bold"
        >
          {initialProduct ? "Edit" : "Create"}
        </button>
      </div>
    </form>
  );
};

export default ProductForm;
