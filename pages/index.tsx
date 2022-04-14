import { FC } from "react"
import { GetStaticProps } from 'next'

interface Props {
  content:contenttypes 
}
interface contenttypes {
  title: string
}

const index:FC<Props> = ({content}: Props) => (
  <div>
    <div>
      <h1>{content.title}</h1>
    </div>
  </div>
)

export default index

export const getStaticProps:GetStaticProps = () => {
  return {
    props: {
      content: {
        title: 'Alysanne website(onConstruction)'
      }
    }
  }
}