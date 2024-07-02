import { HeroesList } from '../components/HeroesList'

export const MarvelPage = () => {
  return (
    <>
    <h1>Marvel Comics</h1>
    <ul>
      <HeroesList publisher='Marvel Comics' />
    </ul>
    </>
  )
}
