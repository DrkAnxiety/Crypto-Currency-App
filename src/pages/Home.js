import { ListCoins } from "../components/ListCoins"

export const Home = () => {
  return (
    <article className='w-full min-h-screen p-2 pt-12'>
      <section className='w-full h-full'>
        <ListCoins />
      </section>
    </article>
  )
}
