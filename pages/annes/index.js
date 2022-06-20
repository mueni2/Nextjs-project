import styles from '../../styles/Ninjas.module.css'
import Link from 'next/link'

export const getStaticProps = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/users');
  const data = await res.json();

  return {
    props: { annes: data }
  }
}

const Ninjas = ({ annes }) => {
  // console.log(ninjas)

  return (
    <div>
      <h1>All Annes's</h1>
      {annes.map(anne => (
        <Link href={'/annes/' + anne.id} key={anne.id}>
          <a className={styles.single}>
            <h3>{ anne.name }</h3>
          </a>
        </Link>
      ))}
    </div>
  );
}
 
export default Ninjas;