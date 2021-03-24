import React from 'react'
import {Helmet} from 'react-helmet';
const Meta = ({title,description, keywords}) => {

  return (
      <Helmet>
      <title>{title}</title>
      <meta name='description' content={description}></meta>
      <meta name='keywords' content={keywords} />
    </Helmet>
  )
}

Meta.defaultProps = {
  title:'Welcome to Tech Cart',
  description: 'We sell the best cheap electronics products',
  keywords: 'electronics,by electronics,to electronics'
}

export default Meta
