import { Header, ProductsList } from "../components"

export const HomePage = () => {
  return (
    <>
    <Header />
    <div className="flex flex-col items-center">
      <ProductsList />
    </div>
    </>
  )
}