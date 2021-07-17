/** @jsxImportSource theme-ui */
import { FC } from "react"
import { GetStaticProps } from 'next'

interface Props {
  content:contenttypes 
}
interface contenttypes {
  title: string
}

const index:FC<Props> = ({content}: Props) => (
  <div sx={{ height: `calc(100vh - 60px)`}}>
    <div sx={{variant: 'containers.page', display: 'flex', alignItems: 'center', height: '100%'}}>
      <h1 sx={{fontSize: 8, my: 0}}>{content.title}</h1>
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