import Magic from "../../components/input"
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="">

        <div className="text-5xl pb-[25%]">
          Binary to Decimal Converter
        </div>
        <p className="pb-[50px] flex flex-col items-center text-3xl">Type Binaries (1 or 0)</p>


        <Magic />
      </div>
    </main>
  )
}
