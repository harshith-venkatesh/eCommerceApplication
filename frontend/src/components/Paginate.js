import React from 'react'
import {Pagination} from 'react-bootstrap';
import {LinkContainer} from 'react-router-bootstrap';
const Paginate = ({pages,page,isAdmin=false,keyword=''}) => {

  return pages>1 && (
    <Pagination>
      {[...Array(pages).keys()].map(pageItem => 
        <LinkContainer key={pageItem + 1} to={keyword? `/search/${keyword}/page/${pageItem+1}` : `/page/${pageItem+1}`} >
          <Pagination.Item active={pageItem+1 === page}>{pageItem+1}</Pagination.Item>
        </LinkContainer>)}
    </Pagination>
  )
}

export default Paginate
