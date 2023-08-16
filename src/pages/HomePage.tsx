import { Header, ProductsList } from "../components"

export const HomePage = () => {
  return (
    <>
    <Header />
    <div className="flex flex-col items-center">
      <h1 className="text-7xl capitalize font-bold">homePage summer app</h1>
      <ProductsList />
    </div>
    </>
  )
}